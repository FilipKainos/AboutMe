import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Filip Szwerluga',
    title: 'Software Engineer',
    tagline: 'Building the future, one line of code at a time.',
    email: 'filip.szwerluga@kainos.com',
    bio: 'Passionate about creating innovative software solutions that make a difference. Leveraging AI and modern technologies to craft beautiful code and exceptional user experiences.',
  },
  
  social: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/filipszwerluga',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/FilipKainos',
      icon: 'github',
    },
    {
      name: 'Email',
      url: 'mailto:filip.szwerluga@kainos.com',
      icon: 'email',
    },
    {
      name: 'Portfolio',
      url: '#projects',
      icon: 'portfolio',
    },
  ],

  achievements: [
    {
      title: 'Full Stack Development',
      description: 'Built scalable web applications with modern JavaScript frameworks and responsive design',
      tags: ['JavaScript', 'HTML/CSS'],
      icon: 'code',
    },
    {
      title: 'Mobile-First Design',
      description: 'Specialized in responsive web design with mobile-first considerations and cross-platform compatibility',
      tags: ['Responsive', 'PWA'],
      icon: 'mobile',
    },
    {
      title: 'Algorithm Optimization',
      description: 'Expertise in performance optimization and efficient algorithm design for complex problem solving',
      tags: ['Algorithms', 'Performance'],
      icon: 'cpu',
    },
    {
      title: 'DevOps & Deployment',
      description: 'Experienced in CI/CD pipelines, GitHub Actions, and automated deployment strategies',
      tags: ['GitHub Actions', 'CI/CD'],
      icon: 'deploy',
    },
    {
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to enhance development workflows and create intelligent solutions',
      tags: ['AI Tools', 'Automation'],
      icon: 'ai',
    },
    {
      title: 'Version Control Expert',
      description: 'Advanced Git workflows, collaborative development, and project management best practices',
      tags: ['Git', 'Collaboration'],
      icon: 'git',
    },
  ],

  projects: [
    {
      title: 'Team Randomiser',
      description: 'Interactive team sorting application for fair and random team generation',
      technologies: ['JavaScript', 'HTML'],
      status: 'live',
      link: '#',
    },
    {
      title: 'Egg Timer',
      description: 'Elegant countdown timer application with customizable intervals and audio notifications',
      technologies: ['JavaScript', 'CSS'],
      status: 'live',
      link: '#',
    },
    {
      title: '2 Player Games',
      description: 'Interactive gaming collection featuring multiplayer games for competitive fun',
      technologies: ['JavaScript', 'Canvas'],
      status: 'live',
      link: '#',
    },
    {
      title: 'Coming Soon',
      description: 'Exciting new projects in development. Stay tuned for innovative solutions!',
      technologies: ['In Progress'],
      status: 'coming-soon',
    },
    {
      title: 'Future Innovation',
      description: 'Next-generation applications leveraging cutting-edge technologies and AI integration',
      technologies: ['Planning Phase'],
      status: 'planning',
    },
    {
      title: 'More Projects',
      description: 'Additional innovative solutions and creative applications currently in development',
      technologies: ['Coming Soon'],
      status: 'in-progress',
    },
  ],

  timeline: [
    {
      year: 'Present',
      title: 'Software Engineer',
      description: 'Developing innovative web applications and integrating AI solutions to create exceptional user experiences.',
    },
    {
      year: '2024',
      title: 'Portfolio Development',
      description: 'Created multiple interactive web applications including team management tools, timers, and gaming platforms.',
    },
    {
      year: '2023-2024',
      title: 'Skill Development',
      description: 'Mastered modern web development technologies, AI integration, and advanced programming concepts.',
    },
  ],

  technologies: [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'GitHub Copilot', category: 'AI & Tools' },
    { name: 'ChatGPT', category: 'AI & Tools' },
    { name: 'VS Code', category: 'AI & Tools' },
    { name: 'Git', category: 'AI & Tools' },
    { name: 'Node.js', category: 'Backend & DevOps' },
    { name: 'GitHub Actions', category: 'Backend & DevOps' },
    { name: 'GitHub Pages', category: 'Backend & DevOps' },
    { name: 'CI/CD', category: 'Backend & DevOps' },
  ],

  stats: [
    { value: '3+', label: 'Live Projects' },
    { value: '10+', label: 'Technologies' },
    { value: 'GitHub', label: 'Active Repos' },
    { value: '2024', label: 'Started Journey' },
  ],
};
