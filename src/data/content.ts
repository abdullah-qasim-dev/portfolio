import type {
  NavLink,
  Interest,
  StatItem,
  ExperienceItem,
  ProjectItem,
  TechCategory,
  SkillItem,
  EducationItem,
  CertificateItem,
  ServiceItem,
  ContactCard,
} from "@/types";

export const PROFILE = {
  name: "Hafiz Abdullah Qasim",
  shortName: "Abdullah Qasim",
  tagline: "Aspiring AI Engineer | Data Science Student | AI/ML Intern",
  intro:
    "I am a Data Science student passionate about Artificial Intelligence, Machine Learning, NLP, Computer Vision, and Data Engineering. I enjoy building practical AI-powered solutions that solve real-world problems.",
  resumeUrl: "/Hafiz_Abdullah_Qasim_CV.pdf",
  profileImage:
    "https://avatars.githubusercontent.com/u/143223503?s=400&u=34bc26c86aa29e361b5c345a7bde2bcafcc13ae4&v=4",
  email: "abdullahqasim607@gmail.com",
  phone: "+92 309 9771137",
  location: "Johar Town, Lahore, Pakistan",
  github: "https://github.com/abdullah-qasim-dev",
  githubUsername: "abdullah-qasim-dev",
  linkedin: "https://www.linkedin.com/in/abdullah-qasim-dev/",
};

