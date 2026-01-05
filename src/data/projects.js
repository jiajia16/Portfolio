import tripplanner from '../assets/tripplanner.png';
import columnbus from '../assets/columbus.png';
import doodleImg from '../assets/doodle.png';
import activityTrail from '../assets/trail.png';
import finance from '../assets/finance.png';
import database from '../assets/database.png';

export const projects = [
  {
    id: 'activity-trail',
    title: 'Elderly Activity Trail Platform',
    oneLiner: 'A cloud-native platform that encourages senior engagement through guided activities and rewards.',
    description:
      'A full-stack, cloud-native web platform designed to help elderly users participate in activity trails, track attendance via QR check-ins, and earn points and rewards. Built with accessibility, simplicity, and scalability in mind.',
    categoryTags: ['Frontend', 'Backend', 'Cloud'],
    techStack: [
      'React',
      'Vite',
      'TailwindCSS',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'JWT Auth',
    ],
    githubUrl: 'https://github.com/your-username/activity-trail', // replace if needed
    liveUrl: '', // optional
    image: activityTrail, // your image import
    featured: true,

    problem:
      'Many elderly users struggle with digital platforms that are complex, text-heavy, or inaccessible, making it difficult for organisations to engage them in community activities and track participation effectively.',

    solution:
      'Designed and built a senior-friendly progressive web app paired with a cloud-based backend that enables simple login, QR check-ins, activity tracking, and organisation-wide leaderboards.',

    highlights: [
      'Senior-focused PWA with large fonts, high contrast, and minimal interaction steps.',
      'QR code check-in system for activity attendance and point tracking.',
      'JWT-based authentication with simple login using NRIC and date of birth.',
      'Organisation-wide leaderboard to encourage participation and engagement.',
    ],

    challenges: [
      'Designing an interface that is accessible and intuitive for elderly users.',
      'Implementing secure authentication while keeping the login process simple.',
      'Deploying and orchestrating multiple services using Docker and Kubernetes.',
    ],

    whatILearned: [
      'How to design inclusivity-first user interfaces for non-technical users.',
      'Building and deploying cloud-native applications using Docker and Kubernetes.',
      'Collaborating across frontend, backend, and cloud infrastructure components.',
    ],
  },
  {
    id: "tripplanner",
    title: "Trip Planner (Hotel Booking App)",
    oneLiner: "Search hotels worldwide with maps, saved trips, and personalized details.",
    description:
      "A Flutter mobile app that lets users search accommodations globally, view results on an interactive map, save favourite hotels, and revisit past searches. Built with Firebase for persistence, Google Maps for location + nearby suggestions, and a hotel API for live listings.",

    categoryTags: ["Frontend", "Backend", "Mobile"],
    techStack: [
      "Flutter (Dart)",
      "Firebase",
      "Google Maps API",
      "RapidAPI",
      "Flutter Google Places",
      "http"
    ],

    githubUrl: "https://github.com/<your-username>/<your-repo>",
    image: tripplanner,
    featured: true,

    problem:
      "Travel planning is repetitive; users often re-enter the same details, struggle to find hotels quickly, and want results tied to their location and preferences.",

    solution:
      "Built a mobile-first hotel search experience with location-aware suggestions, map-based browsing, favourites saving, and Firebase-backed history so users can quickly pick up where they left off.",

    highlights: [
      "Global hotel search with results displayed by city/country using a hotel listings API.",
      "Google Maps integration to detect user location, suggest nearby places, and show results on the map.",
      "Saved hotels feature: users can bookmark favourites and view them in a dedicated screen.",
      "Search history + user inputs stored in Firebase for easy retrieval (adults, dates, destination).",
      "Cost calculation based on number of adults and stay duration for a more personalized experience."
    ],

    challenges: [
      "Integrating multiple APIs (Maps + Places + hotel listings) and managing several API keys safely.",
      "Debugging issues where map data initially failed to load and troubleshooting permissions/configuration in Android manifest.",
      "Time constraints limited UI polish, so I prioritised core functionality and reliability."
    ],

    whatILearned: [
      "How to integrate third-party APIs in a mobile app and handle permissions/configuration correctly.",
      "How Firebase persistence improves UX through saved state (history, favourites, and user input).",
      "Stronger debugging habits, staying persistent through API key + data loading issues instead of switching tools."
    ]
  },
  {
    id: 'finance-management-system',
    title: 'Finance Management System',
    oneLiner: 'A systems-driven finance tracker combining web, embedded devices, and real-time interactions.',
    description:
      'An interconnected finance management system designed to help users build better spending habits through real-time feedback, reminders, and interactive visual cues. The project integrates a web server with an embedded client and physical sensors to promote mindful financial behaviour.',
    categoryTags: ['Systems', 'Backend', 'Embedded'],
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'BeagleBone Black Wireless',
      'Embedded Linux',
      'Web Server',
      'Sensor Integration'
    ],
    githubUrl: '', // add if available
    liveUrl: '', // optional
    caseStudyUrl: '#',
    image: finance, // add screenshot later if you want
    featured: true,

    problem:
      'Many finance tracking tools focus purely on data entry and reports, offering little real-time feedback to help users build better spending habits.',

    solution:
      'Designed an interactive system that connects a web interface with embedded hardware to provide reminders, alerts, and visual feedback based on user activity and predefined budget rules.',

    highlights: [
      'Integrated a PC-based web server with a BeagleBone Black Wireless embedded client.',
      'Connected physical components (Vibra Sense Click, Buzz 2 Click, 8x8 Click) to trigger real-time system responses.',
      'Implemented daily budget reminders and alert mechanisms to encourage responsible spending.',
      'Built an interactive web interface with animations triggered by sensor input.'
    ],

    challenges: [
      'Coordinating communication between web services and embedded hardware components.',
      'Handling real-time sensor inputs while keeping the system responsive and reliable.',
      'Balancing system complexity with usability and clarity for end users.'
    ],

    whatILearned: [
      'How to design and integrate hardware–software systems end to end.',
      'Practical experience with event-driven architectures and real-time interactions.',
      'Improved understanding of system reliability, security considerations, and user-focused design.'
    ]
  },
  {
    id: "columbus-coffee",
    title: "Columbus Coffee Co - Café Website",
    oneLiner: "A responsive café website built from scratch with clean UI and smooth interactions.",

    description:
      "A frontend website built entirely with HTML and CSS for a café brand. The site allows users to browse menus, place orders, and contact the café, with a focus on usability, branding consistency, and responsive design.",

    categoryTags: ["Frontend"],
    techStack: ["HTML", "CSS"],

    githubUrl: "https://github.com/<your-username>/<repo-name>",
    featured: false,
    image: columnbus,


    problem:
      "The café needed a simple, user-friendly website that clearly presented its menu, supported basic ordering and contact flows, and reflected its brand identity across devices.",

    solution:
      "Designed and built a responsive website from scratch, focusing on clear layout, intuitive navigation, and interactive menu browsing using pure HTML and CSS.",

    highlights: [
      "Built entirely from scratch using HTML and CSS without frontend frameworks.",
      "Menu interface with category switching, hover effects, and smooth transitions.",
      "Contact and order forms that display submitted user details in a clear format.",
      "Responsive layout designed to remain consistent across desktop and mobile devices.",
    ],

    challenges: [
      "Translating the café’s branding into a clean and visually appealing interface.",
      "Implementing interactive menu behaviour using only HTML and CSS.",
      "Ensuring responsiveness and layout consistency across different screen sizes.",
    ],

    whatILearned: [
      "Stronger fundamentals in HTML structure, CSS layout, and responsive design.",
      "How interaction details like hover states and transitions improve user experience.",
      "The importance of balancing visual design with usability and clarity.",
    ],
  },


  {
    id: "doodle-app",
    title: "Doodle Drawing App",
    oneLiner: "An interactive drawing app built to explore real-time input and UI interaction.",
    description:
      "A lightweight drawing application built in C# that allows users to freely sketch using mouse input. The project focuses on handling real-time user interaction, rendering strokes smoothly, and maintaining responsive UI behaviour.",

    categoryTags: ["Frontend"],
    techStack: ["C#", "Windows Forms"], // or WPF if applicable

    githubUrl: "https://github.com/<your-username>/<repo>",
    liveUrl: "",
    image: doodleImg,
    featured: false,

    highlights: [
      "Implemented real-time drawing using continuous mouse event handling.",
      "Tracked cursor coordinates to render smooth strokes as users draw.",
      "Clear canvas functionality to reset drawings instantly.",
    ],

    challenges: [
      "Managing frequent input events without impacting UI responsiveness.",
      "Handling coordinate calculations accurately during continuous drawing.",
    ],

    whatILearned: [
      "How real-time user input is handled in interactive applications.",
      "The importance of efficient rendering and event handling for smooth UX.",
      "Stronger understanding of UI logic independent of programming language.",
    ],
  },

  {
    id: 'library-db',
    title: 'School Library Database System',
    oneLiner: 'A MySQL-backed library system with secure authentication and Python automation.',
    description:
      'A database-driven library management system built using MySQL and Python to manage student records, library resources, and librarian operations efficiently.',
    categoryTags: ['Data', 'Backend'],
    techStack: ['MySQL', 'Python', 'SQL', 'PyCharm'],
    image: database,
    featured: false,

    problem:
      'Manual tracking of library records and users made it difficult to manage resources, users, and security efficiently.',

    solution:
      'Designed a structured MySQL database with clear relationships and integrated Python scripts to automate workflows and enhance usability.',

    highlights: [
      'Designed relational database schema for students, librarian, and library resources.',
      'Implemented password hashing to securely store user credentials.',
      'Automated library operations using Python scripts for improved efficiency.',
      'Integrated SQL queries with Python for dynamic data handling.',
    ],

    challenges: [
      'Designing relationships that balanced data integrity with query simplicity.',
      'Implementing secure password hashing correctly.',
      'Coordinating SQL logic with Python-based workflows.',
    ],

    whatILearned: [
      'How to design and normalize relational databases using MySQL.',
      'Practical integration of SQL databases with Python applications.',
      'Importance of security practices such as password hashing.',
      'How databases support real-world systems through structured data modeling.',
    ],
  }

];

export const moreProjects = [
  {
    id: 'tic tac toe',
    title: 'ML Tic Tac Toe Game',
    period: '2024',
    shortDesc: 'AI-enabled Tic Tac Toe game written in C for resource-constrained IoT devices, featuring Minimax-based gameplay and adjustable difficulty using machine learning techniques.',
    tags: ['C', 'AI', 'ML', 'Minimax']
  },
  {
    id: 'flight map',
    title: 'Flight Map Routing Project',
    period: '2025',
    shortDesc: 'Flight route finder built with graph data structures, generating route options between airports and ranking them by distance, number of stops, and estimated cost.',
    tags: [
      'Graphs',
      'Pathfinding',
      'Algorithms',
      'Routing',
      'Data Structures',
      'UI',
      'Dataset'
    ]
  },
  {
    id: 'Emb',
    title: 'SPI Flash',
    period: '2025',
    shortDesc: 'Performance benchmarking and forensic analysis tool for SPI flash memory, measuring read, program, and erase behaviour to differentiate chips with identical specifications.',
    tags: [
      'Embedded Systems',
      'C',
      'Raspberry Pi Pico',
      'SPI',
      'Performance Benchmarking',
      'Forensic Analysis',
      'CSV Logging'
    ],
  },
];

