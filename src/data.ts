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
      description: 'Building robust web applications with React, TypeScript, Express.js and modern frameworks including Nunjucks templating.',
      tags: ['React', 'TypeScript', 'Express.js'],
      icon: 'code',
    },
    {
      title: 'Frontend & Styling',
      description: 'Creating beautiful, responsive interfaces with modern CSS frameworks, animations and attention to detail.',
      tags: ['GSAP', 'Tailwind', 'DaisyUI', 'Lucide'],
      icon: 'mobile',
    },
    {
      title: 'Database Management',
      description: 'Designing and optimising relational databases with MySQL and PostgreSQL, including efficient queries and data modelling.',
      tags: ['MySQL', 'PostgreSQL', 'SQL'],
      icon: 'cpu',
    },
    {
      title: 'DevOps & Deployment',
      description: 'Experienced in CI/CD pipelines, GitHub Actions, and automated deployment strategies.',
      tags: ['GitHub Actions', 'CI/CD'],
      icon: 'deploy',
    },
    {
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to enhance development workflows and create intelligent solutions.',
      tags: ['AI Tools', 'Automation'],
      icon: 'ai',
    },
    {
      title: 'Version Control Expert',
      description: 'Advanced Git workflows, collaborative development, and project management best practices.',
      tags: ['Git', 'Collaboration'],
      icon: 'git',
    },
  ],

  projects: [
    // Major Projects
    {
      title: 'Calorie Tracker',
      description: 'Comprehensive nutrition tracking application for monitoring daily calorie intake and maintaining healthy habits.',
      technologies: ['TypeScript', 'React', 'Nunjucks', 'JavaScript', 'HTML/CSS'],
      status: 'live',
      link: 'https://filipkainos.github.io/CalorieTrackerApp/',
      category: 'major',
    },
    {
      title: '2 Player Games',
      description: 'Interactive gaming collection featuring multiplayer games for competitive fun.',
      technologies: ['HTML', 'JavaScript'],
      status: 'live',
      link: 'https://filipkainos.github.io/2PlayerGames/index.html',
      category: 'major',
    },
    // Minor Projects
    {
      title: 'Team Randomiser',
      description: 'Interactive team sorting application for fair and random team generation.',
      technologies: ['JavaScript', 'HTML'],
      status: 'live',
      link: 'https://filipkainos.github.io/SortingHat/',
      category: 'minor',
    },
    {
      title: 'Egg Timer',
      description: 'Elegant countdown timer application with customisable intervals and audio notifications.',
      technologies: ['HCL', 'JavaScript', 'CSS', 'Shell', 'HTML'],
      status: 'live',
      link: 'https://filipkainos.github.io/EggTimer/',
      category: 'minor',
    },
    {
      title: 'Coming Soon',
      description: 'Exciting new projects in development. Stay tuned for innovative solutions.',
      technologies: ['In Progress'],
      status: 'coming-soon',
      category: 'major',
    },
    {
      title: 'More Projects',
      description: 'Additional mini tools and utilities currently in development.',
      technologies: ['Coming Soon'],
      status: 'in-progress',
      category: 'minor',
    },
  ],

  timeline: [
    // Professional
    {
      year: '2025 - Present',
      title: 'Software Engineer @ Kainos',
      description: 'Developing enterprise web applications using TypeScript, Express.js, and modern frontend technologies. Implementing CI/CD pipelines and best practices.',
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
      title: 'Education & Training',
      description: 'Attended Bangor Grammar School where I studied Computer Science, History and Mathematics, building a strong foundation in programming and software engineering methodologies.',
      category: 'professional',
    },
    // Personal
    {
      year: '2025',
      title: 'Portfolio & Side Projects',
      description: 'Launched Calorie Tracker app, expanded gaming platform, and created Team Randomiser, Egg Timer, and 2 Player Games platforms.',
      category: 'personal',
    },
    {
      year: '2024',
      title: 'Learning & Development',
      description: 'Focused on learning programming in school, building foundational skills in web development and exploring different technologies.',
      category: 'personal',
    },
    {
      year: 'Ongoing',
      title: 'Continuous Learning',
      description: 'Exploring AI integration, cloud services (AWS), and advanced animation techniques with GSAP.',
      category: 'personal',
    },
  ],

  technologies: [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'DaisyUI', category: 'Frontend' },
    { name: 'GSAP', category: 'Frontend' },
    { name: 'Lucide Icons', category: 'Frontend' },
    { name: 'Nunjucks', category: 'Frontend' },
    { name: 'GitHub Copilot', category: 'AI & Tools' },
    { name: 'Claude AI', category: 'AI & Tools' },
    { name: 'Gemini AI', category: 'AI & Tools' },
    { name: 'VS Code', category: 'AI & Tools' },
    { name: 'Git', category: 'AI & Tools' },
    { name: 'Node.js', category: 'Backend & DevOps' },
    { name: 'Express.js', category: 'Backend & DevOps' },
    { name: 'MySQL', category: 'Backend & DevOps' },
    { name: 'PostgreSQL', category: 'Backend & DevOps' },
    { name: 'GitHub Actions', category: 'Backend & DevOps' },
    { name: 'GitHub Pages', category: 'Backend & DevOps' },
    { name: 'AWS', category: 'Backend & DevOps' },
    { name: 'Docker', category: 'Backend & DevOps' },
    { name: 'CI/CD', category: 'Backend & DevOps' },
  ],

  stats: [
    { value: '5+', label: 'Live Projects' },
    { value: '15+', label: 'Technologies' },
    { value: 'GitHub', label: 'Active Repos' },
    { value: '2024', label: 'Started Journey' },
  ],
};
