export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: 'Advanced' | 'Intermediate' | 'Familiar' }[];
}

export interface Certification {
  name: string;
  issuer: string;
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  detail?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  roles: string[];
  heroSummary: string;
  aboutParagraphs: string[];
  focusAreas: string[];
  stats: { label: string; value: number; suffix?: string }[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: EducationItem[];
  certifications: Certification[];
  achievements: string[];
  contact: ContactInfo;
  resumeUrl: string;
}
