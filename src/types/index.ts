export interface NavLink {
  label: string;
  href: string;
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  status: "current" | "past";
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  status: "shipped" | "in-progress";
}

export interface TechCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface SkillItem {
  name: string;
  //level: number; // 0-100
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactCard {
  label: string;
  value: string;
  href: string;
  icon: string;
}
