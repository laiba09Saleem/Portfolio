export type ProjectCategory = 'All' | 'Full-Stack Development' | 'AI/ML' | 'Data Analysis';

export interface Project {
  id: string;
  name: string;
  categoryTag: string;
  category: ('Full-Stack Development' | 'AI/ML' | 'Data Analysis')[];
  description: string;
  role?: string;
  keyFeatures: string[];
  techStack: {
    backend?: string[];
    frontend?: string[];
    aiData?: string[];
    additional?: string[];
  };
  githubUrl?: string;
  liveDemoUrl?: string;
  screenshots?: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isRemote?: boolean;
  descriptionPoints: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificateDoc {
  id: string;
  title: string;
  organization: string;
  type: 'Training Certificate' | 'Experience Letter' | 'Academic Certificate';
  issueDate: string;
  description: string;
  verificationDetails: string[];
  sampleDocumentUrl?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  graduationDate: string;
  location: string;
  gpa: string;
  coursework: string[];
}

export interface Language {
  name: string;
  level: string;
}
