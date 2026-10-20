/**
 * KIOT LMS - Knowledge Institute of Technology (Autonomous)
 * Main Interactive Application Controller
 */

// Application State
const state = {
  activeView: 'courses', // 'courses', 'timetable', 'cia', 'attendance', 'placement', 'library', 'announcements'
  courseDisplayMode: 'grid', // 'grid' or 'list'
  courseFilterStatus: 'all',
  courseCategoryFilter: 'all',
  courseSort: 'code',
  searchQuery: '',
  selectedCourse: null,
  modalActiveTab: 'units',
  isFacultyMode: false,
  activeQuiz: null,
  quizTimerInterval: null,
  quizRemainingSeconds: 600,
  quizUserAnswers: {},
  chatMessages: [
    {
      sender: 'ai',
      text: 'Vanakkam! I am your KIOT-AI Study Companion. You can ask me to explain any syllabus topic from your Autonomous R-2021 courses, summarize units, generate 2-mark Anna University questions, or practice Zoho & TCS interview questions.'
    }
  ]
};

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAccessibility();
  initAuth();
  renderNotifications();
  renderCourses();
  renderTimetable();
  renderCiaView();
  renderAttendanceView();
  renderPlacementView();
  renderLibraryView();
  renderAnnouncementsView();
  renderProfileView();
  setupEventListeners();
});

// ================= THEME & ACCESSIBILITY CONTROLS =================
function initTheme() {
  const savedTheme = localStorage.getItem('kiot_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('kiot_theme', isDark ? 'dark' : 'light');
      showToast(isDark ? 'Dark theme enabled' : 'Light theme enabled', 'info');
      // re-render charts if CIA view is active
      if (state.activeView === 'cia') renderCiaChart();
    });
  }
}

function initAccessibility() {
  const fontSmBtn = document.getElementById('fontSmBtn');
  const fontMdBtn = document.getElementById('fontMdBtn');
  const fontLgBtn = document.getElementById('fontLgBtn');
  const contrastBtn = document.getElementById('contrastToggleBtn');

  const root = document.documentElement;

  if (fontSmBtn) {
    fontSmBtn.addEventListener('click', () => {
      root.classList.remove('font-md', 'font-lg');
      root.classList.add('font-sm');
      updateFontBtnActive('fontSmBtn');
      showToast('Text size set to compact (A-)', 'info');
    });
  }

  if (fontMdBtn) {
    fontMdBtn.addEventListener('click', () => {
      root.classList.remove('font-sm', 'font-lg');
      root.classList.add('font-md');
      updateFontBtnActive('fontMdBtn');
      showToast('Text size set to standard (A)', 'info');
    });
  }

  if (fontLgBtn) {
    fontLgBtn.addEventListener('click', () => {
      root.classList.remove('font-sm', 'font-md');
      root.classList.add('font-lg');
      updateFontBtnActive('fontLgBtn');
      showToast('Text size set to comfortable (A+)', 'info');
    });
  }

  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      root.classList.toggle('high-contrast');
      const isHC = root.classList.contains('high-contrast');
      showToast(isHC ? 'High contrast mode on' : 'High contrast mode off', 'info');
    });
  }
}

function updateFontBtnActive(activeId) {
  ['fontSmBtn', 'fontMdBtn', 'fontLgBtn'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    if (id === activeId) {
      btn.className = 'px-2 py-1 bg-white dark:bg-slate-700 rounded shadow-xs text-blue-600 dark:text-blue-400';
    } else {
      btn.className = 'px-2 py-1 hover:text-blue-600 dark:hover:text-blue-400';
    }
  });
}

// ================= EVENT LISTENERS =================
function setupEventListeners() {
  // Mobile Sidebar Drawer
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  const mainSidebar = document.getElementById('mainSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  if (sidebarToggleBtn && mainSidebar && sidebarBackdrop) {
    sidebarToggleBtn.addEventListener('click', () => {
      mainSidebar.classList.toggle('-translate-x-full');
      sidebarBackdrop.classList.toggle('hidden');
    });

    sidebarBackdrop.addEventListener('click', () => {
      mainSidebar.classList.add('-translate-x-full');
      sidebarBackdrop.classList.add('hidden');
    });
  }

  // Global Search Shortcuts (Ctrl+K)
  const globalSearchInput = document.getElementById('globalSearchInput');
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (globalSearchInput) globalSearchInput.focus();
    }
  });

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      state.searchQuery = val;
      const courseInput = document.getElementById('courseSearchInput');
      if (courseInput) courseInput.value = val;
      switchView('courses');
      renderCourses();
    });
  }

  // Notifications Dropdown Toggle
  const notificationBtn = document.getElementById('notificationBtn');
  const notificationDropdown = document.getElementById('notificationDropdown');
  if (notificationBtn && notificationDropdown) {
    notificationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationDropdown.classList.add('hidden');
      }
    });
  }

  // User Profile Menu Dropdown Toggle
  const userProfileBtn = document.getElementById('userProfileBtn');
  const userDropdownMenu = document.getElementById('userDropdownMenu');
  if (userProfileBtn && userDropdownMenu) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!userDropdownMenu.contains(e.target) && !userProfileBtn.contains(e.target)) {
        userDropdownMenu.classList.add('hidden');
      }
    });
  }
}

// User Authentication Initializer
function initAuth() {
  const savedUserJson = localStorage.getItem('kiot_auth_user');
  if (savedUserJson) {
    try {
      const user = JSON.parse(savedUserJson);
      state.isFacultyMode = (user.role === 'faculty');
      syncUserUI(user);
    } catch (e) {
      console.error('Failed to parse saved auth user:', e);
    }
  } else {
    syncUserUI(KIOT_DATA.currentUser);
  }
}

function syncUserUI(user) {
  const isFac = state.isFacultyMode;
  const nameEl = document.getElementById('headerUserName');
  const subEl = document.getElementById('headerUserSub');
  const avatarEl = document.getElementById('headerUserAvatar');
  const personaLabel = document.getElementById('personaLabel');
  const dropName = document.getElementById('dropdownUserName');
  const dropRole = document.getElementById('dropdownUserRole');

  if (nameEl) nameEl.textContent = user.name;
  if (subEl) subEl.textContent = isFac ? 'HOD CSE • Cabin 204' : `${user.regNo || '611221104042'} (CSE)`;
  if (avatarEl) avatarEl.src = user.avatar;
  if (personaLabel) personaLabel.textContent = isFac ? 'Faculty Mode' : 'Student Mode';
  if (dropName) dropName.textContent = user.name;
  if (dropRole) dropRole.textContent = isFac ? 'Faculty • Professor & HOD' : 'Student • III Year B.E. CSE';
}

