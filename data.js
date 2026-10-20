/**
 * KIOT LMS - Knowledge Institute of Technology (Autonomous)
 * Comprehensive Academic & Course Data Store
 */

const KIOT_DATA = {
  institution: {
    name: "Knowledge Institute of Technology",
    shortName: "KIOT",
    affiliation: "Autonomous Institution, Affiliated to Anna University, Chennai",
    accreditation: "Accredited by NAAC with 'A' Grade | NBA Accredited Programmes",
    campus: "NH544, Kakapalayam, Salem, Tamil Nadu - 637 504",
    established: 2009,
    regulation: "Regulations 2021 (Autonomous Curriculum - Choice Based Credit System)",
    activeSemester: "Semester V (Academic Year 2024-2025)",
    logo: "assets/kiot_logo.png",
    favicon: "assets/kiot_favicon.png"
  },

  currentUser: {
    id: "STU611221104042",
    name: "Arihant S",
    regNo: "611221104042",
    rollNo: "22CSR042",
    role: "student",
    degree: "B.E.",
    department: "Computer Science and Engineering",
    deptCode: "CSE",
    year: "III Year",
    semester: "Semester V",
    section: "Section B",
    batch: "2022 - 2026",
    cgpa: 8.74,
    standingArrears: 0,
    creditsEarned: 114,
    totalCredits: 165,
    overallAttendance: 89.6,
    mentor: "Dr. P. Rajasekaran, Professor & HOD",
    email: "arihant.s.cse@kiot.ac.in",
    personalEmail: "arihant.official@gmail.com",
    phone: "+91 98765 43210",
    dob: "14 August 2004",
    bloodGroup: "O +ve",
    fatherName: "S. Senthil Kumar",
    address: "42, Gandhi Road, Hasthampatti, Salem - 636 007, Tamil Nadu",
    transport: "College Bus Route 14 (Salem New Bus Stand to KIOT Campus)",
    busPassNo: "BP-2024-CSE-042",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    semHistory: [
      { sem: "Semester I", gpa: 8.64, credits: 22, result: "All Clear (Distinction)" },
      { sem: "Semester II", gpa: 8.82, credits: 24, result: "All Clear (Distinction)" },
      { sem: "Semester III", gpa: 8.70, credits: 23, result: "All Clear (Distinction)" },
      { sem: "Semester IV", gpa: 8.80, credits: 23, result: "All Clear (Distinction)" },
      { sem: "Semester V", gpa: 9.10, credits: 22, result: "Current (Projected)" }
    ],
    skills: ["C++", "Java", "Python", "SQL & Cloud SQL", "React & Tailwind", "Algorithms & LeetCode"],
    certifications: [
      { name: "NPTEL SWAYAM - Cloud Computing (IIT Kharagpur)", badge: "Elite + Gold", date: "May 2024" },
      { name: "AWS Certified Cloud Practitioner (CLF-C02)", badge: "Global Certified", date: "Jul 2024" },
      { name: "Zoho Level-1 Aptitude & Problem Solving", badge: "Qualified (88%)", date: "Sep 2024" }
    ]
  },

  facultyUser: {
    id: "FAC_CSE_104",
    name: "Dr. P. Rajasekaran, M.E., Ph.D.",
    role: "faculty",
    designation: "Professor & Head of the Department",
    department: "Computer Science and Engineering",
    cabin: "CSE Department - Main Block II Floor, Cabin 204",
    email: "hod.cse@kiot.ac.in",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    handledCourses: ["21CS501", "21CS508"]
  },

  academicStats: {
    registeredCourses: 8,
    activeCourses: 6,
    completedCredits: 114,
    currentCredits: 22,
    totalClassesConducted: 268,
    totalClassesAttended: 240,
    attendanceSafeThreshold: 75.0,
    ciaAverage: 44.2,
    pendingAssignments: 2,
    upcomingQuizzes: 1,
    nextExam: "CIA-2 Commencing on Nov 18, 2024"
  },

  announcements: [
    {
      id: "ann-1",
      title: "CoE Circular: Autonomous End Semester Theory Timetable (Nov/Dec 2024)",
      date: "Oct 10, 2024",
      author: "Controller of Examinations (CoE)",
      badge: "Exam Notice",
      badgeColor: "bg-red-500",
      content: "The Autonomous End-Semester Theory Examinations for B.E./B.Tech V Semester will commence from 28-Nov-2024. Hall tickets can now be downloaded from the KIOT LMS portal.",
      isImportant: true
    },
    {
      id: "ann-2",
      title: "Placement Drive Alert: Zoho Corporation Off-Campus & On-Campus Day 1",
      date: "Oct 08, 2024",
      author: "Director - Training & Placement Cell",
      badge: "Placement",
      badgeColor: "bg-amber-500",
      content: "Zoho Corporation drive for Software Developer & Quality Analyst roles is scheduled. Students with CGPA >= 7.5 and no standing arrears are eligible. Practice Aptitude Module in LMS.",
      isImportant: true
    },
    {
      id: "ann-3",
      title: "IDEA Lab Hackathon 2024: Hardware & IoT Innovation Challenge",
      date: "Oct 05, 2024",
      author: "AICTE IDEA Lab Coordinator",
      badge: "Innovation",
      badgeColor: "bg-emerald-500",
      content: "Register your 3-member teams for the 36-hour hackathon at KIOT AICTE-approved IDEA Lab. Cash prize pool of INR 50,000.",
      isImportant: false
    }
  ],

  courses: [
    {
      id: "21CS501",
      code: "21CS501",
      title: "Theory of Computation & Compiler Design",
      shortTitle: "TOC & Compiler Design",
      department: "CSE",
      category: "Professional Core",
      credits: 4,
      ltpc: "3-1-0-4",
      semester: 5,
      status: "in-progress", // "in-progress", "completed", "upcoming"
      isStarred: true,
      color: "from-blue-600 to-indigo-800",
      icon: "fa-brain",
      bannerImage: "https://images.unsplash.com/photo-1516116211227-bbc13c9a6321?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Dr. P. Rajasekaran",
        title: "Professor & HOD, CSE",
        email: "rajasekaran.cse@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      },
      progress: 78,
      attendance: {
        conducted: 38,
        attended: 35,
        percentage: 92.1,
        safeStatus: "Safe (>75%)",
        odApproved: 2
      },
      ciaMarks: {
        cia1: { scored: 23, max: 25 },
        cia2: { scored: 22, max: 25 },
        model: { scored: 88, max: 100 },
        assignments: { scored: 9.5, max: 10 },
        attendanceMark: { scored: 5, max: 5 },
        totalInternal: 44.5,
        maxInternal: 50,
        projectedGrade: "O (Outstanding)"
      },
      nextDeadline: {
        title: "Assignment 3: Syntax Directed Translation",
        dueDate: "Tomorrow, 11:59 PM",
        isUrgent: true
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Automata & Regular Expressions",
          hours: 9,
          topics: [
            "Deterministic and Non-deterministic Finite Automata (DFA, NFA)",
            "Equivalence of DFA and NFA, NFA with epsilon transitions",
            "Regular Expressions, Arden's Theorem",
            "Pumping Lemma for Regular Languages, Closure Properties"
          ],
          materials: [
            { type: "pdf", name: "Unit-1 Lecture Notes & Solved DFA Problems.pdf", size: "3.4 MB", date: "Aug 12" },
            { type: "ppt", name: "DFA to Regular Expression State Minimization.pptx", size: "5.1 MB", date: "Aug 15" },
            { type: "video", name: "Video Lecture: Arden's Theorem in Depth", duration: "42 mins", date: "Aug 18" }
          ],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Context Free Grammars & Pushdown Automata",
          hours: 9,
          topics: [
            "Context-Free Grammars (CFG) and Parse Trees",
            "Ambiguity in Grammars, Simplification of CFG",
            "Chomsky Normal Form (CNF) and Greibach Normal Form (GNF)",
            "Pushdown Automata (PDA), Acceptance by Empty Stack and Final State"
          ],
          materials: [
            { type: "pdf", name: "Unit-2 CFG & PDA Derivations Handbook.pdf", size: "4.2 MB", date: "Sep 02" },
            { type: "video", name: "NPDA vs DPDA State Machine Walkthrough", duration: "38 mins", date: "Sep 06" }
          ],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Turing Machines & Computability",
          hours: 9,
          topics: [
            "Turing Machine Formal Definition, Design of TM for Arithmetic Operations",
            "Variations of TM: Multi-tape, Non-deterministic TM",
            "Church-Turing Thesis, Universal Turing Machine",
            "Decidability and Undecidability, Halting Problem, Post Correspondence Problem (PCP)"
          ],
          materials: [
            { type: "pdf", name: "Unit-3 Turing Machine Design Patterns.pdf", size: "3.8 MB", date: "Sep 20" },
            { type: "qb", name: "Unit-3 Part-A 2 Marks with Answers & Part-B QB.pdf", size: "2.1 MB", date: "Sep 22" }
          ],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Lexical & Syntax Analysis (Compiler Frontend)",
          hours: 9,
          topics: [
            "Structure of a Compiler, Phases of Compilation",
            "Role of Lexical Analyzer, LEX Tool specifications",
            "Top-Down Parsing: Recursive Descent, LL(1) Grammars",
            "Bottom-Up Parsing: Shift-Reduce, Operator Precedence, LR(0), SLR(1), CLR(1), LALR(1)",
            "YACC Parser Generator tool"
          ],
          materials: [
            { type: "pdf", name: "Compiler Parsing Tables Step-by-Step Guide.pdf", size: "5.6 MB", date: "Oct 01" },
            { type: "code", name: "LEX & YACC Source Code Samples for Calculator.zip", size: "1.2 MB", date: "Oct 04" }
          ],
          completed: false
        },
        {
          unitNumber: 5,
          title: "Unit V: Code Generation & Code Optimization",
          hours: 9,
          topics: [
            "Syntax-Directed Translation Schemes (SDTS)",
            "Intermediate Code Generation: Quadruples, Triples, Three-Address Code",
            "Principal Sources of Optimization: Common Subexpression, Loop Invariant",
            "Dataflow Analysis, Register Allocation and Assignment",
            "Target Code Generation Algorithm"
          ],
          materials: [
            { type: "pdf", name: "Unit-5 Three Address Code & DAG Representation.pdf", size: "3.1 MB", date: "Oct 08" }
          ],
          completed: false
        }
      ],
      assignments: [
        {
          id: "asg-toc-1",
          title: "Assignment 1: Construction of Minimized DFA from Complex Regular Expressions",
          dueDate: "Sep 05, 2024",
          status: "Graded",
          score: "10 / 10",
          feedback: "Accurate transition tables and clear step-wise state equivalence minimization."
        },
        {
          id: "asg-toc-2",
          title: "Assignment 2: Construction of SLR(1) Parsing Table for Arithmetic Expressions",
          dueDate: "Sep 28, 2024",
          status: "Graded",
          score: "9 / 10",
          feedback: "Very good grammar augmentation. Slight typo in Follow set computation."
        },
        {
          id: "asg-toc-3",
          title: "Assignment 3: Intermediate Code Generation & DAG Construction",
          dueDate: "Tomorrow, 11:59 PM",
          status: "Pending Submission",
          score: "Not submitted",
          feedback: "Submit handwritten/typed PDF with step-wise three-address code."
        }
      ],
      quiz: {
        title: "TOC & Compiler Design - Quick Mastery Quiz",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q1",
            question: "Which of the following machines accepts Context-Sensitive Languages?",
            options: [
              "Deterministic Finite Automata (DFA)",
              "Pushdown Automata (PDA)",
              "Linear Bounded Automata (LBA)",
              "Turing Machine with infinite alphabet"
            ],
            answer: 2,
            explanation: "Linear Bounded Automata (LBA) corresponds to Type-1 Chomsky hierarchy (Context-Sensitive Languages)."
          },
          {
            id: "q2",
            question: "The language L = {a^n b^n c^n | n >= 1} is:",
            options: [
              "Regular",
              "Context-Free but not Regular",
              "Not Context-Free (Context-Sensitive)",
              "Deterministic Context-Free"
            ],
            answer: 2,
            explanation: "L = {a^n b^n c^n} cannot be accepted by a single stack PDA; it requires two stacks or a Turing Machine/LBA."
          },
          {
            id: "q3",
            question: "Which parser is the most powerful amongst LR parsers?",
            options: [
              "SLR(1)",
              "LR(0)",
              "LALR(1)",
              "Canonical LR(1) (CLR)"
            ],
            answer: 3,
            explanation: "Canonical LR(1) is the most powerful as it avoids state merging and has the largest state space."
          },
          {
            id: "q4",
            question: "Which phase of a compiler transforms Abstract Syntax Tree into Target-independent Three-Address Code?",
            options: [
              "Lexical Analysis",
              "Syntax Analysis",
              "Semantic Analysis",
              "Intermediate Code Generator"
            ],
            answer: 3,
            explanation: "The Intermediate Code Generator produces Three-Address Code, quadruples, or triples."
          },
          {
            id: "q5",
            question: "Arden's Theorem states that if P and Q are two regular expressions over an alphabet, and P does not contain epsilon, then R = Q + RP has a unique solution:",
            options: [
              "R = P*Q",
              "R = QP*",
              "R = Q*P",
              "R = (P+Q)*"
            ],
            answer: 1,
            explanation: "By Arden's Theorem, R = QP* is the unique solution to the equation R = Q + RP when epsilon is not in P."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (Technical Round 2)",
          question: "How do you evaluate regular expressions under the hood in a text search engine without backtracking O(2^N)?",
          hint: "Converting regex to Thompson's NFA and simulating DFA execution in O(M*N) time."
        },
        {
          company: "TCS Digital (Advanced Coding)",
          question: "Implement a basic Lexer in C++ or Java that tokenizes an SQL SELECT query into keywords, identifiers, and literals.",
          hint: "Use Finite State Machine with state transitions on whitespace, quotes, and punctuation."
        }
      ]
    },

    {
      id: "21CS502",
      code: "21CS502",
      title: "Database Management Systems & Cloud SQL",
      shortTitle: "DBMS & Cloud SQL",
      department: "CSE",
      category: "Professional Core",
      credits: 3,
      ltpc: "3-0-0-3",
      semester: 5,
      status: "in-progress",
      isStarred: true,
      color: "from-emerald-600 to-teal-800",
      icon: "fa-database",
      bannerImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Dr. M. Sangeetha",
        title: "Associate Professor, CSE",
        email: "sangeetha.m@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
      },
      progress: 85,
      attendance: {
        conducted: 35,
        attended: 31,
        percentage: 88.5,
        safeStatus: "Safe (>75%)",
        odApproved: 1
      },
      ciaMarks: {
        cia1: { scored: 24, max: 25 },
        cia2: { scored: 23, max: 25 },
        model: { scored: 92, max: 100 },
        assignments: { scored: 10, max: 10 },
        attendanceMark: { scored: 5, max: 5 },
        totalInternal: 47.0,
        maxInternal: 50,
        projectedGrade: "O (Outstanding)"
      },
      nextDeadline: {
        title: "Project Milestone: BCNF Normalization on Campus Hospital Database",
        dueDate: "Nov 12, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Relational Model & SQL Design",
          hours: 9,
          topics: [
            "Database System Concepts & Three-tier Architecture",
            "Relational Data Model, Integrity Constraints, ER and EER Modeling",
            "Relational Algebra & Tuple Relational Calculus",
            "Advanced SQL: Subqueries, Joins, Window Functions, Triggers, Views"
          ],
          materials: [
            { type: "pdf", name: "Relational Algebra to SQL Query Conversion.pdf", size: "4.1 MB", date: "Aug 10" },
            { type: "ppt", name: "EER Diagrams to Relational Schema Mapping.pptx", size: "3.7 MB", date: "Aug 14" }
          ],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Normalization & Functional Dependencies",
          hours: 9,
          topics: [
            "Functional Dependencies, Axioms of Armstrong",
            "Closure of Attribute Sets, Minimal Cover Algorithm",
            "Normal Forms: 1NF, 2NF, 3NF, Boyce-Codd Normal Form (BCNF)",
            "Multivalued Dependencies (4NF) and Join Dependencies (5NF)",
            "Lossless Join Decomposition & Dependency Preservation"
          ],
          materials: [
            { type: "pdf", name: "Step-by-step BCNF Decomposition Algorithm.pdf", size: "2.9 MB", date: "Sep 01" }
          ],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Transaction Processing & Concurrency Control",
          hours: 9,
          topics: [
            "ACID Properties, Transaction States",
            "Serializability: Conflict and View Serializability, Precedence Graphs",
            "Concurrency Control: Two-Phase Locking (2PL), Strict 2PL, Rigorous 2PL",
            "Timestamp Ordering Protocol, Multi-version Schemes",
            "Deadlock Detection, Prevention (Wait-Die, Wound-Wait), Recovery"
          ],
          materials: [
            { type: "pdf", name: "Concurrency Control Protocols & Lock Graphs.pdf", size: "3.5 MB", date: "Sep 18" },
            { type: "qb", name: "Transactions & Serializability Solved University Qs.pdf", size: "2.4 MB", date: "Sep 22" }
          ],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Indexing, Storage & Query Optimization",
          hours: 9,
          topics: [
            "File Organization: Heap, Sorted, Hashing",
            "B-Trees and B+ Trees Indexing Structures",
            "Cost-based Query Optimization, Heuristics in Query Optimization",
            "Database Recovery: Write-Ahead Logging (WAL), Checkpoints, ARIES"
          ],
          materials: [
            { type: "pdf", name: "B+ Tree Insertion and Deletion Algorithms.pdf", size: "4.8 MB", date: "Oct 05" }
          ],
          completed: true
        },
        {
          unitNumber: 5,
          title: "Unit V: Distributed Databases, NoSQL & Cloud SQL",
          hours: 9,
          topics: [
            "Distributed Databases: 2-Phase Commit (2PC), CAP Theorem, BASE Property",
            "NoSQL Stores: Document (MongoDB), Key-Value (Redis), Columnar (Cassandra)",
            "Cloud Databases: Google Cloud SQL, Amazon RDS, Managed PostgreSQL",
            "High Availability, Read Replicas, Auto-Sharding"
          ],
          materials: [
            { type: "pdf", name: "NoSQL vs Cloud SQL Architecture Guide.pdf", size: "3.9 MB", date: "Oct 10" }
          ],
          completed: false
        }
      ],
      assignments: [
        {
          id: "asg-db-1",
          title: "Complex SQL Joins & Analytical Window Functions on Hospital Dataset",
          dueDate: "Sep 08, 2024",
          status: "Graded",
          score: "10 / 10",
          feedback: "Great use of DENSE_RANK() and CTEs."
        },
        {
          id: "asg-db-2",
          title: "Database Normalization Case Study: E-Commerce Schema to 3NF/BCNF",
          dueDate: "Oct 02, 2024",
          status: "Graded",
          score: "10 / 10",
          feedback: "Flawless dependency preservation proofs."
        }
      ],
      quiz: {
        title: "DBMS & Cloud SQL Practice Challenge",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-db-1",
            question: "A relation R is in BCNF if for every non-trivial functional dependency X -> Y:",
            options: [
              "Y is a prime attribute",
              "X is a superkey of R",
              "X is a subset of candidate key",
              "Y is functionally dependent on X"
            ],
            answer: 1,
            explanation: "BCNF requires that the left-hand side X of every non-trivial functional dependency must be a superkey."
          },
          {
            id: "q-db-2",
            question: "Which isolation anomaly is prevented by REPEATABLE READ but allowed in READ COMMITTED?",
            options: [
              "Dirty Read",
              "Non-Repeatable Read (Fuzzy Read)",
              "Phantom Read",
              "Lost Update"
            ],
            answer: 1,
            explanation: "REPEATABLE READ locks the read rows so another transaction cannot modify them, preventing non-repeatable reads."
          },
          {
            id: "q-db-3",
            question: "In a B+ Tree of order m, the maximum number of children for an internal node is:",
            options: [
              "m - 1",
              "m",
              "m / 2",
              "2m"
            ],
            answer: 1,
            explanation: "The maximum number of child pointers in an internal node of order m is m."
          },
          {
            id: "q-db-4",
            question: "Which of the following describes the CAP Theorem?",
            options: [
              "Consistency, Atomicity, Partition tolerance",
              "Consistency, Availability, Partition tolerance",
              "Concurrency, Availability, Performance",
              "Cluster, Availability, Persistence"
            ],
            answer: 1,
            explanation: "CAP theorem states a distributed system can at best provide 2 out of Consistency, Availability, and Partition tolerance."
          },
          {
            id: "q-db-5",
            question: "Write-Ahead Logging (WAL) protocol dictates that:",
            options: [
              "Data blocks must be written to disk before log records",
              "Log records must be written to disk before corresponding dirty page is flushed",
              "Checkpoints only run when database is idle",
              "Transactions commit without waiting for log flush"
            ],
            answer: 1,
            explanation: "WAL ensures durability by requiring log records describing changes to hit persistent disk before the actual database page."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (Technical Round 1)",
          question: "Difference between Clustered and Non-Clustered Index, and how does B+ tree store data rows?",
          hint: "Clustered index physically orders the data leaf nodes; non-clustered index contains pointers."
        },
        {
          company: "Tech Mahindra (Cloud Associate)",
          question: "When should you choose Cloud SQL (Relational) over Firestore / MongoDB (Document DB)?",
          hint: "ACID guarantees, complex relational JOINs, strict schemas vs rapid schema evolution."
        }
      ]
    },

    {
      id: "21AI503",
      code: "21AI503",
      title: "Machine Learning & Deep Learning Fundamentals",
      shortTitle: "Machine Learning & DL",
      department: "AI & DS / CSE",
      category: "Professional Core",
      credits: 4,
      ltpc: "3-0-2-4",
      semester: 5,
      status: "in-progress",
      isStarred: true,
      color: "from-purple-600 to-indigo-900",
      icon: "fa-network-wired",
      bannerImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Prof. K. Vignesh",
        title: "Assistant Professor, CSE (AI Specialization)",
        email: "vignesh.k@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      progress: 64,
      attendance: {
        conducted: 36,
        attended: 33,
        percentage: 91.6,
        safeStatus: "Safe (>75%)",
        odApproved: 2
      },
      ciaMarks: {
        cia1: { scored: 21, max: 25 },
        cia2: { scored: 22, max: 25 },
        model: { scored: 84, max: 100 },
        assignments: { scored: 9, max: 10 },
        attendanceMark: { scored: 5, max: 5 },
        totalInternal: 42.5,
        maxInternal: 50,
        projectedGrade: "A+ (Excellent)"
      },
      nextDeadline: {
        title: "Mini-Project: Image Classification on Plant Disease using CNN",
        dueDate: "Nov 15, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Supervised Learning & Regression",
          hours: 9,
          topics: [
            "Machine Learning Life Cycle & Feature Engineering",
            "Linear Regression, Cost Function, Batch & Stochastic Gradient Descent",
            "Logistic Regression, Sigmoid activation, Binary Cross Entropy",
            "Regularization: L1 Lasso and L2 Ridge, Bias-Variance Tradeoff"
          ],
          materials: [
            { type: "pdf", name: "Gradient Descent Optimization & Math Derivations.pdf", size: "4.4 MB", date: "Aug 16" }
          ],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Classification & Ensemble Methods",
          hours: 9,
          topics: [
            "Decision Trees: ID3, C4.5, CART, Entropy and Gini Impurity",
            "Support Vector Machines (SVM), Hyperplanes, Kernel Trick",
            "Ensemble Learning: Bagging, Random Forests, Boosting (AdaBoost, XGBoost)",
            "Model Evaluation Metrics: Precision, Recall, F1-Score, ROC-AUC curve"
          ],
          materials: [
            { type: "pdf", name: "SVM Kernels & XGBoost Intuition Notes.pdf", size: "3.7 MB", date: "Sep 05" }
          ],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Unsupervised Learning & Dimensionality Reduction",
          hours: 9,
          topics: [
            "Clustering: K-Means, Elbow Method, Hierarchical Clustering (Dendrograms)",
            "DBSCAN Density-Based Clustering",
            "Dimensionality Reduction: Principal Component Analysis (PCA), Eigenvectors",
            "t-SNE for High-Dimensional Data Visualization"
          ],
          materials: [
            { type: "pdf", name: "PCA Mathematical Derivation & Code Examples.pdf", size: "3.2 MB", date: "Sep 24" }
          ],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Neural Networks & Deep Learning Foundations",
          hours: 9,
          topics: [
            "Perceptron, Multi-Layer Perceptrons (MLP), Activation Functions (ReLU, Softmax)",
            "Backpropagation Algorithm, Chain Rule Derivations",
            "Optimizers: Momentum, RMSProp, Adam",
            "Overfitting Mitigation: Dropout, Batch Normalization, Early Stopping"
          ],
          materials: [
            { type: "pdf", name: "Backpropagation Mathematical Proof & PyTorch Guide.pdf", size: "6.2 MB", date: "Oct 06" }
          ],
          completed: false
        },
        {
          unitNumber: 5,
          title: "Unit V: Convolutional Neural Networks & Transformers",
          hours: 9,
          topics: [
            "CNN Architecture: Convolutions, Kernels, Padding, Stride, Pooling",
            "Famous Architectures: LeNet, AlexNet, VGG16, ResNet Residual Blocks",
            "Transfer Learning on Pretrained Weights",
            "Introduction to Attention Mechanism and Transformers"
          ],
          materials: [
            { type: "pdf", name: "ResNet Skip Connections & Attention Basics.pdf", size: "5.1 MB", date: "Oct 11" }
          ],
          completed: false
        }
      ],
      assignments: [
        {
          id: "asg-ml-1",
          title: "Customer Churn Prediction using Logistic Regression and Random Forest",
          dueDate: "Sep 15, 2024",
          status: "Graded",
          score: "9.5 / 10",
          feedback: "Great exploratory data analysis and ROC-AUC curve generation."
        }
      ],
      quiz: {
        title: "Machine Learning & Neural Nets Checkpoint",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-ml-1",
            question: "L1 regularization (Lasso) differs from L2 (Ridge) primarily because L1:",
            options: [
              "Penalizes squared coefficients",
              "Leads to sparse feature weights (feature selection)",
              "Always performs worse than Ridge",
              "Does not prevent overfitting"
            ],
            answer: 1,
            explanation: "L1 regularization uses absolute values of weights, driving non-essential coefficients exactly to zero."
          },
          {
            id: "q-ml-2",
            question: "In Decision Trees, Gini Impurity for a perfectly pure node with only one class is:",
            options: [
              "1.0",
              "0.5",
              "0.0",
              "Undefined"
            ],
            answer: 2,
            explanation: "Gini Impurity = 1 - sum(p_i^2). For single class with p=1, Gini = 1 - 1^2 = 0."
          },
          {
            id: "q-ml-3",
            question: "Why do ResNet architectures employ Skip Connections (Residual Blocks)?",
            options: [
              "To decrease the number of trainable parameters",
              "To alleviate the vanishing gradient problem in very deep networks",
              "To perform max pooling without information loss",
              "To force weights to become zero"
            ],
            answer: 1,
            explanation: "Skip connections allow gradients to flow directly backward, enabling training of networks with 100+ layers without vanishing gradients."
          },
          {
            id: "q-ml-4",
            question: "Which optimizer combines both Momentum (first moment) and RMSProp (second moment of gradients)?",
            options: [
              "SGD",
              "Adagrad",
              "Adam",
              "Nesterov Accelerated Gradient"
            ],
            answer: 2,
            explanation: "Adam (Adaptive Moment Estimation) computes both running exponential averages of gradients and squared gradients."
          },
          {
            id: "q-ml-5",
            question: "If a model achieves 99% accuracy on training data but only 68% on validation data, it is suffering from:",
            options: [
              "High Bias (Underfitting)",
              "High Variance (Overfitting)",
              "Data leakage only",
              "Zero gradient"
            ],
            answer: 1,
            explanation: "Large gap between high training score and poor validation performance indicates High Variance / Overfitting."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (AI/ML Scientist Track)",
          question: "Explain the mathematics behind ROC-AUC and when Precision-Recall curve is preferred over ROC.",
          hint: "When dealing with highly imbalanced datasets, PR curve is more informative than ROC."
        },
        {
          company: "TCS Digital",
          question: "What is the difference between Batch Normalization and Layer Normalization?",
          hint: "Batch Norm computes statistics across batch dimension; Layer Norm computes across features for each sample (standard in Transformers)."
        }
      ]
    },

    {
      id: "21CS504",
      code: "21CS504",
      title: "Computer Networks & Cyber Security",
      shortTitle: "Networks & Cyber Security",
      department: "CSE",
      category: "Professional Core",
      credits: 3,
      ltpc: "3-0-0-3",
      semester: 5,
      status: "in-progress",
      isStarred: false,
      color: "from-cyan-600 to-blue-800",
      icon: "fa-shield-halved",
      bannerImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Prof. S. Nandhini",
        title: "Assistant Professor, CSE",
        email: "nandhini.s@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      },
      progress: 90,
      attendance: {
        conducted: 34,
        attended: 29,
        percentage: 85.3,
        safeStatus: "Safe (>75%)",
        odApproved: 0
      },
      ciaMarks: {
        cia1: { scored: 23, max: 25 },
        cia2: { scored: 22, max: 25 },
        model: { scored: 90, max: 100 },
        assignments: { scored: 10, max: 10 },
        attendanceMark: { scored: 5, max: 5 },
        totalInternal: 45.0,
        maxInternal: 50,
        projectedGrade: "A+ (Excellent)"
      },
      nextDeadline: {
        title: "Wireshark Packet Analysis Lab Report",
        dueDate: "Nov 08, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Physical & Data Link Layer Fundamentals",
          hours: 9,
          topics: ["OSI 7-Layer & TCP/IP Reference Models", "Error Detection: CRC, Hamming Code", "Framing & Flow Control: Sliding Window, Go-Back-N, Selective Repeat", "MAC Protocols: CSMA/CD, Ethernet, IEEE 802.11 Wi-Fi"],
          materials: [{ type: "pdf", name: "CRC Polynomial Division & Sliding Window Solved Examples.pdf", size: "3.6 MB", date: "Aug 12" }],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Network Layer & Routing Protocols",
          hours: 9,
          topics: ["IPv4 Addressing, Subnetting, CIDR, NAT", "Routing Algorithms: Distance Vector (Bellman-Ford), Link State (Dijkstra)", "Routing Protocols: RIP, OSPF, BGP", "IPv6 Architecture and Transition Mechanisms"],
          materials: [{ type: "pdf", name: "Subnetting & VLSM Numerical Guide.pdf", size: "2.8 MB", date: "Sep 04" }],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Transport Layer Protocols",
          hours: 9,
          topics: ["User Datagram Protocol (UDP)", "Transmission Control Protocol (TCP): 3-Way Handshake, Connection Teardown", "TCP Flow Control & Sliding Window", "TCP Congestion Control: AIMD, Slow Start, Congestion Avoidance, Fast Retransmit"],
          materials: [{ type: "pdf", name: "TCP Congestion Window Graphs & Analysis.pdf", size: "4.1 MB", date: "Sep 22" }],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Application Layer & Cryptography",
          hours: 9,
          topics: ["DNS, HTTP/1.1 vs HTTP/2 vs HTTP/3, SMTP, FTP", "Symmetric Cryptography: AES, DES", "Asymmetric Cryptography: RSA, Diffie-Hellman Key Exchange", "Hash Functions & Digital Signatures: SHA-256"],
          materials: [{ type: "pdf", name: "RSA Key Generation & Encryption Math.pdf", size: "3.3 MB", date: "Oct 05" }],
          completed: true
        },
        {
          unitNumber: 5,
          title: "Unit V: Network Security & Firewalls",
          hours: 9,
          topics: ["Network Attacks: DDoS, MITM, ARP Spoofing, DNS Poisoning", "Firewalls: Packet Filtering, Stateful Inspection, Next-Gen Firewalls", "Intrusion Detection & Prevention Systems (IDS/IPS)", "TLS/SSL Handshake & HTTPS Security"],
          materials: [{ type: "pdf", name: "TLS 1.3 Handshake & Packet Inspection Guide.pdf", size: "3.5 MB", date: "Oct 12" }],
          completed: false
        }
      ],
      assignments: [
        { id: "asg-net-1", title: "Subnetting Design for KIOT Campus Network (2000 Hosts)", dueDate: "Sep 18, 2024", status: "Graded", score: "10 / 10", feedback: "Clean VLSM design." }
      ],
      quiz: {
        title: "Networks & Security Assessment",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-net-1",
            question: "In TCP 3-way handshake, the flags transmitted in sequence by Client and Server are:",
            options: ["SYN, ACK, FIN", "SYN, SYN-ACK, ACK", "ACK, SYN-ACK, SYN", "FIN, ACK, FIN-ACK"],
            answer: 1,
            explanation: "TCP connection setup begins with SYN from client, SYN-ACK from server, and final ACK from client."
          },
          {
            id: "q-net-2",
            question: "A subnet mask of /26 provides how many usable host IP addresses per subnet?",
            options: ["64", "62", "30", "126"],
            answer: 1,
            explanation: "32 - 26 = 6 host bits. 2^6 = 64 total addresses; subtracting network and broadcast gives 62 usable hosts."
          },
          {
            id: "q-net-3",
            question: "Which algorithm is used in OSPF routing protocol?",
            options: ["Bellman-Ford", "Dijkstra's Shortest Path First", "Floyd-Warshall", "Kruskal's Algorithm"],
            answer: 1,
            explanation: "OSPF is a link-state routing protocol that utilizes Dijkstra's SPF algorithm."
          },
          {
            id: "q-net-4",
            question: "What cryptographic primitive provides non-repudiation in digital communication?",
            options: ["Symmetric Key Encryption (AES)", "Digital Signature (using sender's private key)", "MD5 Hashing", "Diffie-Hellman Key Exchange"],
            answer: 1,
            explanation: "Digital signatures created with the private key can only originate from the owner, ensuring non-repudiation."
          },
          {
            id: "q-net-5",
            question: "During TCP Slow Start, how does the congestion window (cwnd) increase each round trip time (RTT)?",
            options: ["Linearly by 1 MSS", "Exponentially (doubles each RTT)", "Quadratically", "Remains constant"],
            answer: 1,
            explanation: "Slow start doubles cwnd every RTT (exponential growth) until it hits the ssthresh threshold."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (Networks / Systems Engineer)",
          question: "Walk through exactly what happens at every layer when you type 'https://kiotlms.com' into a browser and hit enter.",
          hint: "DNS lookup -> ARP -> TCP 3-way handshake -> TLS handshake -> HTTP GET -> Server Response."
        }
      ]
    },

    {
      id: "21CS505",
      code: "21CS505",
      title: "Object-Oriented Software Engineering & Agile",
      shortTitle: "OOSE & Agile Methodology",
      department: "CSE",
      category: "Professional Core",
      credits: 3,
      ltpc: "3-0-0-3",
      semester: 5,
      status: "in-progress",
      isStarred: false,
      color: "from-amber-600 to-orange-800",
      icon: "fa-cubes",
      bannerImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Dr. R. Karthik",
        title: "Associate Professor, CSE",
        email: "karthik.r@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
      },
      progress: 70,
      attendance: {
        conducted: 32,
        attended: 27,
        percentage: 84.4,
        safeStatus: "Safe (>75%)",
        odApproved: 1
      },
      ciaMarks: {
        cia1: { scored: 21, max: 25 },
        cia2: { scored: 21, max: 25 },
        model: { scored: 86, max: 100 },
        assignments: { scored: 9, max: 10 },
        attendanceMark: { scored: 4.5, max: 5 },
        totalInternal: 42.0,
        maxInternal: 50,
        projectedGrade: "A+ (Excellent)"
      },
      nextDeadline: {
        title: "Sprint Retrospective & Jira Board Review",
        dueDate: "Nov 14, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Software Process Models & Requirements",
          hours: 9,
          topics: ["SDLC Phases, Waterfall, Incremental, Spiral Models", "Agile Philosophy: Agile Manifesto, Scrum Framework, Sprints", "User Stories, Product Backlog, Burn-down Charts", "Requirements Engineering: SRS IEEE 830 Standards"],
          materials: [{ type: "pdf", name: "Agile vs Waterfall Case Study Handbook.pdf", size: "3.2 MB", date: "Aug 15" }],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Object-Oriented Modeling with UML",
          hours: 9,
          topics: ["Use Case Diagrams, Class Diagrams, Object Diagrams", "Interaction Diagrams: Sequence Diagrams, Collaboration Diagrams", "State Machine Diagrams, Activity Diagrams", "Component and Deployment Diagrams"],
          materials: [{ type: "pdf", name: "UML Design Patterns & Diagrams Visual Guide.pdf", size: "4.7 MB", date: "Sep 07" }],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Software Design Principles & GoF Patterns",
          hours: 9,
          topics: ["SOLID Principles (Single Responsibility, Open-Closed, Liskov, Interface Segregation, Dependency Inversion)", "Creational Patterns: Singleton, Factory, Abstract Factory, Builder", "Structural Patterns: Adapter, Facade, Composite, Decorator", "Behavioral Patterns: Observer, Strategy, Command"],
          materials: [{ type: "pdf", name: "SOLID Principles with Real Java Code Examples.pdf", size: "5.1 MB", date: "Sep 26" }],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Software Testing & Quality Assurance",
          hours: 9,
          topics: ["White Box Testing: Basis Path, Cyclomatic Complexity", "Black Box Testing: Equivalence Partitioning, Boundary Value Analysis", "Unit Testing (JUnit), Integration Testing, System Testing, Regression", "DevOps & CI/CD Pipelines: Jenkins, GitHub Actions basics"],
          materials: [{ type: "pdf", name: "Cyclomatic Complexity Calculation Exercises.pdf", size: "2.8 MB", date: "Oct 08" }],
          completed: false
        },
        {
          unitNumber: 5,
          title: "Unit V: Software Project Estimation & Maintenance",
          hours: 9,
          topics: ["COCOMO I and II Cost Estimation Models", "Function Point Analysis (FPA)", "Risk Management & Mitigation (RMMM plan)", "Software Maintenance, Re-engineering, Technical Debt"],
          materials: [{ type: "pdf", name: "COCOMO Model Solved Numericals.pdf", size: "2.6 MB", date: "Oct 12" }],
          completed: false
        }
      ],
      assignments: [
        { id: "asg-se-1", title: "Complete UML 2.5 Architecture for Smart Campus Bus Tracking", dueDate: "Sep 20, 2024", status: "Graded", score: "9 / 10", feedback: "Sequence diagram timing loops are properly drawn." }
      ],
      quiz: {
        title: "OOSE & Agile Methodologies Quiz",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-se-1",
            question: "Which SOLID principle states that high-level modules should not depend on low-level modules, both should depend on abstractions?",
            options: ["Single Responsibility Principle", "Open-Closed Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"],
            answer: 3,
            explanation: "The Dependency Inversion Principle (DIP) dictates depending upon abstractions rather than concretions."
          },
          {
            id: "q-se-2",
            question: "In Scrum, who is solely responsible for prioritizing and managing items in the Product Backlog?",
            options: ["Scrum Master", "Development Team Lead", "Product Owner", "Project Sponsor"],
            answer: 2,
            explanation: "The Product Owner is the sole person responsible for managing and prioritizing the Product Backlog."
          },
          {
            id: "q-se-3",
            question: "Which Design Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes?",
            options: ["Factory Method", "Abstract Factory", "Builder Pattern", "Prototype Pattern"],
            answer: 1,
            explanation: "Abstract Factory is a creational pattern providing an interface for creating families of related objects."
          },
          {
            id: "q-se-4",
            question: "McCabe's Cyclomatic Complexity for a program flow graph with E edges, N nodes and P connected components is calculated as:",
            options: ["V(G) = E - N + 2P", "V(G) = N - E + P", "V(G) = E + N - 2", "V(G) = E / N"],
            answer: 0,
            explanation: "Cyclomatic complexity V(G) = E - N + 2P (or Predicate Nodes + 1)."
          },
          {
            id: "q-se-5",
            question: "Boundary Value Analysis test cases for an input range [10, 100] should include:",
            options: ["9, 10, 11, 99, 100, 101", "10, 50, 100", "0, 50, 150", "All numbers between 10 and 100"],
            answer: 0,
            explanation: "BVA tests boundary points: minimum, just above minimum, nominal, just below maximum, maximum, and just above maximum."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (System Design & Clean Code)",
          question: "Explain the Singleton Pattern, its thread-safe double-checked locking implementation, and why it can be an anti-pattern.",
          hint: "Private constructor, static instance, volatile variable, synchronized block; drawbacks in unit testing and tight coupling."
        }
      ]
    },

    {
      id: "21CS508",
      code: "21CS508",
      title: "Full-Stack Web Development Laboratory",
      shortTitle: "Full-Stack Web Lab",
      department: "CSE",
      category: "Laboratory Course",
      credits: 2,
      ltpc: "0-0-4-2",
      semester: 5,
      status: "in-progress",
      isStarred: true,
      color: "from-rose-600 to-pink-800",
      icon: "fa-code",
      bannerImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Prof. T. Divya",
        title: "Assistant Professor, CSE",
        email: "divya.t@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
      },
      progress: 95,
      attendance: {
        conducted: 24,
        attended: 23,
        percentage: 95.8,
        safeStatus: "Safe (>75%)",
        odApproved: 1
      },
      ciaMarks: {
        cia1: { scored: 25, max: 25 },
        cia2: { scored: 24, max: 25 },
        model: { scored: 96, max: 100 },
        assignments: { scored: 10, max: 10 },
        attendanceMark: { scored: 5, max: 5 },
        totalInternal: 48.5,
        maxInternal: 50,
        projectedGrade: "O (Outstanding)"
      },
      nextDeadline: {
        title: "Final Lab Practical Model Exam & Viva Voce",
        dueDate: "Nov 20, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: HTML5, CSS3 & Responsive Design with Tailwind",
          hours: 12,
          topics: ["Semantic HTML5, Flexbox & CSS Grid Masterclass", "Tailwind CSS Utility-first styling", "Mobile-First Design & Media Queries"],
          materials: [{ type: "code", name: "Responsive Portfolio Project Boilerplate.zip", size: "2.1 MB", date: "Aug 18" }],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Modern JavaScript (ES6+) & DOM",
          hours: 12,
          topics: ["Async/Await, Promises, Fetch API", "Closures, Event Loop, Prototypal Inheritance", "DOM Manipulation & Event Delegation"],
          materials: [{ type: "code", name: "JavaScript Async Coding Exercises.zip", size: "1.4 MB", date: "Sep 02" }],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Frontend Framework (React / Vue)",
          hours: 12,
          topics: ["Components, State, Props, Hooks (useState, useEffect, useMemo)", "Client-side Routing, Context API / State Management"],
          materials: [{ type: "code", name: "React Shopping Cart & Course Dashboard.zip", size: "4.3 MB", date: "Sep 25" }],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Backend Development with Node.js & Express",
          hours: 12,
          topics: ["RESTful API Architecture, Middleware", "JWT Authentication, Password Hashing with Bcrypt", "Error Handling & CORS"],
          materials: [{ type: "code", name: "Node Express Auth & CRUD API Starter.zip", size: "3.2 MB", date: "Oct 05" }],
          completed: true
        },
        {
          unitNumber: 5,
          title: "Unit V: Database Integration (MongoDB & PostgreSQL) & Deployment",
          hours: 12,
          topics: ["Mongoose ODM, Schema Validations", "PostgreSQL Connection with Prisma / pg", "Docker Basics, Cloud Deployment (Vercel, Render)"],
          materials: [{ type: "code", name: "Full Stack Deployment Checklist.pdf", size: "1.8 MB", date: "Oct 10" }],
          completed: true
        }
      ],
      assignments: [
        { id: "asg-lab-1", title: "Full-Stack Student Attendance Management System with JWT", dueDate: "Oct 01, 2024", status: "Graded", score: "10 / 10", feedback: "Outstanding UI design and secured API endpoints." }
      ],
      quiz: {
        title: "Full-Stack Development Viva Practice",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-lab-1",
            question: "In the JavaScript Event Loop, which queue takes highest priority after the current synchronous script finishes?",
            options: ["Macrotask Queue (setTimeout, setInterval)", "Microtask Queue (Promises, queueMicrotask)", "I/O Events Queue", "Rendering Queue"],
            answer: 1,
            explanation: "Microtasks (Promise callbacks) run immediately after the current script and before any macrotasks."
          },
          {
            id: "q-lab-2",
            question: "What does the HTTP 403 Forbidden status code signify?",
            options: ["Client is not authenticated", "Server understood request but refuses to authorize it", "Requested resource does not exist", "Server encountered internal error"],
            answer: 1,
            explanation: "401 is Unauthorized (unauthenticated), while 403 is Forbidden (authenticated but lacks necessary permissions)."
          },
          {
            id: "q-lab-3",
            question: "Why should passwords never be stored in plain text or with simple MD5 hashing?",
            options: ["MD5 produces too long hashes", "MD5 is fast and vulnerable to rainbow tables / dictionary attacks; bcrypt adds slow salt", "Database will crash", "MD5 cannot hash strings over 16 chars"],
            answer: 1,
            explanation: "Fast hash functions like MD5 can be cracked in seconds via GPU attacks; salted bcrypt incorporates an intentional workload factor."
          },
          {
            id: "q-lab-4",
            question: "In React, what is the key purpose of the dependency array in useEffect()?",
            options: ["To import external libraries", "To determine when the effect callback should re-run based on value changes", "To style the component", "To catch runtime exceptions"],
            answer: 1,
            explanation: "React compares dependencies between renders using Object.is; if unchanged, it skips re-running the effect."
          },
          {
            id: "q-lab-5",
            question: "Which of the following is a key feature of CORS (Cross-Origin Resource Sharing)?",
            options: ["Allows any server to execute code on the client machine", "Browser security mechanism that allows or blocks requests across different origins via headers", "A database indexing protocol", "A CSS layout rule"],
            answer: 1,
            explanation: "CORS is an HTTP-header based security mechanism enforced by browsers to control resource sharing across different origins."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (Full Stack Engineer)",
          question: "How does CORS preflight OPTIONS request work and when is it triggered?",
          hint: "Triggered for non-simple requests: custom headers, methods like PUT/DELETE/PATCH, or content-types like application/json."
        }
      ]
    },

    {
      id: "21PT501",
      code: "21PT501",
      title: "Placement Career Aptitude & Technical Coding (Zoho / TCS Track)",
      shortTitle: "Placement & Coding Track",
      department: "Training & Placement Cell",
      category: "Career & Placement",
      credits: 2,
      ltpc: "0-0-2-2",
      semester: 5,
      status: "in-progress",
      isStarred: true,
      color: "from-amber-500 to-yellow-700",
      icon: "fa-briefcase",
      bannerImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Prof. V. Anand",
        title: "Head - Training & Placement, KIOT",
        email: "placement@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
      },
      progress: 80,
      attendance: {
        conducted: 20,
        attended: 19,
        percentage: 95.0,
        safeStatus: "Safe (>75%)",
        odApproved: 0
      },
      ciaMarks: {
        cia1: { scored: 24, max: 25 },
        cia2: { scored: 24, max: 25 },
        model: { scored: 94, max: 100 },
        assignments: { scored: 10, max: 10 },
        attendanceMark: { scored: 5, max: 5 },
        totalInternal: 47.0,
        maxInternal: 50,
        projectedGrade: "O (Outstanding)"
      },
      nextDeadline: {
        title: "Zoho Level 2 Coding Simulation: String Manipulation & Recursion",
        dueDate: "Nov 10, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Quantitative Aptitude & Speed Math",
          hours: 10,
          topics: ["Number Systems, HCF/LCM, Divisibility Rules", "Time and Work, Pipes and Cisterns", "Time, Speed, Distance, Trains & Boats", "Permutations, Combinations & Probability"],
          materials: [{ type: "pdf", name: "Zoho & TCS Quantitative Aptitude Formulae Sheet.pdf", size: "3.5 MB", date: "Aug 14" }],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Logical Reasoning & Data Interpretation",
          hours: 10,
          topics: ["Blood Relations, Syllogisms, Direction Sense", "Seating Arrangements (Linear & Circular)", "Data Sufficiency, Clocks & Calendars"],
          materials: [{ type: "pdf", name: "Logical Reasoning Shortcuts & 100 Solved Puzzles.pdf", size: "4.2 MB", date: "Sep 01" }],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: C/C++/Java Foundation & Pointer Mechanics",
          hours: 12,
          topics: ["Pointers and Memory Addresses in C", "Bitwise Operators & Bit Manipulation", "Structures, Unions, Dynamic Memory Allocation (malloc, free)", "OOP Concepts in Java/C++"],
          materials: [{ type: "code", name: "Top 50 Zoho Pointer Output Questions with Explanations.pdf", size: "3.1 MB", date: "Sep 20" }],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Data Structures & Algorithms Coding Rounds",
          hours: 14,
          topics: ["Arrays, Strings, Two-Pointer Technique, Sliding Window", "Linked Lists (Reversal, Cycle Detection), Stacks & Queues", "Trees, Binary Search Trees, BFS & DFS", "Dynamic Programming Basics (0/1 Knapsack, Coin Change)"],
          materials: [{ type: "code", name: "Zoho Advanced Programming (Round 3) LeetCode Sheet.zip", size: "5.8 MB", date: "Oct 06" }],
          completed: false
        },
        {
          unitNumber: 5,
          title: "Unit V: Mock Interviews, HR & Technical Communication",
          hours: 8,
          topics: ["Self-Introduction & Elevator Pitch", "Resume Building (ATS Friendly)", "Handling Behavioral Questions (STAR Technique)", "Company Specific Prep: Zoho, TCS, Infosys, Tech Mahindra"],
          materials: [{ type: "pdf", name: "KIOT Placement Handbook & Company Insights 2024.pdf", size: "4.5 MB", date: "Oct 11" }],
          completed: false
        }
      ],
      assignments: [
        { id: "asg-pt-1", title: "Zoho Round 2 Code Test: Matrix Spiral Print & Word Break", dueDate: "Sep 28, 2024", status: "Graded", score: "10 / 10", feedback: "Clean code with O(M*N) optimal space." }
      ],
      quiz: {
        title: "Placement Coding & Aptitude Test",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-pt-1",
            question: "In C, what is the output of: int a = 5; printf('%d %d', a++, ++a); (evaluated right-to-left in typical compilers)?",
            options: ["6 7", "6 6", "Undefined behavior according to C standards", "5 7"],
            answer: 2,
            explanation: "Modifying a variable multiple times without a sequence point invokes Undefined Behavior in ANSI C."
          },
          {
            id: "q-pt-2",
            question: "A pipe can fill a cistern in 12 hours. Due to a leak at the bottom, it fills it in 15 hours. If the cistern is full, how long will the leak take to empty it?",
            options: ["45 hours", "60 hours", "50 hours", "30 hours"],
            answer: 1,
            explanation: "Rate of leak = 1/12 - 1/15 = (5 - 4)/60 = 1/60. Hence 60 hours."
          },
          {
            id: "q-pt-3",
            question: "Which bitwise operation checks whether an integer n is a power of 2?",
            options: ["(n & (n + 1)) == 0", "(n & (n - 1)) == 0 && n > 0", "(n | (n - 1)) == 0", "(n ^ (n - 1)) == 0"],
            answer: 1,
            explanation: "A power of two has only one binary '1'. Subtracting 1 flips all bits up to that '1'. So n & (n - 1) equals 0."
          },
          {
            id: "q-pt-4",
            question: "What is the time complexity to detect a cycle in a singly linked list using Floyd's Tortoise and Hare algorithm?",
            options: ["O(N^2)", "O(N) time and O(1) space", "O(N) time and O(N) space", "O(log N)"],
            answer: 1,
            explanation: "Floyd's cycle detection runs in O(N) time using two pointers (slow and fast), requiring O(1) extra auxiliary space."
          },
          {
            id: "q-pt-5",
            question: "If 'A + B' means A is the brother of B, 'A - B' means A is the mother of B, 'A * B' means A is the sister of B, which expression shows that M is the maternal uncle of R?",
            options: ["M + K - R", "M - K + R", "M * K - R", "M + K * R"],
            answer: 0,
            explanation: "M + K means M is brother of K. K - R means K is mother of R. Therefore M is maternal uncle of R."
          }
        ]
      },
      placementPrep: [
        {
          company: "Zoho Corporation (Frequent Pattern)",
          question: "Print pattern: for input 'PROGRAM', print diagonal X-cross pattern.",
          hint: "Two loops or single loop checking row == col or row + col == N - 1."
        }
      ]
    },

    {
      id: "21OE501",
      code: "21OE501",
      title: "Renewable Energy Systems & EV Technology",
      shortTitle: "Renewable Energy & EVs",
      department: "EEE / Open Elective",
      category: "Open Elective",
      credits: 3,
      ltpc: "3-0-0-3",
      semester: 5,
      status: "in-progress",
      isStarred: false,
      color: "from-green-600 to-emerald-900",
      icon: "fa-bolt",
      bannerImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      faculty: {
        name: "Dr. G. Suresh",
        title: "Professor, EEE Department",
        email: "suresh.g@kiot.ac.in",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
      },
      progress: 75,
      attendance: {
        conducted: 30,
        attended: 25,
        percentage: 83.3,
        safeStatus: "Safe (>75%)",
        odApproved: 1
      },
      ciaMarks: {
        cia1: { scored: 22, max: 25 },
        cia2: { scored: 20, max: 25 },
        model: { scored: 84, max: 100 },
        assignments: { scored: 9, max: 10 },
        attendanceMark: { scored: 4.5, max: 5 },
        totalInternal: 41.5,
        maxInternal: 50,
        projectedGrade: "A (Very Good)"
      },
      nextDeadline: {
        title: "Case Study: Battery Thermal Management in Electric Two-Wheelers",
        dueDate: "Nov 16, 2024",
        isUrgent: false
      },
      syllabusUnits: [
        {
          unitNumber: 1,
          title: "Unit I: Solar Photovoltaic Systems & Design",
          hours: 9,
          topics: ["Solar Radiation Geometry, PV Cell Physics, I-V & P-V Curves", "Maximum Power Point Tracking (MPPT) Algorithms: Perturb & Observe, Incremental Conductance", "Grid-tied and Standalone PV Inverters"],
          materials: [{ type: "pdf", name: "Solar PV Sizing & MPPT Solved Calculations.pdf", size: "3.4 MB", date: "Aug 15" }],
          completed: true
        },
        {
          unitNumber: 2,
          title: "Unit II: Wind Energy & Biomass Conversion",
          hours: 9,
          topics: ["Betz Limit, Wind Turbine Aerodynamics (HAWT vs VAWT)", "Permanent Magnet Synchronous Generators (PMSG) and DFIG", "Biomass Gasification & Biofuels"],
          materials: [{ type: "pdf", name: "Wind Turbine Power Characteristics Notes.pdf", size: "2.9 MB", date: "Sep 03" }],
          completed: true
        },
        {
          unitNumber: 3,
          title: "Unit III: Energy Storage Systems & Battery Chemistry",
          hours: 9,
          topics: ["Lithium-Ion Battery Chemistries: NMC, LFP, LTO", "State of Charge (SOC) and State of Health (SOH) Estimation", "Battery Management System (BMS) Architecture: Cell Balancing"],
          materials: [{ type: "pdf", name: "Lithium Battery Degradation Mechanisms.pdf", size: "4.1 MB", date: "Sep 22" }],
          completed: true
        },
        {
          unitNumber: 4,
          title: "Unit IV: Electric Vehicle Powertrains & Motors",
          hours: 9,
          topics: ["EV Architecture: BEV, HEV, PHEV", "Traction Motors: BLDC, PMSM, Induction Motors", "Motor Control: Field Oriented Control (FOC)"],
          materials: [{ type: "pdf", name: "Traction Motor Comparison for Indian EV Market.pdf", size: "3.7 MB", date: "Oct 04" }],
          completed: false
        },
        {
          unitNumber: 5,
          title: "Unit V: EV Charging Infrastructure & Smart Grid",
          hours: 9,
          topics: ["AC Level 1/2 vs DC Fast Charging (CCS2, CHAdeMO)", "Vehicle to Grid (V2G) Technology", "Environmental Lifecycle Assessment of EVs vs ICE Vehicles"],
          materials: [{ type: "pdf", name: "Fast Charging Protocols & Thermal Management.pdf", size: "3.2 MB", date: "Oct 11" }],
          completed: false
        }
      ],
      assignments: [
        { id: "asg-ev-1", title: "10 kW Rooftop Solar PV Installation Sizing for KIOT Library", dueDate: "Sep 15, 2024", status: "Graded", score: "9.5 / 10", feedback: "Cost-benefit payback calculation is accurate." }
      ],
      quiz: {
        title: "Renewable Energy & EV Checkpoint",
        durationMinutes: 10,
        totalQuestions: 5,
        questions: [
          {
            id: "q-ev-1",
            question: "What is the theoretical maximum aerodynamic efficiency (Betz limit) of a wind turbine?",
            options: ["50.0%", "59.3% (16/27)", "72.5%", "100%"],
            answer: 1,
            explanation: "According to Betz's law, no turbine can capture more than 16/27 (59.3%) of kinetic energy in wind."
          },
          {
            id: "q-ev-2",
            question: "Which Lithium-ion chemistry is renowned for high thermal safety and long cycle life (ideal for Indian temperatures)?",
            options: ["Lithium Cobalt Oxide (LCO)", "Lithium Nickel Manganese Cobalt (NMC)", "Lithium Iron Phosphate (LFP)", "Lithium Manganese Oxide (LMO)"],
            answer: 2,
            explanation: "LFP (LiFePO4) offers superior thermal stability and resists thermal runaway even under high ambient temperatures."
          },
          {
            id: "q-ev-3",
            question: "What is the primary role of Maximum Power Point Tracking (MPPT) in solar controllers?",
            options: ["To physically rotate solar panels with sun", "To adjust electrical operating point so solar module delivers maximum power under changing irradiance", "To convert DC to AC", "To prevent overcharging battery only"],
            answer: 1,
            explanation: "MPPT dynamically varies the impedance seen by the PV module to track the peak power point (P_max) on the P-V curve."
          },
          {
            id: "q-ev-4",
            question: "In Electric Vehicles, regenerative braking converts:",
            options: ["Kinetic energy back into electrical energy to recharge battery", "Chemical energy directly to heat", "Potential energy to wind resistance", "Thermal energy to torque"],
            answer: 0,
            explanation: "The traction motor acts as a generator during deceleration, recharging the battery and slowing down the vehicle."
          },
          {
            id: "q-ev-5",
            question: "The standard DC fast charging protocol adopted by India for electric four-wheelers is:",
            options: ["Tesla NACS only", "CCS Type 2", "GB/T only", "CHAdeMO 1.0"],
            answer: 1,
            explanation: "Combined Charging System (CCS Type 2) is the designated national standard for public EV DC fast charging in India."
          }
        ]
      },
      placementPrep: [
        {
          company: "Ola Electric / Ather Energy / Tata Motors EV",
          question: "Explain the importance of passive vs active cell balancing in a 48V or 400V EV Battery Pack.",
          hint: "Passive burns excess charge as heat through shunt resistors; active transfers charge between cells via inductors/capacitors."
        }
      ]
    }
  ],

  // Extra Courses (Past / Completed Semesters)
  pastCourses: [
    {
      code: "21CS401",
      title: "Design and Analysis of Algorithms",
      semester: 4,
      credits: 4,
      grade: "O (Outstanding)",
      gradePoint: 10,
      faculty: "Dr. P. Rajasekaran",
      category: "Professional Core",
      attendance: 94.2
    },
    {
      code: "21CS402",
      title: "Operating Systems & Linux Kernel",
      semester: 4,
      credits: 3,
      grade: "A+ (Excellent)",
      gradePoint: 9,
      faculty: "Prof. S. Nandhini",
      category: "Professional Core",
      attendance: 91.5
    },
    {
      code: "21MA401",
      title: "Probability and Queuing Theory",
      semester: 4,
      credits: 4,
      grade: "O (Outstanding)",
      gradePoint: 10,
      faculty: "Dr. K. Ravichandran",
      category: "Foundation Core",
      attendance: 96.0
    },
    {
      code: "21CS403",
      title: "Java & Object Oriented Programming",
      semester: 4,
      credits: 3,
      grade: "A+ (Excellent)",
      gradePoint: 9,
      faculty: "Prof. T. Divya",
      category: "Professional Core",
      attendance: 93.0
    }
  ],

  // Timetable
  todayTimetable: [
    { period: 1, time: "09:00 - 09:50 AM", code: "21CS501", name: "Theory of Computation", room: "CS-304", faculty: "Dr. P. Rajasekaran", type: "Lecture", isCurrent: false },
    { period: 2, time: "09:50 - 10:40 AM", code: "21CS502", name: "Database Management Systems", room: "CS-304", faculty: "Dr. M. Sangeetha", type: "Lecture", isCurrent: false },
    { period: "Break", time: "10:40 - 11:00 AM", code: "-", name: "Morning Refreshment Break", room: "Cafeteria / Campus", faculty: "-", type: "Break", isCurrent: false },
    { period: 3, time: "11:00 - 11:50 AM", code: "21AI503", name: "Machine Learning & DL", room: "CS-304", faculty: "Prof. K. Vignesh", type: "Lecture", isCurrent: true },
    { period: 4, time: "11:50 - 12:40 PM", code: "21CS504", name: "Networks & Cyber Security", room: "CS-304", faculty: "Prof. S. Nandhini", type: "Lecture", isCurrent: false },
    { period: "Lunch", time: "12:40 - 01:30 PM", code: "-", name: "Lunch Interval", room: "Mess / Food Court", faculty: "-", type: "Break", isCurrent: false },
    { period: "5 & 6", time: "01:30 - 03:10 PM", code: "21CS508", name: "Full-Stack Web Dev Lab", room: "Lab 4 (ICT Center)", faculty: "Prof. T. Divya", type: "Lab", isCurrent: false },
    { period: 7, time: "03:10 - 04:00 PM", code: "21PT501", name: "Placement Coding (Zoho)", room: "Auditorium / Seminar Hall", faculty: "Prof. V. Anand", type: "Placement", isCurrent: false }
  ],

  // Autonomous Exam Timetable & Hall Ticket
  examSchedule: [
    { date: "28-Nov-2024", session: "FN (10:00 AM - 01:00 PM)", code: "21CS501", name: "Theory of Computation & Compiler Design", hall: "Exam Hall A-204" },
    { date: "02-Dec-2024", session: "FN (10:00 AM - 01:00 PM)", code: "21CS502", name: "Database Management Systems & Cloud SQL", hall: "Exam Hall A-204" },
    { date: "05-Dec-2024", session: "FN (10:00 AM - 01:00 PM)", code: "21AI503", name: "Machine Learning & Deep Learning Fundamentals", hall: "Exam Hall A-204" },
    { date: "09-Dec-2024", session: "FN (10:00 AM - 01:00 PM)", code: "21CS504", name: "Computer Networks & Cyber Security", hall: "Exam Hall A-204" },
    { date: "12-Dec-2024", session: "FN (10:00 AM - 01:00 PM)", code: "21CS505", name: "Object-Oriented Software Engineering & Agile", hall: "Exam Hall A-204" },
    { date: "16-Dec-2024", session: "FN (10:00 AM - 01:00 PM)", code: "21OE501", name: "Renewable Energy Systems & EV Technology", hall: "Exam Hall B-102" }
  ],

  // Digital Library Resources
  libraryResources: [
    { name: "IEEE Xplore Digital Library", url: "https://ieeexplore.ieee.org", badge: "Direct College IP Access", desc: "Access 5+ million IEEE transactions, journals, and conference papers." },
    { name: "DELNET E-Consortium", url: "https://www.delnet.in", badge: "Institutional Login", desc: "Inter-library loans, union catalog of 3 crore books and journals." },
    { name: "NPTEL SWAYAM Online Portal", url: "https://nptel.ac.in", badge: "IIT Certified Courses", desc: "Video lectures and assignments by IIT faculty mapped to Anna Univ syllabus." },
    { name: "KIOT Institutional Repository (DSpace)", url: "https://kiot.ac.in/library", badge: "Internal Archive", desc: "Past 10 years Anna University / Autonomous question papers, faculty research papers." }
  ],

  // Placement Records & Drives
  placementData: {
    totalOffers: "910+",
    placementPercentage: "96.4%",
    highestPackage: "18.5 LPA",
    averagePackage: "4.8 LPA",
    topRecruiters: [
      { name: "Zoho Corporation", role: "Software Developer", ctc: "8.4 LPA - 12 LPA", studentsPlaced: 42, icon: "Z" },
      { name: "Tata Consultancy Services (TCS)", role: "Digital / Prime", ctc: "7.2 LPA - 9.0 LPA", studentsPlaced: 114, icon: "T" },
      { name: "Tech Mahindra", role: "Software Engineer", ctc: "5.5 LPA", studentsPlaced: 68, icon: "TM" },
      { name: "Virtusa", role: "Associate Engineer", ctc: "6.0 LPA", studentsPlaced: 36, icon: "V" },
      { name: "Cognizant (CTS)", role: "GenC Next", ctc: "6.7 LPA", studentsPlaced: 85, icon: "C" },
      { name: "Hexaware", role: "Software Developer", ctc: "6.0 LPA", studentsPlaced: 28, icon: "H" }
    ]
  }
};
