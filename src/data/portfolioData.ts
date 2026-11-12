import { Project, Experience, SkillCategory, CertificateDoc, EducationInfo, Language } from '../types/portfolio';

// Local asset images
import chatbot1Img from '../assets/images/chatbot1.png';
import chatbot2Img from '../assets/images/chatbot2.png';
import opticareImg from '../assets/images/opticare_healthcare_vitals_1794466287773.jpg';
import agrivisionImg from '../assets/images/agrivision_plant_disease_1794466286898.jpg';
import studentDataImg from '../assets/images/student_performance_data_1794466287951.jpg';

export const personalInfo = {
  fullName: 'Laiba Saleem',
  title: 'Software Engineer | Python Developer | AI/ML Developer',
  headline: 'Building Intelligent Solutions for Real-World Problems.',
  location: 'Lahore, Pakistan',
  email: 'laibasaleem068@gmail.com',
  linkedin: 'https://pk.linkedin.com/in/laiba-saleem-4b8541248',
  github: 'https://github.com/laiba09Saleem',
  youtube: 'https://youtube.com/@linesera_solutions?si=ufKFPXcSoXrpe2jb',
  bio: 'Computer Science graduate with hands-on experience in software engineering, backend development, and AI-powered applications. Experienced in building REST APIs, full-stack applications, machine learning solutions and intelligent software systems. Passionate about solving real-world problems through technology and continuously improving engineering skills.',
  aboutLong: [
    'I am a Computer Science graduate from the University of the Punjab with practical experience in software engineering and AI/ML development. Throughout my internships and projects, I have worked on building full-stack applications, developing RESTful APIs, integrating frontend and backend systems, and exploring machine learning solutions.',
    'My technical experience includes Python, FastAPI, Django, React, TypeScript, SQL and AI-powered application development.',
    'I enjoy learning new technologies, understanding real-world problems and transforming ideas into practical software solutions. I believe in continuous learning, strong problem-solving skills and writing maintainable code.'
  ]
};

