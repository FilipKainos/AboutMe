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
    // Major Projects
    {
      title: 'Calorie Tracker',
      description: 'Comprehensive nutrition tracking application for monitoring daily calorie intake and maintaining healthy habits',
      technologies: ['JavaScript', 'HTML/CSS', 'LocalStorage'],
      status: 'live',
      link: 'https://filipkainos.github.io/CalorieTrackerApp/',
      category: 'major',
    },
    {
      title: '2 Player Games',
      description: 'Interactive gaming collection featuring multiplayer games for competitive fun',
      technologies: ['JavaScript', 'Canvas'],
      status: 'live',
      link: 'https://filipkainos.github.io/2PlayerGames/index.html',
      category: 'major',
    },
    // Minor Projects
    {
      title: 'Team Randomiser',
      description: 'Interactive team sorting application for fair and random team generation',
      technologies: ['JavaScript', 'HTML'],
      status: 'live',
      link: 'https://filipkainos.github.io/SortingHat/',
      category: 'minor',
    },
    {
      title: 'Egg Timer',
      description: 'Elegant countdown timer application with customizable intervals and audio notifications',
      technologies: ['JavaScript', 'CSS'],
      status: 'live',
      link: 'https://filipkainos.github.io/EggTimer/',
      category: 'minor',
    },
    {
      title: 'Coming Soon',
      description: 'Exciting new projects in development. Stay tuned for innovative solutions!',
      technologies: ['In Progress'],
      status: 'coming-soon',
      category: 'major',
    },
    {
      title: 'More Projects',
      description: 'Additional mini tools and utilities currently in development',
      technologies: ['Coming Soon'],
      status: 'in-progress',
      category: 'minor',
    },
  ],

  timeline: [
    // Professional
    {
      year: 'Present',
      title: 'Software Engineer @ Kainos',
      description: 'Developing enterprise web applications using TypeScript, Express.js, and modern frontend technologies.',
      category: 'professional',
    },
    {
      year: '2024',
      title: 'Full Stack Development',
      description: 'Built production-ready applications with MySQL databases, RESTful APIs, and responsive user interfaces.',
      category: 'professional',
    },
    {
      year: '2023',
      title: 'Training & Certifications',
      description: 'Completed comprehensive training in software engineering methodologies and modern development practices.',
      category: 'professional',
    },
    // Personal
    {
      year: '2025',
      title: 'Portfolio Expansion',
      description: 'Launched Calorie Tracker app and expanded gaming platform with new features and improved UX.',
      category: 'personal',
    },
    {
      year: '2024',
      title: 'Side Projects Launch',
      description: 'Created Team Randomiser, Egg Timer, and 2 Player Games platforms.',
      category: 'personal',
    },
    {
      year: 'Ongoing',
      title: 'Continuous Learning',
      description: 'Exploring AI integration, cloud services (AWS), and advanced animation techniques.',
      category: 'personal',
    },
  ],

  technologies: [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'GSAP', category: 'Frontend' },
    { name: 'GitHub Copilot', category: 'AI & Tools' },
    { name: 'ChatGPT', category: 'AI & Tools' },
    { name: 'VS Code', category: 'AI & Tools' },
    { name: 'Git', category: 'AI & Tools' },
    { name: 'Node.js', category: 'Backend & DevOps' },
    { name: 'Express.js', category: 'Backend & DevOps' },
    { name: 'MySQL', category: 'Backend & DevOps' },
    { name: 'GitHub Actions', category: 'Backend & DevOps' },
    { name: 'GitHub Pages', category: 'Backend & DevOps' },
    { name: 'AWS', category: 'Backend & DevOps' },
    { name: 'CI/CD', category: 'Backend & DevOps' },
  ],

  stats: [
    { value: '5+', label: 'Live Projects' },
    { value: '15+', label: 'Technologies' },
    { value: 'GitHub', label: 'Active Repos' },
    { value: '2024', label: 'Started Journey' },
  ],
};