export const ROLES = [
  "Aspiring AI Engineer",
  "AI/ML Intern",
  "Data Science Student",
  "Machine Learning Developer",
  "NLP Enthusiast",
  "Computer Vision Enthusiast",
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const BIO = {
  headline: "Learning AI by building it, not just studying it.",
  paragraph1:
    "I am currently pursuing a Bachelor's degree in Data Science at FAST NUCES Lahore, passionate about Artificial Intelligence, Machine Learning, NLP, Computer Vision, and Data Engineering.",
  paragraph2:
    "Currently working as an AI/ML Intern at MeissaSoft, where I contribute to machine learning development, AI research, model evaluation, and real-world AI solutions. Previously, I completed a remote internship at Nepta Solutions (UK), working on Sage 50 and WooCommerce integrations.",
  paragraph3: "I enjoy building practical AI-powered solutions rather than just studying theory.",
};

export const INTERESTS: Interest[] = [
  { title: "Artificial Intelligence", description: "Designing intelligent systems that reason and adapt.", icon: "FiCpu" },
  { title: "Machine Learning", description: "Training models that learn patterns from real data.", icon: "FiTrendingUp" },
  { title: "Natural Language Processing", description: "Teaching machines to understand human language.", icon: "FiMessageSquare" },
  { title: "Computer Vision", description: "Building systems that see and interpret the world.", icon: "FiEye" },
  { title: "Data Engineering", description: "Architecting pipelines that move data reliably.", icon: "FiDatabase" },
  { title: "Large Language Models", description: "Exploring prompt engineering and LLM evaluation.", icon: "FiZap" },
  { title: "Data Warehousing", description: "Modeling data for fast, reliable analytics.", icon: "FiServer" },
  { title: "Python Development", description: "Writing clean, production-grade Python.", icon: "FiCode" },
  { title: "AI Research", description: "Reading papers and reproducing results.", icon: "FiBookOpen" },
  { title: "Open Source Learning", description: "Building in public and learning from the community.", icon: "FiGitBranch" },
];

export const STATS: StatItem[] = [
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Internships", value: 3 },
  { label: "Certifications", value: 11, suffix: "+" },
  { label: "Programming Languages", value: 4 },
  { label: "AI Libraries", value: 10, suffix: "+" },
  { label: "GitHub Repositories", value: 12, suffix: "+" },
  { label: "Years of Learning", value: 3, suffix: "+" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI/ML Intern",
    company: "MeissaSoft",
    period: "July 2026 – Present",
    status: "current",
    responsibilities: [
      "Machine Learning Development",
      "AI Research",
      "Model Evaluation",
      "Data Processing",
      "Python Development",
      "Real-world AI Solutions",
      "Team Collaboration",
    ],
  },

  {
  role: "Data Science Intern",
  company: "Decodelabs",
  period: "May 2026 – June 2026",
  status: "past",
  responsibilities: [
    "Data Cleaning & Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization",
    "Feature Engineering",
    "Machine Learning Model Development",
    "Model Evaluation",
  ],
},
  {
    role: "Software Engineer Intern",
    company: "Nepta Solutions (UK)",
    period: "June 2025 – August 2025",
    status: "past",
    responsibilities: [
      "Sage 50 Integration",
      "WooCommerce Integration",
      "C# Development",
      "API Integration",
      "Data Mapping",
      "Background Services",
      "Software Integration",
    ],
  },
  
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "LLM-Based Personalized K-12 Tutor",
    description:
      "A research pipeline comparing fine-tuned language models to generate personalized, misconception-aware feedback for K-12 math and science students.",
    technologies: ["Python", "Hugging Face", "Flan-T5", "NLP", "Prompt Engineering"],
    features: [
      "Personalized feedback generation",
      "Prompt strategy comparison",
      "BLEU/ROUGE evaluation",
      "Student misconception analysis",
    ],
    github: "https://github.com/abdullah-qasim-dev/LLM-K12-Feedback-Generator",
    status: "shipped",
  },
  {
    title: "Rear Obstacle Distance Detection",
    description:
      "Real-time computer vision system that detects obstacles behind a vehicle and estimates distance, with color-coded proximity alerts.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "Computer Vision"],
    features: [
      "Real-time obstacle detection",
      "Distance estimation",
      "Live video streaming",
      "Mobile-responsive interface",
      "Color-coded alerts",
    ],
    github: "https://github.com/abdullah-qasim-dev/Rear-Obstacle-Detection-YOLOv8",
    status: "shipped",
  },
  {
    title: "Customer Churn Prediction System",
    description:
      "An end-to-end classification pipeline that predicts customer churn from behavioral and account data.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    features: [
      "Data preprocessing",
      "Feature engineering",
      "Classification models",
      "Churn prediction",
    ],
    github: "https://github.com/abdullah-qasim-dev/Customer-Churn-Prediction",
    status: "shipped",
  },
  {
    title: "Stock Market Price Prediction",
    description:
      "Comparative study of regression models forecasting stock prices from historical market data.",
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy"],
    features: [
      "Historical stock analysis",
      "Feature extraction",
      "Multiple ML models",
      "Performance evaluation",
    ],
    github: "https://github.com/abdullah-qasim-dev/Stock-Price-Prediction-AAPL-",
    status: "shipped",
  },
  {
    title: "Stock & Crypto Data Warehouse",
    description:
      "A dimensional data warehouse with ETL/ELT pipelines for analytical reporting on stock and crypto markets.",
    technologies: ["PostgreSQL", "ETL", "ELT", "Data Warehousing"],
    features: [
      "Dimensional modeling",
      "Data pipelines",
      "Performance evaluation",
      "Analytical reporting",
    ],
    github: "https://github.com/abdullah-qasim-dev/stock-crypto-data-warehouse",
    status: "shipped",
  },
  {
    title: "Cryptocurrency Market Regime Clustering",
    description:
      "Unsupervised learning approach that detects Bitcoin market regimes (bullish, bearish, high-volatility) using engineered features.",
    technologies: ["Python", "K-Means", "Data Mining"],
    features: [
      "Regime detection",
      "Feature engineering",
      "Bitcoin market analysis",
      "Unsupervised learning",
    ],
    github: "https://github.com/abdullah-qasim-dev/Bitcoin-Price-Clustering-Analysis",
    status: "shipped",
  },
];

