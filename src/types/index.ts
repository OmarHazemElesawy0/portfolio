export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'engineering' | 'tools';
}

export interface SkillCategory {
  title: string;
  type: 'frontend' | 'engineering' | 'tools';
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa?: string;
  honours?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: 'live' | 'coming-soon' | 'wip';
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  imageUrl?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}
