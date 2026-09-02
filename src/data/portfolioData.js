export const portfolioData = {
  personal: {
    name: "Raju Kumar",
    fullName: "Raju Kumar",
    handle: "RK.dev",
    role: "Software Engineering Intern Candidate & MCA Student at IIIT Bhopal",
    badge: "IIIT Bhopal '27",
    status: "Open to Software Engineering & Full-Stack Internships",
    location: "Bhopal / Ranchi, India",
    headline: "Hi, I'm Raju Kumar",
    subheadline: "Specializing in scalable full-stack web architectures, core data structures, and applied AI systems.",
    aboutText: `Detail-oriented software developer with a strong grasp of Data Structures, Algorithms, Object-Oriented Programming (OOP), and the full Software Development Life Cycle (SDLC). Currently pursuing Master of Computer Applications (MCA - IT) at Indian Institute of Information Technology (IIIT Bhopal). Experienced in crafting robust REST APIs, modern web interfaces, and collaborating in agile teams. Always driven by building software that is scalable, performant, and reliable.`,
    emails: [
      { address: "rajukumarranchil7@gmail.com", label: "Personal Email", primary: true },
      { address: "24p03f0043@iiitbhopal.ac.in", label: "Academic Email (IIIT Bhopal)" }
    ],
    phone: "+91-8210199794",
    socials: {
      github: "https://github.com/rajukumar1719",
      linkedin: "https://linkedin.com/in/raju-kumar",
      leetcode: "https://leetcode.com/rajukumar1719"
    }
  },

  quickStats: [
    {
      id: "leetcode",
      value: "150+",
      label: "DSA Problems Solved",
      subtext: "LeetCode & CodeChef in C++",
      icon: "Code2",
      color: "emerald"
    },
    {
      id: "projects",
      value: "3+",
      label: "Production-Grade Projects",
      subtext: "Full-Stack Web & Applied AI",
      icon: "Layers",
      color: "cyan"
    },
    {
      id: "internships",
      value: "2",
      label: "Industry Internships",
      subtext: "Web Dev & Cybersecurity",
      icon: "Briefcase",
      color: "indigo"
    },
    {
      id: "education",
      value: "IIIT Bhopal",
      label: "MCA (IT) Batch",
      subtext: "2024 – 2027",
      icon: "GraduationCap",
      color: "purple"
    }
  ],

  education: [
    {
      id: "iiit-bhopal",
      institution: "Indian Institute of Information Technology, Bhopal (IIIT Bhopal)",
      degree: "Master of Computer Applications (MCA - IT)",
      duration: "2024 – 2027",
      cgpa: "7.0 / 10.0",
      type: "Institute of National Importance",
      status: "Currently Pursuing (Year 2)",
      highlights: [
        "Advanced training in Data Structures & Algorithms, Systems Engineering, and Database Architecture.",
        "Active student leader and coordinator for campus cultural and departmental sports initiatives.",
        "Focused on Distributed Systems, Cloud Architectures, and Full-Stack Engineering."
      ],
      badgeColor: "cyan"
    },
    {
      id: "ranchi-univ",
      institution: "Ranchi University, Ranchi",
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "2020 – 2023",
      cgpa: "8.76 / 10.0",
      type: "University Degree",
      status: "Graduated with First Class Distinction",
      highlights: [
        "Solid academic excellence with 8.76 CGPA across foundational computer science curricula.",
        "Core focus on C, C++, Java, DBMS, Operating Systems, Web Technologies, and Software Engineering.",
        "Delivered academic capstone web projects utilizing relational databases and modern UI principles."
      ],
      badgeColor: "emerald"
    }
  ],

  skillCategories: [
    {
      id: "languages",
      title: "Languages",
      icon: "Code",
      color: "cyan",
      skills: [
        { name: "C++", level: "Proficient", highlight: "Primary DSA & OOP Language", tag: "DSA / STL" },
        { name: "C", level: "Core", highlight: "Low-level foundations & memory models", tag: "Systems" },
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: "Async/Await, Closures, DOM, V8", tag: "Web" },
        { name: "TypeScript", level: "Intermediate", highlight: "Type safety, Interfaces, Generics", tag: "Frontend/Backend" },
        { name: "Python", level: "Intermediate", highlight: "Data scripting, NLP, TF-IDF, Automation", tag: "AI/Scripting" }
      ]
    },
    {
      id: "web-frameworks",
      title: "Web & Frameworks",
      icon: "Globe",
      color: "indigo",
      skills: [
        { name: "React.js", level: "Advanced", highlight: "Hooks, Context API, Component Lifecycle", tag: "Frontend" },
        { name: "Next.js", level: "Intermediate", highlight: "SSR, SSG, App Router basics", tag: "Full-Stack" },
        { name: "Node.js", level: "Proficient", highlight: "Event-driven runtime, streams, micro-services", tag: "Backend" },
        { name: "Express.js", level: "Proficient", highlight: "Middleware, Routing, JWT Auth, REST APIs", tag: "Backend" },
        { name: "REST APIs", level: "Advanced", highlight: "API design, CRUD, status codes, documentation", tag: "Architecture" },
        { name: "Tailwind CSS", level: "Advanced", highlight: "Modern responsive styling, dark mode, animations", tag: "Styling" },
        { name: "HTML5 / CSS3", level: "Advanced", highlight: "Semantic markup, Flexbox, CSS Grid, Responsive", tag: "Core Web" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: "Database",
      color: "emerald",
      skills: [
        { name: "MongoDB", level: "Proficient", highlight: "NoSQL schema design, Aggregation, Mongoose ORM", tag: "NoSQL" },
        { name: "MySQL", level: "Proficient", highlight: "Relational modeling, indexing, joins, ACID transactions", tag: "RDBMS" },
        { name: "SQL", level: "Proficient", highlight: "Complex queries, constraints, schema normalization", tag: "Database" }
      ]
    },
    {
      id: "core-cs",
      title: "Core CS & Fundamentals",
      icon: "Cpu",
      color: "purple",
      skills: [
        { name: "Data Structures & Algorithms", level: "Strong", highlight: "Trees, Graphs, DP, Heaps, Binary Search (150+ solved)", tag: "Problem Solving" },
        { name: "Object-Oriented Programming (OOP)", level: "Strong", highlight: "Inheritance, Polymorphism, Encapsulation, Abstraction", tag: "Design" },
        { name: "Database Management Systems (DBMS)", level: "Strong", highlight: "ER diagrams, Normalization, Indexing, Transactions", tag: "Core" },
        { name: "Computer Networks", level: "Proficient", highlight: "TCP/IP, OSI model, HTTP/HTTPS, DNS, Sockets", tag: "Networking" },
        { name: "Cybersecurity Basics", level: "Foundational", highlight: "Vulnerability analysis, threat modeling, protocol safety", tag: "Security" }
      ]
    },
    {
      id: "tools-cloud",
      title: "Developer Tools & Cloud",
      icon: "Wrench",
      color: "blue",
      skills: [
        { name: "Git & GitHub", level: "Proficient", highlight: "Version control, branching, PRs, merge workflows", tag: "VCS" },
        { name: "VS Code & Cursor", level: "Advanced", highlight: "Extensions, debugging, modern developer productivity", tag: "IDE" },
        { name: "Postman", level: "Proficient", highlight: "API testing, automated request collections, mocks", tag: "Testing" },
        { name: "Tenable Nessus", level: "Certified/Practiced", highlight: "Vulnerability scanning, CVE audits, security reporting", tag: "Security" },
        { name: "AWS (Foundational)", level: "Learning", highlight: "EC2, S3 bucket storage, cloud deployment concepts", tag: "Cloud" },
        { name: "Agile & Code Reviews", level: "Practiced", highlight: "Sprint cycles, standups, peer code review etiquette", tag: "SDLC" }
      ]
    }
  ],

  projects: [
    {
      id: "campus-hire",
      title: "CampusHire",
      tagline: "Placement Management Platform",
      role: "Full-Stack Developer",
      timeline: "2026 – Present",
      status: "Featured Production Project",
      category: "Full-Stack Web (MERN)",
      description: "A centralized, responsive placement portal built to streamline recruitment operations between students, company recruiters, and campus placement coordinators at academic institutions.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Tailwind CSS"],
      highlights: [
        "Architected a scalable MERN stack platform supporting multi-tiered user roles (Recruiters, Students, and Placement Cell Admins).",
        "Implemented secure JWT-based stateless authentication with granular Role-Based Access Control (RBAC) and bcrypt password hashing.",
        "Engineered end-to-end CRUD RESTful APIs for automated job postings, application submissions, and live candidate tracking pipelines.",
        "Built responsive dashboards with real-time application status indicators (Applied, Shortlisted, Interview Scheduled, Offered).",
        "Integrated client-side and server-side validation preventing duplicate applications and invalid resume formats."
      ],
      architecture: {
        frontend: "React.js with Tailwind CSS, modular components, Context API state, protected route guards.",
        backend: "Express.js RESTful API gateway, JWT middleware, Mongoose ORM models.",
        database: "MongoDB Atlas cluster with optimized compound indices on student_id and job_id.",
        security: "HTTP-only cookie auth options, CORS security headers, sanitized input validation."
      },
      links: {
        github: "https://github.com/rajukumar1719",
        demo: "https://campus-placement-portal-murex.vercel.app/"
      },
      accentColor: "cyan"
    },
    {
      id: "mindforge",
      title: "MindForge — AI Study Workspace",
      tagline: "Intelligent AI-powered personalized learning and study workspace",
      role: "Full-Stack & Applied AI Developer",
      timeline: "2026 – Present",
      status: "Featured Live Project",
      category: "Full-Stack & Generative AI",
      description: "An interactive, AI-driven study workspace designed to generate summaries, smart flashcards, and conceptual quizzes from study materials with context-aware tutoring.",
      techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Generative AI / LLM APIs", "REST APIs"],
      highlights: [
        "Interactive AI-driven study workspace designed to generate summaries, smart flashcards, and conceptual quizzes from study materials.",
        "Integrated LLM APIs to provide context-aware tutoring and step-by-step doubt resolution in real time.",
        "Responsive, productivity-first user dashboard with clean note-taking, markdown rendering, and document management.",
        "Engineered prompt-engineering pipelines and streaming response handling for low-latency tutoring feedback."
      ],
      architecture: {
        frontend: "React.js with Tailwind CSS, Markdown parser, interactive flashcard carousel, and quiz engine.",
        backend: "Node.js & Express.js REST API gateway with LLM context prompt orchestration.",
        aiLayer: "Generative AI / LLM API integration with streaming token responses and customized system instructions.",
        productivity: "Client-side state synchronization, document export, and progress tracking."
      },
      links: {
        github: "https://github.com/rajukumar1719",
        demo: "https://mindforge-ai-study-workspace.vercel.app/"
      },
      accentColor: "indigo"
    },
    {
      id: "ai-resume-matcher",
      title: "AI-Powered Resume Recommendation Engine",
      tagline: "Intelligent Candidate-Job Matcher",
      role: "AI/ML & Backend Developer",
      timeline: "2026 – Present",
      status: "Applied NLP System",
      category: "Applied AI / NLP & Backend",
      description: "An automated resume parsing and screening pipeline that extracts semantic signals from candidate resumes and computes match relevance against job descriptions using NLP and Vector Space models.",
      techStack: ["Python", "NLP", "TF-IDF Vectorization", "Cosine Similarity", "REST APIs", "Flask / Express"],
      highlights: [
        "Engineered an automated resume ingestion pipeline capable of parsing PDF/DOCX candidate profiles into structured text representations.",
        "Implemented NLP text preprocessing suite including tokenization, stop-word removal, lemmatization, and n-gram term weighting.",
        "Computed vector-space embeddings using TF-IDF and Cosine Similarity to calculate precise match confidence scores (0–100%).",
        "Exposed RESTful endpoints returning match confidence scores directly to recruiter dashboards, drastically cutting initial screening time.",
        "Engineered a Skill-Gap Analysis engine identifying missing technical keywords and recommendations for applicants."
      ],
      architecture: {
        nlpPipeline: "NLTK/spaCy preprocessing -> Regex entity extraction -> TF-IDF matrix generation.",
        scoringEngine: "Cosine Similarity mathematical computation against job specification vectors.",
        apiLayer: "RESTful JSON endpoints returning ranked candidate lists with match breakdown.",
        performance: "Processes multi-page resumes in sub-second response times."
      },
      links: {
        github: "https://github.com/rajukumar1719",
        demo: "https://ai-resume-matcher-engine.vercel.app"
      },
      accentColor: "emerald"
    }
  ],

  experiences: [
    {
      id: "eimple-labs",
      company: "Eimple Labs",
      role: "Web Development Intern",
      location: "Bangalore, India (Remote/Hybrid)",
      timeline: "Mar 2023 – Jul 2023",
      duration: "5 Months",
      type: "Industry Internship",
      tech: ["JavaScript (ES6+)", "TypeScript", "Express.js", "REST APIs", "HTML5/CSS3", "Git"],
      highlights: [
        "Designed, developed, and maintained production web interfaces using modern JavaScript, TypeScript, and Express.js backends.",
        "Built and integrated robust RESTful APIs, optimizing frontend render speeds and user flow across multiple client modules.",
        "Actively contributed to daily agile standups, sprint reviews, and peer code reviews following industry quality standards.",
        "Collaborated closely with senior developers to diagnose and resolve cross-browser rendering inconsistencies and state bugs."
      ],
      accentColor: "indigo"
    },
    {
      id: "cyber-gyan",
      company: "Cyber Gyan",
      role: "Cyber Security Virtual Intern",
      location: "Virtual Internship",
      timeline: "May 2025 – Jun 2025",
      duration: "2 Months",
      type: "Cybersecurity Program",
      tech: ["Tenable Nessus", "Network Security", "Vulnerability Assessment", "Threat Vectors", "TCP/IP"],
      highlights: [
        "Researched enterprise cybersecurity frameworks, network threat vectors, and communication protocol security standards.",
        "Executed comprehensive vulnerability scanning and security assessment audits using Tenable Nessus.",
        "Drafted actionable vulnerability remediation documentation and security patch recommendations for simulated enterprise networks.",
        "Deepened practical understanding of authentication handshakes, firewall configurations, and common OWASP Top 10 vectors."
      ],
      accentColor: "emerald"
    }
  ],

  leadership: [
    {
      id: "rangrez",
      title: "Lead Coordinator — Rangrez: The Fresher Fiesta",
      org: "IIIT Bhopal",
      year: "2025",
      role: "Head Operations & Logistics",
      icon: "Sparkles",
      color: "purple",
      description: "Spearheaded end-to-end event operations, cross-department scheduling, stage logistics, and budget allocation for IIIT Bhopal's premier induction festival, managing 300+ attendees."
    },
    {
      id: "sports-coord",
      title: "Sports Coordinator — MCA Department",
      org: "IIIT Bhopal",
      year: "2025",
      role: "Department Coordinator",
      icon: "Trophy",
      color: "cyan",
      description: "Organized inter-departmental tournaments (cricket, badminton, table tennis), managing fixtures, team registrations, and university sports infrastructure with seamless execution."
    },
    {
      id: "dsa-problem-solving",
      title: "Competitive Programming & Problem Solving",
      org: "LeetCode & CodeChef",
      year: "Active",
      role: "150+ Problems Solved",
      icon: "Terminal",
      color: "emerald",
      description: "Solved 150+ DSA challenges in C++ focusing on Trees, Graphs, Dynamic Programming, Heap/Queue, Binary Search, and Two Pointers. Active problem solver with clean code habits."
    }
  ],

  dsaStats: {
    totalSolved: 150,
    language: "C++",
    breakdown: [
      { topic: "Arrays & Strings", count: 45, percentage: 85 },
      { topic: "Trees & Binary Search Trees", count: 32, percentage: 75 },
      { topic: "Dynamic Programming", count: 28, percentage: 65 },
      { topic: "Graphs & BFS/DFS", count: 22, percentage: 60 },
      { topic: "LinkedList & Stacks/Queues", count: 25, percentage: 80 }
    ],
    badges: ["Top C++ Solver", "Consistency Streak", "IIIT Bhopal Coding Cohort"]
  }
};
