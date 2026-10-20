# 🎓 Next-Gen KIOT LMS (Knowledge Institute of Technology - Autonomous)

> High-performance, modern, accessible Learning Management System web application inspired by [kiotlms.com/my/courses.php](https://kiotlms.com/my/courses.php), built with authentic KIOT Autonomous institution data, advanced academic tracking, anti-cheat assessment engine, AI study assistant, and placement readiness.

---

## 🌟 What This Platform Does & How It Elevates KIOT LMS

The live site at `https://kiotlms.com/my/courses.php` is powered by Moodle (Moove theme). While it provides essential course listings, our **Next-Gen KIOT LMS** upgrades the entire user experience into an ultra-modern, high-speed, comprehensive academic ecosystem with:

### 0. 🔐 Dedicated Login & Single Sign-On Portal (`login.html`)
- **Authentic KIOT Moodle Login Interface**: Directly modeled after `https://kiotlms.com/login/index.php`.
- **Split-Screen Institutional Showcase**: Highlights KIOT's NAAC 'A' grade, NBA accredited programmes, AICTE IDEA Lab, and 910+ placements in Zoho, TCS, etc.
- **⚡ 1-Click Demo Login Shortcuts**:
  - **Student Persona**: `Arihant S` (Reg No: `611221104042` / `student@123`)
  - **Faculty Persona**: `Dr. P. Rajasekaran - HOD CSE` (ID: `FAC_CSE_104` / `faculty@123`)
- **Authentication Options**:
  - Username & Password with show/hide eye toggle
  - **KIOT Google Workspace SSO** (`@kiot.ac.in`)
  - **Guest Learner Access**
  - **Password Recovery Modal** (OTP / Campus email reset)
- **Session Sync**: Smooth transition to `index.html` with persistent profile state and instant **Log Out** in the user menu.

### 1. 📚 Course Dashboard (`/my/courses.php` Enhanced)
- **Authentic KIOT Branding & Assets**: High-resolution official logos, badges, and color tokens from Knowledge Institute of Technology (Kakapalayam, Salem - Autonomous).
- **Multi-State Filtering**:
  - `All Courses (8)`
  - `In Progress (6)` (Active Semester V)
  - `Past Semesters (4)` (Semesters I to IV with finalized grades)
  - `Starred / Favorites (4)`
- **Live Search & Sorting**: Instant debounced search by course title, code (e.g. `21CS501`, `21AI503`), or faculty name. Sort by Code, Title, Progress %, or Attendance %.
- **Dual Display Modes**: Seamless 1-click toggle between **Interactive Grid Cards** and **Structured List View**.
- **Real-Time Progress & Metrics**: Visual progress meters, live attendance pills with safe (>75%) threshold alerts, Continuous Internal Assessment (CIA) marks, and urgent upcoming assignment countdowns.

### 2. 🔍 Interactive Course Deep-Dive Modal
Clicking on **any course** opens a rich drawer with 6 interactive tabs:
- **Units & Syllabus (I to V)**: Complete unit breakdown with lecture hours, topics mapped to Course Outcomes (CO1-CO5), downloadable lecture notes, PPTs, video links, and **interactive unit completion toggles** that update course progress in real-time.
- **CIA Internal Marks Scorecard**: Itemized marks for CIA-1, CIA-2, Model Exam, Assignments, and Attendance, with automatic conversion to 50 marks and projected University Letter Grade (`O`, `A+`, `A`).
- **Assignments & Submissions Portal**: Submission status, deadlines, faculty feedback, and an interactive file uploader with **simulated AI Rubric & Turnitin Plagiarism check**!
- **Online Quiz & Anti-Cheat Assessment Engine**: Timed 10-minute quiz engine that implements **KIOT LMS's authentic anti-cheating scripts** (fullscreen lockdown notice, copy-paste suppression, right-click blocking, and tab-switch telemetry) with live score feedback!
- **Placement & Interview Question Bank**: Curated technical questions asked by KIOT's top recruiters (**Zoho Corporation, TCS Digital, Tech Mahindra**) for each specific subject.
- **In-Course KIOT-AI Tutor**: Dedicated AI assistant to explain tricky algorithms, generate 2-mark Anna University questions, and assist in viva preparation.

### 3. 🎯 Extra Information & Exclusive Capabilities ("Make It Best")
- 🎫 **Official Autonomous Semester Exam Hall Ticket Generator**:
  - Full official format from the Office of the Controller of Examinations (CoE).
  - Displays Candidate Register No (`611221104042`), attested photo, registered courses, exam dates, exam hall allocations, invigilator columns, barcode, and **1-click Print / Save as PDF** support.
- 🕒 **Live Timetable & Classroom Locator**:
  - Day Order 3 schedule with period timings, room allocations (`CS-304`, `ICT Lab 4`), and a pulsing **"Ongoing Lecture"** status indicator.
- 📊 **Smart Attendance Buffer Calculator**:
  - Tells students exactly how many classes they can safely miss while remaining strictly above the mandatory 75% Anna University attendance bar.
- 💼 **Placement & Career Readiness Center**:
  - Spotlights KIOT's proud **910+ offers**, featuring CTC breakdowns for Zoho (8.4 - 12 LPA), TCS Digital (7.2 - 9.0 LPA), Tech Mahindra, Virtusa, and Cognizant.
- 📖 **Central Digital Library E-Consortium**:
  - Quick access to IEEE Xplore, DELNET, NPTEL SWAYAM, and KIOT Institutional DSpace.
- 👥 **Student & Faculty Persona Switcher**:
  - Instant toggle between Student Mode (`Arihant S - Year III B.E CSE`) and Faculty Mode (`Dr. P. Rajasekaran - Professor & HOD CSE`).
- 🌓 **Accessibility & Themes**:
  - Dark Mode & Light Mode with local storage persistence.
  - Accessibility font size scaling (`A-`, `A`, `A+`).
  - High-Contrast Mode for WCAG compliance.

---

## 🚀 How to Run the Application

The application requires **zero external dependencies** and runs on any standard browser.

### Option 1: Zero-Dependency Local Node Server (Recommended)
```bash
# Navigate to the project directory
cd "c:\Users\ariha\OneDrive\Desktop\div project"

# Start the server
npm start
# or: node server.js
```
Open your browser and navigate to:
👉 **`http://localhost:3000`**

### Option 2: Direct Browser Opening
Simply double-click `index.html` in your file explorer to open it directly in Google Chrome, Microsoft Edge, or Mozilla Firefox!

---

## 📁 Project Structure

```
div project/
├── assets/
│   ├── kiot_logo.png           # Official Knowledge Institute of Technology Logo
│   ├── kiot_favicon.png        # Official KIOT Favicon
│   ├── coursesicon.jpg         # KIOT Moove Course Management Icon
│   ├── assessmentsicons.jpg    # KIOT Moove Assessments Icon
│   ├── student_facultyicon.jpg # KIOT Moove Portal Icon
│   └── placementicon.jpg       # KIOT Moove Placement Icon
├── index.html                  # Semantic, accessible HTML5 single page app
├── styles.css                  # Custom animations, glassmorphism, print CSS, dark mode
├── data.js                     # Full Autonomous curriculum, CIA marks, syllabus, exams
├── app.js                      # Application state, filters, quiz engine, modal system, AI chat
├── server.js                   # Lightweight zero-dependency Node.js HTTP server
├── package.json                # Project manifest & start script
└── README.md                   # Documentation and usage guide
```

---

## 🏛️ Institution Details Grounding
- **Institution**: Knowledge Institute of Technology (KIOT)
- **Status**: Autonomous Institution, Affiliated to Anna University, Chennai
- **Campus**: NH544, Kakapalayam, Salem - 637 504, Tamil Nadu
- **Regulation**: Regulations 2021 (Autonomous Curriculum - CBCS)
- **Original Source**: [kiotlms.com](https://kiotlms.com) / [kiotlms.com/my/courses.php](https://kiotlms.com/my/courses.php)
