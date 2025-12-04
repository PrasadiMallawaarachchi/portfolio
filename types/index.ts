export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
  image?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level?: number; // 1-100
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  achievements?: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}