export const projectsData: Project[] = [
  {
    id: 'netsol-chatbot',
    name: 'NETSOL Chatbot (Laiba Chatbot)',
    categoryTag: 'Full-Stack Development · AI Applications',
    category: ['Full-Stack Development', 'AI/ML'],
    featured: true,
    description:
      'Laiba Chatbot is a full-stack conversational assistant built using a FastAPI backend and React + Vite frontend. The application provides a lightweight web interface for conversational interactions while using Python services for AI-driven message processing. The system follows a modular backend architecture with routers and graph-based workflows, integrating frontend API communication with AI-related services.',
    keyFeatures: [
      'FastAPI backend with CORS support',
      'React + Vite frontend with modern styling',
      'Axios-based API integration and real-time streaming',
      'Modular backend architecture with routers and graph workflows',
      'Graph-based workflows with LangChain & LangGraph',
      'Vector store support for document indexing',
      'Supabase client support for cloud persistence'
    ],
    techStack: {
      backend: ['Python', 'FastAPI', 'Uvicorn'],
      frontend: ['React', 'Vite', 'TypeScript'],
      aiData: ['LangChain', 'Vector Stores', 'Supabase']
    },
    githubUrl: 'https://github.com/laiba09Saleem/Netsol_chatbot',
    liveDemoUrl: 'https://netsol-chatbot.vercel.app/',
    screenshots: [chatbot1Img, chatbot2Img],
    image: chatbot1Img,
    imageAlt: 'NETSOL Chatbot user interface preview'
  },
  {
    id: 'opticare',
    name: 'OptiCare',
    categoryTag: 'Full-Stack Development · AI & Healthcare',
    category: ['Full-Stack Development', 'AI/ML'],
    role: 'Software Engineer',
    featured: true,
    description:
      'OptiCare is a virtual hospital platform designed to support healthcare workflows through digital patient monitoring and AI-assisted wound assessment. The platform includes a doctor-side dashboard for monitoring patient vitals and an image-based wound assessment module. It combines frontend development, backend APIs and computer vision capabilities to support healthcare professionals.',
    keyFeatures: [
      'Doctor-side dashboard for clinical care management',
      'Real-time patient vitals monitoring telemetry',
      'Image-based wound assessment module',
      'AI-assisted wound healing stage analysis',
      'Seamless frontend and backend integration',
      'High-performance REST API integration'
    ],
    techStack: {
      backend: ['FastAPI', 'Python'],
      frontend: ['React.js'],
      aiData: ['Computer Vision', 'Supabase']
    },
    liveDemoUrl: 'https://opti-care-frontend.vercel.app/',
    // GitHub repository link intentionally omitted per specification until provided
    githubUrl: undefined,
    image: opticareImg,
    imageAlt: 'OptiCare healthcare vitals dashboard and clinical monitoring module'
  },
  {
    id: 'agrivision-ai',
    name: 'AgriVision – AI Plant Disease Detection',
    categoryTag: 'Artificial Intelligence · Machine Learning · Full-Stack',
    category: ['AI/ML', 'Full-Stack Development'],
    featured: false,
    description:
      'AgriVision is an AI-powered web application designed to help farmers and plant enthusiasts identify plant diseases through leaf image analysis. Users can upload an image of a plant leaf and receive AI-generated disease identification, severity assessment, confidence information, treatment recommendations and prevention guidance. The application uses Google Gemini 2.5 Flash for image analysis and Supabase Edge Functions for backend processing.',
    keyFeatures: [
      'Plant leaf image upload and drag-and-drop intake',
      'AI-powered disease identification via Gemini 2.5 Flash',
      'Disease severity assessment & diagnostic confidence scores',
      'Curated treatment recommendations and medication paths',
      'Prevention guidance and agricultural best practices',
      'Responsive, accessible user interface with shadcn/ui and Tailwind',
      'Real-time edge processing workflow'
    ],
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['Supabase', 'Supabase Edge Functions', 'Deno'],
      aiData: ['Google Gemini 2.5 Flash'],
      additional: ['Framer Motion', 'React Router', 'React Query', 'Vitest', 'Playwright']
    },
    githubUrl: 'https://github.com/laiba09Saleem/AgriVision-AI',
    // Live demo intentionally omitted per specification until provided
    liveDemoUrl: undefined,
    image: agrivisionImg,
    imageAlt: 'AgriVision plant disease diagnostic analysis visual'
  },
  {
    id: 'student-performance-analyzer',
    name: 'Student Performance Analyzer',
    categoryTag: 'Python Development · Data Analysis · EDA',
    category: ['Data Analysis'],
    featured: false,
    description:
      'Student Performance Analyzer is a Python-based data analysis project focused on exploring academic performance data and identifying factors that influence student success. The project follows an end-to-end data analysis workflow, including data cleaning, feature engineering, exploratory data analysis and statistical visualization. It explores relationships between study habits, academic performance, geographic location and other student characteristics.',
    keyFeatures: [
      'Missing-value handling and statistical imputation',
      'Duplicate record removal and robust data cleaning',
      'Feature engineering: total score, average score, pass/fail classification',
      'Letter grade generation and distribution plotting',
      'Subject-wise performance comparative analysis',
      'Correlation study: study hours vs academic outcomes',
      'City-wise and geographic performance comparisons',
      'Gender-based performance exploratory analysis',
      'Statistical visualizations with Seaborn and Matplotlib'
    ],
    techStack: {
      backend: ['Python 3.x'],
      aiData: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      additional: ['Jupyter Notebook', 'Exploratory Data Analysis (EDA)']
    },
    githubUrl: 'https://github.com/laiba09Saleem/Student_Performance_Analyzer',
    // Live demo intentionally omitted per specification (Jupyter Notebook project)
    liveDemoUrl: undefined,
    image: studentDataImg,
    imageAlt: 'Student Performance Analyzer statistical charts and correlation heatmaps'
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-netsol-trainee',
    role: 'AI/ML Trainee',
    company: 'NETSOL Technologies Inc.',
    period: 'February 2026 – June 2026',
    location: 'Lahore, Pakistan',
    isRemote: false,
    descriptionPoints: [
      'Worked on end-to-end machine learning projects, training and evaluating more than eight classification and regression models using Scikit-learn, PyTorch, TensorFlow and Pandas.',
      'Developed a MobileNetV2-based wound assessment system achieving 89% accuracy on the test dataset, with NLP-assisted clinical validation.',
      'Worked with Docker and FastAPI to build, containerize and deploy AI-based microservices.'
    ]
  },
  {
    id: 'exp-netsol-intern',
    role: 'AI Intern',
    company: 'NETSOL Technologies Inc.',
    period: 'June 2026',
    location: 'Lahore, Pakistan',
    isRemote: false,
    descriptionPoints: [
      'Developed a Retrieval-Augmented Generation (RAG) chatbot with FastAPI backend integration for automated query resolution across more than 500 enterprise documents.',
      'Contributed to reducing manual query handling time by 40% through intelligent vector retrieval and prompt engineering.',
      'Developed web scraping pipelines processing over 2,000 records for data preprocessing and knowledge base ingestion.'
    ]
  },
  {
    id: 'exp-rising-tech',
    role: 'Software Engineer Intern',
    company: 'Rising Tech Solutions Pvt Ltd.',
    period: 'January 2026 – March 2026',
    location: 'Lahore, Pakistan',
    isRemote: false,
    descriptionPoints: [
      'Built responsive web applications using React.js, TypeScript and FastAPI.',
      'Developed RESTful APIs and integrated frontend and backend systems with robust error handling.',
      'Conducted research on emerging web technologies and explored scalable software architectures.',
      'Collaborated closely with senior developers using Git version control and modern development workflows.'
    ]
  },
  {
    id: 'exp-matchvet',
    role: 'Software Engineer Intern',
    company: 'MatchVet (SMC Pvt Ltd)',
    period: 'August 2025 – December 2025',
    location: 'Remote',
    isRemote: true,
    descriptionPoints: [
      'Developed backend functionality using Django REST Framework for a veterinary platform serving over 200 active users.',
      'Integrated React.js frontend with backend APIs and contributed to improving API latency by 30%.',
      'Delivered features across four two-week Agile sprints and collaborated effectively within a three-member engineering team.'
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend Development',
    skills: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'Node.js', 'Express.js', 'SQLAlchemy']
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'LangGraph', 'Retrieval-Augmented Generation (RAG)']
  },
  {
    title: 'Database & Data',
    skills: ['PostgreSQL', 'SQLite', 'SQL', 'Pandas', 'NumPy']
  },
  {
    title: 'Tools & Engineering Practices',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Unit Testing', 'REST API Development']
  }
];