export const TECH_STACK: TechCategory[] = [
  { category: "Programming", icon: "FiCode", items: ["Python", "C++", "C#", "SQL"] },
  { category: "Machine Learning & AI", icon: "FiCpu", items: ["Scikit-Learn", "TensorFlow", "PyTorch", "Hugging Face", "NLP", "Prompt Engineering"] },
  { category: "Computer Vision", icon: "FiEye", items: ["OpenCV", "YOLOv8"] },
  { category: "Data Engineering", icon: "FiDatabase", items: ["PostgreSQL", "ETL", "ELT", "Data Warehousing"] },
  { category: "Web Development", icon: "FiGlobe", items: ["FastAPI", "Flask",  "Streamlit", "HTML", "CSS", "JavaScript"] },
  { category: "Data Analytics", icon: "FiBarChart2", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"] },
  { category: "Tools", icon: "FiTool", items: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"] },
];

export const SKILLS: SkillItem[] = [
  { name: "Python", level: 92 },
  { name: "Machine Learning", level: 85 },
  { name: "NLP", level: 80 },
  { name: "Computer Vision", level: 78 },
  { name: "SQL", level: 85 },
  { name: "Data Engineering", level: 75 },
  { name: "Flask", level: 80 },
  { name: "Problem Solving", level: 90 },
  { name: "Data Structures & Algorithms", level: 85 },
  { name: "OOP", level: 88 },
  { name: "Communication", level: 82 },
];

export const EDUCATION: EducationItem[] = [
  { degree: "Bachelor of Science in Data Science", institution: "FAST NUCES Lahore", period: "2023 – 2027" },
  { degree: "ICS", institution: "Punjab College", period: "2021 – 2023" },
  { degree: "Matric", institution: "The Trust School", period: "2019 – 2021" },
];

export const CERTIFICATES: CertificateItem[] = [
  { title: "Working with the OpenAI API", issuer: "DataCamp" },
  { title: "Prompt Engineering with the OpenAI API", issuer: "DataCamp" },
  { title: "Deep Learning with PyTorch", issuer: "DataCamp" },
  { title: "Feature Engineering for Machine Learning in Python", issuer: "DataCamp" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte" },
  { title: "Technology Job Simulation", issuer: "Deloitte" },
  { title: "Cyber Job Simulation", issuer: "Deloitte" },
  { title: "Remote Internship Certificate", issuer: "Nepta Solutions" },
  { title: "Microsoft Office Specialist: Word Associate", issuer: "Microsoft" },
  { title: "Web Development Course", issuer: "Peak Solutions" },
  { title: "LUMS Math Circle", issuer: "LUMS" },
];

export const ACHIEVEMENTS: string[] = [
  "AI/ML Intern at MeissaSoft",
  "Remote Internship at Nepta Solutions UK",
  "Built multiple AI and Machine Learning projects",
  "Developed NLP applications",
  "Built Computer Vision systems using YOLOv8",
  "Experience with Data Warehousing and ETL pipelines",
  "Strong foundation in Machine Learning and Data Science",
];

export const SERVICES: ServiceItem[] = [
  { title: "AI Solutions", description: "End-to-end AI systems tailored to real problems.", icon: "FiCpu" },
  { title: "Machine Learning Models", description: "Training, tuning, and evaluating predictive models.", icon: "FiTrendingUp" },
  { title: "NLP Applications", description: "Text understanding, generation, and evaluation pipelines.", icon: "FiMessageSquare" },
  { title: "Computer Vision Systems", description: "Detection, tracking, and real-time video analysis.", icon: "FiEye" },
  { title: "Data Analytics", description: "Turning raw data into decisions with clear reporting.", icon: "FiBarChart2" },
  { title: "Data Engineering", description: "Reliable ETL/ELT pipelines and warehouse design.", icon: "FiDatabase" },
  { title: "Flask APIs", description: "Lightweight backend services for ML-powered apps.", icon: "FiServer" },
  { title: "Python Development", description: "Clean, well-tested, production-ready Python code.", icon: "FiCode" },
];

export const CONTACT_CARDS: ContactCard[] = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: "FiMail" },
  { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, "")}`, icon: "FiPhone" },
  { label: "Location", value: PROFILE.location, href: "#", icon: "FiMapPin" },
  { label: "LinkedIn", value: "abdullah-qasim-dev", href: PROFILE.linkedin, icon: "FiLinkedin" },
  { label: "GitHub", value: PROFILE.githubUsername, href: PROFILE.github, icon: "FiGithub" },
];

// EmailJS config — pulled from environment variables (see .env.example).
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};
