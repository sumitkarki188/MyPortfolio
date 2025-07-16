export interface Project {
  id: string;
  title: string;
  description: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  stats?: {
    stars: number;
    users: string;
    date: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      type?: string;
      stiffness?: number;
    };
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshDistortMaterial: any;
    }
  }
}