export const educationData: EducationInfo = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'University of the Punjab',
  graduationDate: 'September 2025',
  location: 'Lahore, Pakistan',
  gpa: '2.92 / 4.00',
  coursework: [
    'Software Engineering',
    'Database Systems',
    'Data Structures and Algorithms',
    'Web Technologies',
    'Object-Oriented Programming'
  ]
};

export const certificatesData: CertificateDoc[] = [
  {
    id: 'cert-navttc-netsol',
    title: 'NAVTTC x NETSOL NIAI AI/ML Program',
    organization: 'NETSOL Innovation & AI Institute (NIAI) / NAVTTC',
    type: 'Training Certificate',
    issueDate: '2026',
    description: 'Comprehensive specialized professional training in Machine Learning, Deep Learning architectures (PyTorch/TensorFlow), computer vision, and NLP system deployment.',
    verificationDetails: [
      'Issued jointly by NAVTTC and NETSOL Technologies Inc.',
      'Curriculum: Advanced ML, Deep Learning, MobileNetV2, FastAPI, Docker deployment',
      'Hands-on capstone project with clinical wound assessment model'
    ]
  },
  {
    id: 'cert-netsol-exp',
    title: 'Experience Letter – AI & Machine Learning Trainee',
    organization: 'NETSOL Technologies Inc.',
    type: 'Experience Letter',
    issueDate: 'June 2026',
    description: 'Formal verification of employment and project contributions in AI/ML training, RAG chatbot development, and computer vision model engineering at NETSOL Lahore.',
    verificationDetails: [
      'Role: AI/ML Trainee & AI Intern',
      'Location: NETSOL Technologies Inc., Lahore, Pakistan',
      'Core Deliverables: Enterprise RAG bot (500+ docs), 89% wound assessment classifier'
    ]
  },
  {
    id: 'cert-matchvet-exp',
    title: 'Experience Letter – Software Engineer Intern',
    organization: 'MatchVet (SMC Pvt Ltd)',
    type: 'Experience Letter',
    issueDate: 'December 2025',
    description: 'Official internship completion letter documenting backend development with Django REST Framework, API latency optimization, and 4 Agile sprint cycles.',
    verificationDetails: [
      'Role: Software Engineer Intern',
      'Mode: Remote',
      'Key Impact: 30% API latency reduction, 200+ veterinary platform users served'
    ]
  },
  {
    id: 'cert-risingtech-exp',
    title: 'Experience Letter – Software Engineer Intern',
    organization: 'Rising Tech Solutions Pvt Ltd.',
    type: 'Experience Letter',
    issueDate: 'March 2026',
    description: 'Formal experience letter attesting to frontend and backend web development using React.js, TypeScript, and FastAPI in Lahore.',
    verificationDetails: [
      'Role: Software Engineer Intern',
      'Location: Lahore, Pakistan',
      'Key Focus: Scalable web apps, REST APIs, Git workflow with senior engineers'
    ]
  },
  {
    id: 'cert-pu-degree',
    title: 'Academic Certificate – BS Computer Science',
    organization: 'University of the Punjab',
    type: 'Academic Certificate',
    issueDate: 'September 2025',
    description: 'Official degree completion verification for Bachelor of Science in Computer Science from the University of the Punjab, Lahore.',
    verificationDetails: [
      'Degree: Bachelor of Science in Computer Science (BSCS)',
      'Institution: University of the Punjab, Lahore',
      'Cumulative GPA: 2.92 / 4.00'
    ]
  }
];

export const languagesData: Language[] = [
  { name: 'Urdu', level: 'Fluent' },
  { name: 'English', level: 'Conversational' }
];
