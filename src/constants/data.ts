import type {
  NavItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  Project,
  ContactLink,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    type: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS/SASS'],
  },
  {
    title: 'Engineering',
    type: 'engineering',
    items: [
      'Frontend Architecture',
      'State Management',
      'Performance Optimization',
      'Accessibility (a11y)',
      'Component Design Systems',
      'API Integration',
      'Code Review & Mentorship',
    ],
  },
  {
    title: 'Tools & Workflow',
    type: 'tools',
    items: ['Git', 'GitHub', 'Jira', 'Figma', 'Vercel', 'REST APIs'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'noon',
    role: 'Frontend Software Engineer III (Senior)',
    period: 'Jul 2023 — Present',
    location: 'Cairo, Egypt',
    description:
      'Owning and leading the checkout and cart experience on noon.com — a high-scale, revenue-critical system impacting conversion and payment success across millions of users.',
    highlights: [
      'Led the development and optimization of the "Buy Now" flow, contributing to ~3–4% of total GMV by enabling faster purchase completion and reducing checkout friction',
      'Spearheaded the full revamp of cart and checkout, improving usability, consistency, and overall user experience across critical purchase journeys',
      'Played a key role in the full frontend rewrite of noon.com, contributing to architecture decisions and scalable system design',
      'Drive frontend architecture, performance optimization, and large-scale refactoring efforts across core purchase flows',
      'Collaborate cross-functionally with backend, product, design, and QA to deliver scalable and reliable features',
      'Mentoring and managing a junior engineer through code reviews, technical guidance, and task planning',
      'Contribute to onboarding and knowledge sharing through multiple CAKE mentorship program rounds',
    ],
    current: true,
  },
  {
    company: 'German International University (GIU)',
    role: 'Research & Development Intern',
    period: 'Jun 2022 — Jul 2022',
    location: 'Berlin, Germany',
    description:
      'Worked on applied computer vision research focused on multi-camera object detection and tracking systems.',
    highlights: [
      'Worked on multi-camera object detection and tracking',
      'Applied computer vision techniques and advanced image processing concepts',
    ],
    current: false,
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'German University in Cairo (GUC)',
    location: 'Cairo, Egypt',
    degree: 'B.Sc. in Computer Engineering — Media Engineering & Technology',
    period: 'Sep 2018 — Jun 2023',
    gpa: '1.24',
    honours: 'With High Honours',
  },
  {
    institution: 'German International University (GIU)',
    location: 'Berlin, Germany',
    degree: 'B.Sc. in Computer Engineering — Media Engineering & Technology',
    period: 'Feb 2020 — Aug 2022',
    gpa: '1.24',
    honours: 'With High Honours',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Customer Support Agent',
    description:
      'An intelligent support agent built to handle customer queries with context-aware responses, escalation logic, and seamless handoff to human agents.',
    tags: ['Next.js', 'TypeScript', 'AI/LLM', 'API Integration'],
    status: 'coming-soon',
  },
  {
    title: 'Modern Checkout Platform',
    description:
      'A headless, composable checkout platform designed for high-conversion e-commerce flows — built with a focus on performance, accessibility, and payment reliability.',
    tags: ['React', 'TypeScript', 'Payments', 'Performance'],
    status: 'coming-soon',
  },
  {
    title: 'Merchant Analytics Dashboard',
    description:
      'A data-rich dashboard for merchants to monitor sales, revenue trends, and customer behavior — with real-time updates and exportable reports.',
    tags: ['Next.js', 'TypeScript', 'Data Visualization', 'REST APIs'],
    status: 'coming-soon',
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/OmarHazemElesawy0',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/omar-elesawy-286915239',
    icon: 'linkedin',
  },
  {
    label: 'omarhazem2204@gmail.com',
    href: 'mailto:omarhazem2204@gmail.com',
    icon: 'email',
  },
];
