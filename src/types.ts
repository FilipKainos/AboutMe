export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'live' | 'coming-soon' | 'planning' | 'in-progress';
  link?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    bio: string;
  };
  social: SocialLink[];
  achievements: Achievement[];
  projects: Project[];
  timeline: TimelineEvent[];
  technologies: Technology[];
  stats: Stat[];
}