function toggleUserDropdown() {
  const menu = document.getElementById('userDropdownMenu');
  if (menu) menu.classList.toggle('hidden');
}

function handleLogout() {
  localStorage.removeItem('kiot_auth_user');
  showToast('Logging out of KIOT LMS session...', 'info');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 500);
}

// Persona Switcher logic
function togglePersona() {
  state.isFacultyMode = !state.isFacultyMode;
  const user = state.isFacultyMode ? KIOT_DATA.facultyUser : KIOT_DATA.currentUser;
  syncUserUI(user);

  const badge = state.isFacultyMode 
    ? 'Switched to Faculty Persona: Dr. P. Rajasekaran (HOD CSE)' 
    : 'Switched to Student Persona: Arihant S (Year III B.E CSE)';
  
  showToast(badge, 'success');
  renderCourses();
}

// ================= VIEW SWITCHER =================
function switchView(viewName) {
  state.activeView = viewName;
  
  // Hide all main view containers
  const viewIds = ['courses', 'profile', 'timetable', 'cia', 'attendance', 'placement', 'library', 'announcements'];
  viewIds.forEach(id => {
    const el = document.getElementById(`view-${id}`);
    if (el) el.classList.add('hidden');

    const navBtn = document.getElementById(`nav-${id}`);
    if (navBtn) {
      navBtn.classList.remove('nav-item-active');
    }
  });

  // Show active view container
  const activeEl = document.getElementById(`view-${viewName}`);
  if (activeEl) activeEl.classList.remove('hidden');

  const activeNav = document.getElementById(`nav-${viewName}`);
  if (activeNav) activeNav.classList.add('nav-item-active');

  // Trigger specific views logic
  if (viewName === 'cia') {
    setTimeout(renderCiaChart, 100);
  } else if (viewName === 'profile') {
    renderProfileView();
  }

  // Close mobile sidebar if open
  const mainSidebar = document.getElementById('mainSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  if (mainSidebar && window.innerWidth < 1024) {
    mainSidebar.classList.add('-translate-x-full');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= COURSE RENDERING & FILTERING (/my/courses.php) =================
function getFilteredCourses() {
  let list = [...KIOT_DATA.courses];

  // If status is "completed", return past courses
  if (state.courseFilterStatus === 'completed') {
    return KIOT_DATA.pastCourses.map(c => ({
      id: c.code,
      code: c.code,
      title: c.title,
      department: "CSE",
      category: c.category,
      credits: c.credits,
      semester: c.semester,
      status: "completed",
      isStarred: false,
      progress: 100,
      grade: c.grade,
      attendance: { percentage: c.attendance, safeStatus: "Completed" },
      faculty: { name: c.faculty, title: "Course Faculty" }
    }));
  }

  // Status Filter
  if (state.courseFilterStatus === 'starred') {
    list = list.filter(c => c.isStarred);
  } else if (state.courseFilterStatus === 'in-progress') {
    list = list.filter(c => c.status === 'in-progress');
  }

  // Category Filter
  if (state.courseCategoryFilter !== 'all') {
    list = list.filter(c => c.category === state.courseCategoryFilter);
  }

  // Search Filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(c => 
      c.title.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.faculty.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }

  // Sorting
  list.sort((a, b) => {
    if (state.courseSort === 'code') return a.code.localeCompare(b.code);
    if (state.courseSort === 'title') return a.title.localeCompare(b.title);
    if (state.courseSort === 'progress') return (b.progress || 0) - (a.progress || 0);
    if (state.courseSort === 'attendance') return ((b.attendance?.percentage || 0) - (a.attendance?.percentage || 0));
    return 0;
  });

  return list;
}

function renderCourses() {
  const container = document.getElementById('coursesContainer');
  const noCoursesEl = document.getElementById('noCoursesState');
  if (!container) return;

  const courses = getFilteredCourses();

  if (courses.length === 0) {
    container.innerHTML = '';
    if (noCoursesEl) noCoursesEl.classList.remove('hidden');
    return;
  }

  if (noCoursesEl) noCoursesEl.classList.add('hidden');

  if (state.courseDisplayMode === 'grid') {
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5';
    container.innerHTML = courses.map(course => createCourseCardHTML(course)).join('');
  } else {
    container.className = 'flex flex-col gap-3';
    container.innerHTML = courses.map(course => createCourseListRowHTML(course)).join('');
  }
}

function createCourseCardHTML(course) {
  const isPast = course.status === 'completed';
  const progressPct = course.progress || 0;
  const attendancePct = course.attendance?.percentage || 0;
  const isSafeAttendance = attendancePct >= 75.0;

  return `
    <div class="course-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col overflow-hidden group">
      
      <!-- Card Image & Subject Banner -->
      <div class="relative h-40 overflow-hidden bg-gradient-to-r ${course.color || 'from-blue-600 to-indigo-800'}">
        <img 
          src="${course.bannerImage || 'https://images.unsplash.com/photo-1516116211227-bbc13c9a6321?auto=format&fit=crop&q=80&w=800'}" 
          alt="${course.title}" 
          class="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span class="text-[11px] font-mono font-bold bg-white/20 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full border border-white/20">
            ${course.code}
          </span>
          <button 
            onclick="toggleStarCourse(event, '${course.id || course.code}')" 
            class="w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-xs" 
            title="Star Course"
          >
            <i class="fa-${course.isStarred ? 'solid text-amber-400' : 'regular text-white'} fa-star text-xs"></i>
          </button>
        </div>

        <!-- Category & Credits Badge -->
        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span class="text-[11px] font-semibold bg-blue-500/30 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 truncate max-w-[170px]">
            ${course.category}
          </span>
          <span class="text-[11px] font-bold bg-amber-500/30 backdrop-blur-md px-2 py-0.5 rounded-md text-amber-200 border border-amber-400/20">
            ${course.credits} Credits
          </span>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <!-- Title & Faculty -->
        <div>
          <h3 
            onclick="openCourseDetailModal('${course.id || course.code}')" 
            class="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 cursor-pointer transition line-clamp-2 leading-snug"
          >
            ${course.title}
          </h3>

          <div class="flex items-center gap-2.5 mt-2.5">
            <img 
              src="${course.faculty?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'}" 
              alt="${course.faculty?.name}" 
              class="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
            >
            <div class="text-xs truncate">
              <div class="font-semibold text-slate-800 dark:text-slate-200 truncate">${course.faculty?.name}</div>
              <div class="text-[10px] text-slate-400 truncate">${course.faculty?.title || 'Faculty In-Charge'}</div>
            </div>
          </div>
        </div>

        <!-- Academic Metrics (Progress, Attendance, CIA) -->
        <div class="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          
          <!-- Progress Bar -->
          <div>
            <div class="flex items-center justify-between text-[11px] font-semibold mb-1">
              <span class="text-slate-500 dark:text-slate-400">Syllabus Covered</span>
              <span class="text-blue-600 dark:text-blue-400 font-mono">${progressPct}%</span>
            </div>
            <div class="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" style="width: ${progressPct}%"></div>
            </div>
          </div>

          <!-- Attendance & Internal Marks Pill -->
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div class="text-[10px] text-slate-400 font-semibold uppercase">Attendance</div>
              <div class="font-bold font-mono ${isSafeAttendance ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'} flex items-center gap-1 mt-0.5">
                <span>${attendancePct}%</span>
                <i class="fa-solid fa-circle-check text-[10px]"></i>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div class="text-[10px] text-slate-400 font-semibold uppercase">Internal CIA</div>
              <div class="font-bold font-mono text-slate-800 dark:text-slate-200 mt-0.5">
                ${course.ciaMarks?.totalInternal || (isPast ? course.grade : '44.0')}/50
              </div>
            </div>
          </div>

          ${course.nextDeadline ? `
            <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-center gap-2 text-[11px] text-amber-800 dark:text-amber-300">
              <i class="fa-regular fa-clock shrink-0 text-amber-600"></i>
              <span class="truncate font-medium">${course.nextDeadline.title}</span>
            </div>
          ` : ''}

        </div>

        <!-- Action Buttons Footer -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <button 
            onclick="openCourseDetailModal('${course.id || course.code}')" 
            class="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition flex items-center justify-center gap-1.5"
          >
            <span>Enter Courseware</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
          
          <button 
            onclick="startCourseQuiz('${course.id || course.code}')" 
            class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition" 
            title="Take Quick Assessment"
          >
            <i class="fa-solid fa-stopwatch text-xs text-purple-500"></i>
          </button>
        </div>

      </div>

    </div>
  `;
}

function createCourseListRowHTML(course) {
  const isSafeAttendance = (course.attendance?.percentage || 0) >= 75.0;

  return `
    <div class="course-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="flex items-center gap-4 flex-1">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${course.color || 'from-blue-600 to-indigo-800'} text-white flex items-center justify-center shrink-0 font-bold text-xs font-mono shadow-xs">
          ${course.code.substring(2, 6)}
        </div>
        <div class="space-y-0.5">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">${course.code}</span>
            <span class="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full">${course.category}</span>
            <span class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">${course.credits} Credits</span>
          </div>
          <h4 onclick="openCourseDetailModal('${course.id || course.code}')" class="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 cursor-pointer">
            ${course.title}
          </h4>
          <p class="text-xs text-slate-500">${course.faculty?.name} • ${course.department || 'CSE'}</p>
        </div>
      </div>

      <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-800">
        <div class="text-center">
          <div class="text-[10px] text-slate-400 uppercase font-semibold">Attendance</div>
          <div class="text-xs font-bold font-mono ${isSafeAttendance ? 'text-emerald-600' : 'text-red-500'}">
            ${course.attendance?.percentage || 0}%
          </div>
        </div>

        <div class="text-center">
          <div class="text-[10px] text-slate-400 uppercase font-semibold">Progress</div>
          <div class="text-xs font-bold font-mono text-blue-600 dark:text-blue-400">
            ${course.progress || 0}%
          </div>
        </div>

        <button 
          onclick="openCourseDetailModal('${course.id || course.code}')" 
          class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition"
        >
          View Units
        </button>
      </div>
    </div>
  `;
}

// Course Filters
function filterCoursesByStatus(status) {
  state.courseFilterStatus = status;
  ['all', 'in-progress', 'completed', 'starred'].forEach(s => {
    const btn = document.getElementById(`tab-${s}`);
    if (!btn) return;
    if (s === status) {
      btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 transition';
    } else {
      btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition';
    }
  });
  renderCourses();
}

function handleCourseSearch(val) {
  state.searchQuery = val;
  renderCourses();
}

function handleCategoryFilter(val) {
  state.courseCategoryFilter = val;
  renderCourses();
}

function handleCourseSort(val) {
  state.courseSort = val;
  renderCourses();
}

function setCourseDisplayMode(mode) {
  state.courseDisplayMode = mode;
  const gridBtn = document.getElementById('viewGridBtn');
  const listBtn = document.getElementById('viewListBtn');
  if (gridBtn && listBtn) {
    if (mode === 'grid') {
      gridBtn.className = 'p-1.5 rounded bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs';
      listBtn.className = 'p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-slate-200';
    } else {
      listBtn.className = 'p-1.5 rounded bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs';
      gridBtn.className = 'p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-slate-200';
    }
  }
  renderCourses();
}

function toggleStarCourse(event, courseId) {
  event.stopPropagation();
  const course = KIOT_DATA.courses.find(c => c.id === courseId || c.code === courseId);
  if (course) {
    course.isStarred = !course.isStarred;
    showToast(course.isStarred ? `Starred ${course.code}` : `Removed star from ${course.code}`, 'info');
    renderCourses();
  }
}

function resetFilters() {
  state.courseFilterStatus = 'all';
  state.courseCategoryFilter = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('courseSearchInput');
  const catSelect = document.getElementById('categorySelect');
  if (searchInput) searchInput.value = '';
  if (catSelect) catSelect.value = 'all';
  filterCoursesByStatus('all');
}

// ================= COURSE DEEP-DIVE MODAL CONTROLLER =================
function openCourseDetailModal(courseId) {
  const course = KIOT_DATA.courses.find(c => c.id === courseId || c.code === courseId) 
    || KIOT_DATA.pastCourses.find(c => c.code === courseId);
  
  if (!course) return;
  state.selectedCourse = course;

  document.getElementById('modalCourseCode').textContent = course.code;
  document.getElementById('modalCourseCategory').textContent = course.category;
  document.getElementById('modalCourseCredits').textContent = `${course.credits} Credits (${course.ltpc || '3-0-0-3'})`;
  document.getElementById('modalCourseTitle').textContent = course.title;
  document.getElementById('modalFacultyName').textContent = `${course.faculty?.name || course.faculty}, ${course.faculty?.title || 'Faculty In-Charge'}`;
  document.getElementById('modalFacultyEmail').textContent = course.faculty?.email || 'cse.dept@kiot.ac.in';
  document.getElementById('modalAttendancePct').textContent = `${course.attendance?.percentage || 90}%`;
  document.getElementById('modalCiaScore').textContent = `${course.ciaMarks?.totalInternal || (course.grade || '44')}/50`;

  setModalTab('units');

  const modal = document.getElementById('courseModal');
  if (modal) modal.classList.add('active');
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  if (modal) modal.classList.remove('active');
  if (state.quizTimerInterval) {
    clearInterval(state.quizTimerInterval);
  }
}

function setModalTab(tabName) {
  state.modalActiveTab = tabName;
  const tabs = ['units', 'cia', 'assignments', 'quiz', 'placement', 'aitutor'];
  tabs.forEach(t => {
    const btn = document.getElementById(`modalTab-${t}`);
    if (!btn) return;
    if (t === tabName) {
      btn.className = 'tab-btn px-4 py-2.5 text-xs font-bold text-white border-b-2 border-white transition';
    } else {
      btn.className = 'tab-btn px-4 py-2.5 text-xs font-semibold text-blue-200 hover:text-white border-b-2 border-transparent transition';
    }
  });

  renderModalTabContent();
}

function renderModalTabContent() {
  const container = document.getElementById('modalTabContainer');
  const course = state.selectedCourse;
  if (!container || !course) return;

  switch (state.modalActiveTab) {
    case 'units':
      container.innerHTML = renderUnitsTabHTML(course);
      break;
    case 'cia':
      container.innerHTML = renderCiaTabHTML(course);
      break;
    case 'assignments':
      container.innerHTML = renderAssignmentsTabHTML(course);
      break;
    case 'quiz':
      container.innerHTML = renderQuizTabHTML(course);
      break;
    case 'placement':
      container.innerHTML = renderPlacementTabHTML(course);
      break;
    case 'aitutor':
      container.innerHTML = renderAITutorTabHTML(course);
      break;
    default:
      container.innerHTML = `<p>Tab content not available.</p>`;
  }
}

// 1. Units & Syllabus Tab
function renderUnitsTabHTML(course) {
  if (!course.syllabusUnits || course.syllabusUnits.length === 0) {
    return `<div class="p-6 text-center text-slate-500">Syllabus archived for past semester.</div>`;
  }

  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div>
          <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100">Autonomous R-2021 Regulation Curriculum</h4>
          <p class="text-xs text-slate-500">5 Comprehensive Units (45 Lecture Hours) • Mapped to Course Outcomes CO1-CO5</p>
        </div>
        <button onclick="downloadAllCourseMaterials('${course.code}')" class="px-3.5 py-1.5 text-xs font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-100 transition flex items-center gap-1.5">
          <i class="fa-solid fa-cloud-arrow-down"></i>
          <span>Download All Units (.zip)</span>
        </button>
      </div>

      <div class="space-y-3">
        ${course.syllabusUnits.map((unit, idx) => `
          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 sm:p-5 transition">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                  ${unit.unitNumber}
                </span>
                <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">${unit.title}</h5>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-mono text-slate-500">${unit.hours} Hours</span>
                <button 
                  onclick="toggleUnitCompletion('${course.code}', ${unit.unitNumber})" 
                  class="text-xs font-semibold px-2.5 py-1 rounded-full ${unit.completed ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'} transition flex items-center gap-1"
                >
                  <i class="fa-solid ${unit.completed ? 'fa-check-circle' : 'fa-circle'} text-[10px]"></i>
                  <span>${unit.completed ? 'Completed' : 'Mark Done'}</span>
                </button>
              </div>
            </div>

            <!-- Topics -->
            <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1 ml-8 list-disc mb-3">
              ${unit.topics.map(t => `<li>${t}</li>`).join('')}
            </ul>

            <!-- Materials list -->
            ${unit.materials ? `
              <div class="ml-8 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-2">
                ${unit.materials.map(m => `
                  <button onclick="downloadMaterialFile('${m.name}')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-[11px] hover:bg-slate-100 dark:hover:bg-slate-600 transition">
                    <i class="fa-solid ${m.type === 'pdf' ? 'fa-file-pdf text-red-500' : m.type === 'ppt' ? 'fa-file-powerpoint text-amber-500' : m.type === 'video' ? 'fa-video text-blue-500' : 'fa-file-code text-emerald-500'}"></i>
                    <span class="font-medium">${m.name}</span>
                    <span class="text-[10px] text-slate-400">(${m.size || m.duration})</span>
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleUnitCompletion(courseCode, unitNumber) {
  const course = KIOT_DATA.courses.find(c => c.code === courseCode);
  if (!course) return;
  const unit = course.syllabusUnits.find(u => u.unitNumber === unitNumber);
  if (unit) {
    unit.completed = !unit.completed;
    const completedCount = course.syllabusUnits.filter(u => u.completed).length;
    course.progress = Math.round((completedCount / course.syllabusUnits.length) * 100);
    renderModalTabContent();
    renderCourses();
    showToast(`Unit ${unitNumber} marked as ${unit.completed ? 'Completed' : 'Incomplete'}! Course progress updated to ${course.progress}%`, 'success');
  }
}

function downloadAllCourseMaterials(courseCode) {
  showToast(`Initiating archive download for ${courseCode} complete course pack...`, 'success');
}

function downloadMaterialFile(filename) {
  showToast(`Downloading: ${filename}`, 'info');
}

// 2. CIA Internal Marks Tab
function renderCiaTabHTML(course) {
  const cia = course.ciaMarks;
  if (!cia) return `<div class="p-6 text-center text-slate-500">Internal marks not applicable.</div>`;

  return `
    <div class="space-y-4">
      <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100">Continuous Internal Assessment (CIA) Scorecard</h4>
            <p class="text-xs text-slate-500">Autonomous Evaluation Matrix: Internal Weightage 50 Marks + End Semester 50 Marks</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-400 font-semibold uppercase">Total Internal</span>
            <div class="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">${cia.totalInternal} / ${cia.maxInternal}</div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
            <div class="text-[10px] text-slate-400 font-bold uppercase">CIA-1 Test</div>
            <div class="text-lg font-bold text-slate-800 dark:text-slate-100 font-mono mt-1">${cia.cia1.scored} / ${cia.cia1.max}</div>
            <div class="text-[10px] text-emerald-600 font-semibold">Above Class Avg</div>
          </div>

          <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
            <div class="text-[10px] text-slate-400 font-bold uppercase">CIA-2 Test</div>
            <div class="text-lg font-bold text-slate-800 dark:text-slate-100 font-mono mt-1">${cia.cia2.scored} / ${cia.cia2.max}</div>
            <div class="text-[10px] text-emerald-600 font-semibold">Consistent</div>
          </div>

          <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
            <div class="text-[10px] text-slate-400 font-bold uppercase">Model Examination</div>
            <div class="text-lg font-bold text-slate-800 dark:text-slate-100 font-mono mt-1">${cia.model.scored} / ${cia.model.max}</div>
            <div class="text-[10px] text-blue-600 font-semibold">Distinction</div>
          </div>

          <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
            <div class="text-[10px] text-slate-400 font-bold uppercase">Assignments & Att.</div>
            <div class="text-lg font-bold text-slate-800 dark:text-slate-100 font-mono mt-1">${cia.assignments.scored + cia.attendanceMark.scored} / 15</div>
            <div class="text-[10px] text-emerald-600 font-semibold">Full Marks</div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-award text-base text-emerald-600"></i>
            <div>
              <span class="font-bold">Projected Letter Grade: ${cia.projectedGrade}</span>
              <p class="text-[11px] text-emerald-700 dark:text-emerald-400">Score of 45+ in internal gives high confidence for 9.0+ Grade Point in End Semester Exam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 3. Assignments & Submissions Tab
function renderAssignmentsTabHTML(course) {
  const asgs = course.assignments || [];

  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div>
          <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100">Continuous Assessment Assignments</h4>
          <p class="text-xs text-slate-500">Moodle Rubric Grading & Turnitin Plagiarism Screening Active</p>
        </div>
        <span class="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold px-2.5 py-1 rounded-full">
          ${asgs.length} Assignments
        </span>
      </div>

      <div class="space-y-3">
        ${asgs.map(a => `
          <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">${a.title}</h5>
              <span class="self-start text-[11px] font-bold px-2.5 py-0.5 rounded-full ${a.status === 'Graded' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'}">
                ${a.status}
              </span>
            </div>

            <div class="flex items-center gap-4 text-xs text-slate-500">
              <span><i class="fa-regular fa-calendar mr-1"></i> Due: ${a.dueDate}</span>
              <span><i class="fa-solid fa-star mr-1 text-amber-500"></i> Score: <strong class="text-slate-800 dark:text-slate-200 font-mono">${a.score}</strong></span>
            </div>

            ${a.feedback ? `
              <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                <span class="font-bold text-slate-800 dark:text-slate-100">Faculty Feedback:</span> "${a.feedback}"
              </div>
            ` : ''}

            ${a.status !== 'Graded' ? `
              <div class="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div class="text-[11px] text-slate-400">Accepted formats: PDF, DOCX, ZIP (Max 10MB)</div>
                <button onclick="simulateUploadAssignment('${a.id}')" class="px-3.5 py-1.5 text-xs font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-xs transition flex items-center gap-1.5">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                  <span>Upload Submission</span>
                </button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function simulateUploadAssignment(asgId) {
  showToast('Assignment uploaded successfully! Simulated Turnitin check: 3% Similarity (Plagiarism Passed). Graded pending by faculty.', 'success');
}

// 4. Online Quiz & Anti-Cheat Tab (Replicating kiotlms.com anti-cheat protections)
function renderQuizTabHTML(course) {
  const quiz = course.quiz;
  if (!quiz) return `<div class="p-6 text-center text-slate-500">No active quiz for this subject.</div>`;

  return `
    <div class="space-y-4">
      
      <!-- Anti-Cheat Safeguards Warning (Matching kiotlms.com live scripts) -->
      <div class="p-4 rounded-2xl proctoring-banner text-white shadow-md space-y-2">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-shield-halved text-amber-300 text-lg"></i>
          <h4 class="text-sm font-bold tracking-tight uppercase">KIOT LMS Anti-Cheating & Proctoring Protocol Active</h4>
        </div>
        <p class="text-xs text-red-100 leading-relaxed">
          As configured on <strong>kiotlms.com</strong>, full-screen lockdown, right-click disabling, copy-paste suppression (Ctrl+C / Ctrl+V / Ctrl+X), and tab-switch telemetry are strictly enforced. Switching windows or exiting fullscreen triggers an immediate Proctoring Violation strike.
        </p>
      </div>

      <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">${quiz.title}</h4>
            <p class="text-xs text-slate-500">${quiz.totalQuestions} Questions • ${quiz.durationMinutes} Minutes Allotted • Passing Mark: 60%</p>
          </div>
          <div id="quizTimerDisplay" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-mono font-bold text-sm flex items-center gap-1.5">
            <i class="fa-regular fa-clock text-blue-600"></i>
            <span id="quizTimerText">10:00</span>
          </div>
        </div>

        <!-- Quiz Questions List -->
        <div id="quizQuestionsContainer" class="space-y-6 pt-2">
          ${quiz.questions.map((q, qIndex) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-750 border border-slate-100 dark:border-slate-700 space-y-3">
              <div class="flex items-start gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${qIndex + 1}</span>
                <p class="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">${q.question}</p>
              </div>

              <div class="space-y-2 ml-8">
                ${q.options.map((opt, optIndex) => `
                  <label class="flex items-center gap-2.5 p-2 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 cursor-pointer text-xs transition">
                    <input 
                      type="radio" 
                      name="quiz_q_${q.id}" 
                      value="${optIndex}" 
                      onchange="recordQuizAnswer('${q.id}', ${optIndex})"
                      class="text-blue-600 focus:ring-blue-500"
                    >
                    <span class="text-slate-800 dark:text-slate-200">${opt}</span>
                  </label>
                `).join('')}
              </div>

              <!-- Explanation container after submit -->
              <div id="quiz_expl_${q.id}" class="hidden ml-8 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-300">
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <span class="text-xs text-slate-400 font-semibold" id="quizAnsweredCount">0 of ${quiz.totalQuestions} Answered</span>
          <button onclick="submitCourseQuiz('${course.code}')" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5">
            <span>Submit Assessment</span>
            <i class="fa-solid fa-check"></i>
          </button>
        </div>

        <div id="quizResultBanner" class="hidden p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-center space-y-1">
          <h4 class="text-base font-black text-emerald-700 dark:text-emerald-300" id="quizResultScore">Score: 5 / 5 (100%)</h4>
          <p class="text-xs text-emerald-800 dark:text-emerald-400">Continuous Assessment component marks automatically synchronized to your CIA Gradebook!</p>
        </div>

      </div>

    </div>
  `;
}

function startCourseQuiz(courseCode) {
  openCourseDetailModal(courseCode);
  setModalTab('quiz');
  startQuizTimer();
}

function startQuizTimer() {
  if (state.quizTimerInterval) clearInterval(state.quizTimerInterval);
  state.quizRemainingSeconds = 600;
  state.quizUserAnswers = {};

  state.quizTimerInterval = setInterval(() => {
    state.quizRemainingSeconds--;
    if (state.quizRemainingSeconds <= 0) {
      clearInterval(state.quizTimerInterval);
      submitCourseQuiz(state.selectedCourse.code);
      return;
    }

    const mins = Math.floor(state.quizRemainingSeconds / 60);
    const secs = state.quizRemainingSeconds % 60;
    const textEl = document.getElementById('quizTimerText');
    if (textEl) {
      textEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }, 1000);
}

function recordQuizAnswer(qId, selectedOption) {
  state.quizUserAnswers[qId] = selectedOption;
  const count = Object.keys(state.quizUserAnswers).length;
  const total = state.selectedCourse?.quiz?.totalQuestions || 5;
  const el = document.getElementById('quizAnsweredCount');
  if (el) el.textContent = `${count} of ${total} Answered`;
}

function submitCourseQuiz(courseCode) {
  if (state.quizTimerInterval) clearInterval(state.quizTimerInterval);

  const course = KIOT_DATA.courses.find(c => c.code === courseCode);
  if (!course || !course.quiz) return;

  let correctCount = 0;
  course.quiz.questions.forEach(q => {
    const userAns = state.quizUserAnswers[q.id];
    const isCorrect = userAns === q.answer;
    if (isCorrect) correctCount++;

    const explEl = document.getElementById(`quiz_expl_${q.id}`);
    if (explEl) explEl.classList.remove('hidden');
  });

  const banner = document.getElementById('quizResultBanner');
  const scoreText = document.getElementById('quizResultScore');
  if (banner && scoreText) {
    banner.classList.remove('hidden');
    scoreText.textContent = `Evaluation Score: ${correctCount} / ${course.quiz.totalQuestions} (${Math.round((correctCount / course.quiz.totalQuestions) * 100)}%)`;
  }

  showToast(`Quiz Submitted! You scored ${correctCount}/${course.quiz.totalQuestions}`, 'success');
}

// 5. Placement & Interview Preparation Tab
function renderPlacementTabHTML(course) {
  const prep = course.placementPrep || [];

  return `
    <div class="space-y-4">
      <div class="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-200 dark:border-amber-900/60 space-y-1">
        <h4 class="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <i class="fa-solid fa-briefcase text-amber-600"></i>
          <span>KIOT Placement Question Bank (Zoho / TCS / Tech Mahindra)</span>
        </h4>
        <p class="text-xs text-amber-800 dark:text-amber-300">
          Real questions asked in technical interviews by major recruiters visiting KIOT for students taking ${course.code}.
        </p>
      </div>

      <div class="space-y-3">
        ${prep.map((item, idx) => `
          <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
              ${item.company}
            </span>
            <h5 class="text-xs font-bold text-slate-900 dark:text-slate-100">${item.question}</h5>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
              <strong class="text-slate-800 dark:text-slate-200">Approach & Key Answer:</strong> ${item.hint}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 6. KIOT-AI Tutor Tab in Course Modal
function renderAITutorTabHTML(course) {
  return `
    <div class="space-y-4">
      <div class="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-300">
        <h4 class="font-bold mb-1">Instant Syllabus Assistant for ${course.code}</h4>
        <p>Click any quick prompt below or ask custom questions related to ${course.title}.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <button onclick="askAITopic('Explain Unit 1 core concepts in 3 bullet points for ${course.code}')" class="p-3 text-left bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition">
          <div class="font-bold text-slate-800 dark:text-slate-200">📌 Summarize Unit 1</div>
          <div class="text-[11px] text-slate-400 mt-0.5">Quick revision before lecture</div>
        </button>

        <button onclick="askAITopic('Generate top 3 Anna University 2-mark questions with answers for ${course.code}')" class="p-3 text-left bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition">
          <div class="font-bold text-slate-800 dark:text-slate-200">🎯 Predict 2-Mark Exam Questions</div>
          <div class="text-[11px] text-slate-400 mt-0.5">Autonomous exam high probability questions</div>
        </button>
      </div>

      <div id="courseAiResponseArea" class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
        <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles text-blue-600"></i> AI Study Summary:
        </div>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed" id="courseAiResponseText">
          Select one of the topic buttons above or use the global KIOT-AI Assistant to explore ${course.title}.
        </p>
      </div>
    </div>
  `;
}

function askAITopic(prompt) {
  const textEl = document.getElementById('courseAiResponseText');
  if (!textEl) return;
  textEl.innerHTML = `<span class="text-slate-400 italic"><i class="fa-solid fa-spinner fa-spin mr-1"></i> KIOT-AI is analyzing Autonomous R-2021 syllabus...</span>`;
  
  setTimeout(() => {
    textEl.innerHTML = `
      <strong>Answer for "${prompt}":</strong><br><br>
      • <strong>Core Concept:</strong> This topic is fundamentally evaluated in Autonomous Part-A (2 marks) and Part-B (13 marks) questions.<br>
      • <strong>Key Derivation:</strong> Ensure step-by-step state diagrams or equations are explicitly written as per Anna University evaluation rubrics.<br>
      • <strong>Frequent Trap:</strong> Do not skip boundary edge cases; examiners look for state equivalence tables and proof sketches.
    `;
  }, 600);
}

// ================= TIMETABLE VIEW CONTROLLER =================
function renderTimetable() {
  const tbody = document.getElementById('timetableTableBody');
  if (!tbody) return;

  tbody.innerHTML = KIOT_DATA.todayTimetable.map(item => `
    <tr class="${item.isCurrent ? 'bg-blue-50/70 dark:bg-blue-900/20 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'} transition">
      <td class="p-3.5 font-mono text-slate-500 dark:text-slate-400">${item.period}</td>
      <td class="p-3.5 font-mono text-slate-700 dark:text-slate-300">${item.time}</td>
      <td class="p-3.5">
        <div class="font-bold text-slate-900 dark:text-slate-100">${item.name}</div>
        <div class="text-[11px] font-mono text-blue-600 dark:text-blue-400">${item.code}</div>
      </td>
      <td class="p-3.5">
        <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
          ${item.room}
        </span>
      </td>
      <td class="p-3.5 text-slate-600 dark:text-slate-300">${item.faculty}</td>
      <td class="p-3.5">
        ${item.isCurrent ? `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 animate-pulse">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ongoing Lecture
          </span>
        ` : `
          <span class="text-[11px] text-slate-400">${item.type}</span>
        `}
      </td>
    </tr>
  `).join('');
}

// ================= CIA VIEW CONTROLLER & CHART =================
function renderCiaView() {
  const listEl = document.getElementById('ciaSubjectList');
  if (!listEl) return;

  listEl.innerHTML = KIOT_DATA.courses.map(c => `
    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">${c.code}</span>
          <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100">${c.title}</h4>
        </div>
        <div class="text-right">
          <span class="text-sm font-black font-mono text-slate-900 dark:text-slate-100">${c.ciaMarks?.totalInternal || 44}/50</span>
          <div class="text-[10px] font-bold text-emerald-600">${c.ciaMarks?.projectedGrade || 'O Grade'}</div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-2 text-[11px] text-slate-500 pt-1">
        <div>CIA-1: <strong class="text-slate-800 dark:text-slate-200">${c.ciaMarks?.cia1.scored}/25</strong></div>
        <div>CIA-2: <strong class="text-slate-800 dark:text-slate-200">${c.ciaMarks?.cia2.scored}/25</strong></div>
        <div>Model: <strong class="text-slate-800 dark:text-slate-200">${c.ciaMarks?.model.scored}/100</strong></div>
        <div>Assg+Att: <strong class="text-slate-800 dark:text-slate-200">${(c.ciaMarks?.assignments.scored || 0) + (c.ciaMarks?.attendanceMark.scored || 0)}/15</strong></div>
      </div>
    </div>
  `).join('');
}

let ciaChartInstance = null;
function renderCiaChart() {
  const ctx = document.getElementById('ciaChart');
  if (!ctx) return;

  if (ciaChartInstance) ciaChartInstance.destroy();

  const labels = KIOT_DATA.courses.map(c => c.code);
  const data = KIOT_DATA.courses.map(c => c.ciaMarks?.totalInternal || 40);

  const isDark = document.documentElement.classList.contains('dark');

  ciaChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Internal Marks (out of 50)',
        data: data,
        backgroundColor: '#3b82f6',
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          min: 30,
          max: 50,
          grid: { color: isDark ? '#334155' : '#e2e8f0' },
          ticks: { color: isDark ? '#94a3b8' : '#64748b' }
        },
        x: {
          grid: { display: false },
          ticks: { color: isDark ? '#94a3b8' : '#64748b' }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ================= ATTENDANCE VIEW =================
function renderAttendanceView() {
  const grid = document.getElementById('attendanceGrid');
  if (!grid) return;

  grid.innerHTML = KIOT_DATA.courses.map(c => {
    const att = c.attendance || { conducted: 30, attended: 26, percentage: 86.6 };
    const pct = att.percentage;
    const isSafe = pct >= 75.0;

    return `
      <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">${c.code}</span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${isSafe ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-red-100 text-red-800'}">
            ${isSafe ? 'Eligible for Exams' : 'Attendance Shortage'}
          </span>
        </div>

        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-100 line-clamp-1">${c.title}</h4>

        <div class="flex items-baseline justify-between pt-1">
          <span class="text-2xl font-black font-mono ${isSafe ? 'text-emerald-600' : 'text-red-500'}">${pct}%</span>
          <span class="text-xs text-slate-500 font-mono">${att.attended} / ${att.conducted} Hours</span>
        </div>

        <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full ${isSafe ? 'bg-emerald-500' : 'bg-red-500'} rounded-full" style="width: ${pct}%"></div>
        </div>

        <div class="text-[11px] text-slate-400 flex items-center justify-between pt-1">
          <span>75% Minimum Bar</span>
          <span>OD Approved: <strong>${att.odApproved || 0} hrs</strong></span>
        </div>
      </div>
    `;
  }).join('');
}

// ================= PLACEMENT VIEW CONTROLLER =================
function renderPlacementView() {
  const container = document.getElementById('placementCompaniesList');
  if (!container) return;

  container.innerHTML = KIOT_DATA.placementData.topRecruiters.map(rec => `
    <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <div class="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-sm">
          ${rec.icon}
        </div>
        <span class="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
          ${rec.ctc}
        </span>
      </div>

      <div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${rec.name}</h4>
        <p class="text-xs text-slate-500">${rec.role}</p>
      </div>

      <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <span class="text-slate-500">Students Placed:</span>
        <strong class="font-mono text-slate-800 dark:text-slate-200">${rec.studentsPlaced} Offers</strong>
      </div>
    </div>
  `).join('');
}

// ================= LIBRARY VIEW =================
function renderLibraryView() {
  const container = document.getElementById('libraryResourcesList');
  if (!container) return;

  container.innerHTML = KIOT_DATA.libraryResources.map(res => `
    <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${res.name}</h4>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
          ${res.badge}
        </span>
      </div>
      <p class="text-xs text-slate-500 leading-relaxed">${res.desc}</p>
      <a href="${res.url}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
        <span>Access Portal</span>
        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
      </a>
    </div>
  `).join('');
}

// ================= ANNOUNCEMENTS VIEW =================
function renderAnnouncementsView() {
  const container = document.getElementById('allAnnouncementsList');
  if (!container) return;

  container.innerHTML = KIOT_DATA.announcements.map(ann => `
    <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white ${ann.badgeColor}">
          ${ann.badge}
        </span>
        <span class="text-xs font-mono text-slate-400">${ann.date}</span>
      </div>
      <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${ann.title}</h4>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${ann.content}</p>
      <div class="text-[11px] text-slate-400 font-medium pt-1">Issued by: ${ann.author}</div>
    </div>
  `).join('');
}

function renderNotifications() {
  const list = document.getElementById('notificationList');
  if (!list) return;

  list.innerHTML = KIOT_DATA.announcements.map(a => `
    <div class="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition cursor-pointer" onclick="switchView('announcements')">
      <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
        <span class="font-bold uppercase text-blue-600">${a.badge}</span>
        <span>${a.date}</span>
      </div>
      <div class="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">${a.title}</div>
    </div>
  `).join('');
}

// ================= MODALS: HALL TICKET, AI TUTOR, OD =================
function openHallTicketModal() {
  const modal = document.getElementById('hallTicketModal');
  if (modal) modal.classList.add('active');
}

function closeHallTicketModal() {
  const modal = document.getElementById('hallTicketModal');
  if (modal) modal.classList.remove('active');
}

function openAITutorModal(mode) {
  const modal = document.getElementById('aiTutorModal');
  if (modal) modal.classList.add('active');
  renderAIChatHistory();
}

function closeAITutorModal() {
  const modal = document.getElementById('aiTutorModal');
  if (modal) modal.classList.remove('active');
}

function openODRequestModal() {
  const modal = document.getElementById('odRequestModal');
  if (modal) modal.classList.add('active');
}

function closeODRequestModal() {
  const modal = document.getElementById('odRequestModal');
  if (modal) modal.classList.remove('active');
}

function handleODSubmit(event) {
  event.preventDefault();
  closeODRequestModal();
  showToast('On-Duty (OD) request forwarded to HOD Dr. P. Rajasekaran for approval.', 'success');
}

// AI Chat Engine
function renderAIChatHistory() {
  const container = document.getElementById('aiChatHistory');
  if (!container) return;

  container.innerHTML = state.chatMessages.map(msg => `
    <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
      <div class="max-w-[85%] p-3.5 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-xs' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-xs shadow-xs'} space-y-1">
        <div class="text-[10px] font-bold uppercase opacity-70 mb-0.5">${msg.sender === 'user' ? 'You (Arihant S)' : 'KIOT-AI Academic Tutor'}</div>
        <div class="leading-relaxed whitespace-pre-line">${msg.text}</div>
      </div>
    </div>
  `).join('');

  container.scrollTop = container.scrollHeight;
}

function sendAIChatMessage() {
  const input = document.getElementById('aiChatInput');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  state.chatMessages.push({ sender: 'user', text: val });
  input.value = '';
  renderAIChatHistory();

  // Simulated AI response
  setTimeout(() => {
    let response = `Based on your Autonomous R-2021 curriculum for B.E. CSE:\n\nRegarding "${val}", focus on the fundamental definition, standard derivation/algorithm, and 2 real-world use cases as typically tested in Autonomous Semester Examinations.`;
    
    if (val.toLowerCase().includes('normalization')) {
      response = `Here is the Normalization breakdown for Anna University Autonomous exams:\n\n1. 1NF: Eliminates repeating groups; all attributes atomic.\n2. 2NF: In 1NF and no partial dependencies (every non-prime attribute fully functionally dependent on whole candidate key).\n3. 3NF: In 2NF and no transitive dependencies (X -> Y requires X is superkey or Y is prime).\n4. BCNF: Stricter 3NF where for EVERY dependency X -> Y, X MUST be a superkey!`;
    } else if (val.toLowerCase().includes('zoho')) {
      response = `Top Zoho Technical Interview Questions for KIOT CSE:\n1. Implement custom string parser without using string library functions.\n2. Inverted Matrix Traversal & Spiral Number Pattern printing.\n3. Implement a mini relational cache with LRU eviction policy.\n4. Explain why indexing in DBMS uses B+ trees instead of Binary Search Trees (Disk I/O block size alignment).`;
    }

    state.chatMessages.push({ sender: 'ai', text: response });
    renderAIChatHistory();
  }, 500);
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('aiChatInput');
  if (input) input.value = promptText;
  sendAIChatMessage();
}

// ================= STUDENT PROFILE VIEW CONTROLLER =================
function renderProfileView() {
  const user = KIOT_DATA.currentUser;
  if (!user) return;

  const profilePageAvatar = document.getElementById('profilePageAvatar');
  const profilePageName = document.getElementById('profilePageName');
  const profilePageDept = document.getElementById('profilePageDept');
  const profilePageRegNo = document.getElementById('profilePageRegNo');

  if (profilePageAvatar && user.avatar) profilePageAvatar.src = user.avatar;
  if (profilePageName) profilePageName.textContent = user.name;
  if (profilePageDept) profilePageDept.textContent = `Department of ${user.department} • ${user.year} (${user.section})`;
  if (profilePageRegNo) profilePageRegNo.textContent = user.regNo;

  // Render Semester History table dynamically
  const semTableBody = document.getElementById('profileSemTableBody');
  if (semTableBody && user.semHistory && user.semHistory.length > 0) {
    semTableBody.innerHTML = user.semHistory.map((item, idx) => {
      const isCurrent = idx === user.semHistory.length - 1;
      return `
        <tr class="${isCurrent ? 'bg-blue-50/50 dark:bg-blue-900/10 font-bold' : ''}">
          <td class="p-3 ${isCurrent ? 'text-blue-700 dark:text-blue-300' : 'font-semibold text-slate-800 dark:text-slate-200'}">${item.sem} ${isCurrent ? '(Current)' : ''}</td>
          <td class="p-3 text-slate-500">${item.credits}</td>
          <td class="p-3 ${isCurrent ? 'font-black text-amber-500' : 'font-bold text-blue-600 dark:text-blue-400'}">${item.gpa} ${isCurrent ? '(Proj)' : ''}</td>
          <td class="p-3 ${isCurrent ? 'text-blue-600 font-sans' : 'text-emerald-600 font-sans font-semibold'}">${item.result}</td>
        </tr>
      `;
    }).join('');
  }
}

// ================= TOAST NOTIFICATION UTILITY =================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600 text-white' : type === 'error' ? 'bg-red-600 text-white' : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900';
  
  toast.className = `p-3.5 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2.5 transform transition-all duration-300 translate-y-3 opacity-0 pointer-events-auto ${bgClass}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-200' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info text-blue-400'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
