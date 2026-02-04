import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
});

function initAfterLoad() {
  initAnimations();
  initSmoothScroll();
  initNavigation();
  initContactForm();
  initParticles();
  init3DCards();
  initCursor();
  initTypingEffect();
  initMagneticButtons();
  initTextReveal();
  // initWaveEffect(); // Disabled - cursor ripple effect removed
  initGlitchEffect();
  initHolographicCards();
  initScrollProgress();
  initBackToTop();
  initFloatingIcons();
  initProjectStatusCheck();
  setCurrentYear();
  
  // Refresh ScrollTrigger after everything is loaded
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

// ============================================================================
// PROJECT STATUS CHECK
// ============================================================================

function initProjectStatusCheck() {
  const projectCards = document.querySelectorAll('[data-project-url]');
  
  projectCards.forEach(async (card) => {
    const url = card.getAttribute('data-project-url');
    const statusContainer = card.querySelector('.project-status');
    const statusDot = card.querySelector('.status-dot');
    const statusText = card.querySelector('.status-text');
    
    if (!url || !statusContainer || !statusDot || !statusText) return;
    
    try {
      // Use fetch with no-cors mode to check if the site responds
      // Note: This won't give us the actual status code due to CORS,
      // but we can detect if the fetch completes or throws
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      await fetch(url, { 
        method: 'HEAD',
        mode: 'no-cors',
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      // If we get here without error, the site exists (no-cors doesn't give status)
      // We'll assume it's live if the fetch doesn't throw
      setProjectStatus(statusDot as HTMLElement, statusText as HTMLElement, 'live');
    } catch {
      // If fetch fails, mark as in development
      setProjectStatus(statusDot as HTMLElement, statusText as HTMLElement, 'development');
    }
  });
}

function setProjectStatus(dot: HTMLElement, text: HTMLElement, status: 'live' | 'development') {
  if (status === 'live') {
    dot.classList.add('bg-green-400');
    dot.classList.remove('bg-yellow-400');
    text.textContent = 'Live';
    text.classList.add('text-green-400');
    text.classList.remove('text-yellow-400');
  } else {
    dot.classList.add('bg-yellow-400');
    dot.classList.remove('bg-green-400');
    text.textContent = 'In Development';
    text.classList.add('text-yellow-400');
    text.classList.remove('text-green-400');
  }
}

// ============================================================================
// PRELOADER
// ============================================================================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progress = document.querySelector('.preloader-progress') as HTMLElement;
  const preloaderText = document.querySelector('.preloader-text');
  
  if (!preloader) {
    initAfterLoad();
    return;
  }
  
  const loadingPhrases = [
    'Loading magic...',
    'Preparing animations...',
    'Almost there...',
    'Let\'s go!',
  ];
  
  let loadProgress = 0;
  const interval = setInterval(() => {
    loadProgress += Math.random() * 15;
    if (loadProgress > 100) loadProgress = 100;
    
    if (progress) {
      progress.style.width = `${loadProgress}%`;
    }
    
    if (preloaderText) {
      const phraseIndex = Math.min(
        Math.floor(loadProgress / 25),
        loadingPhrases.length - 1,
      );
      preloaderText.textContent = loadingPhrases[phraseIndex];
    }
    
    if (loadProgress >= 100) {
      clearInterval(interval);
      
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        onComplete: () => {
          preloader.style.display = 'none';
          initAfterLoad();
        },
      });
    }
  }, 50);
}

// ============================================================================
// SCROLL PROGRESS INDICATOR
// ============================================================================

function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// ============================================================================
// BACK TO TOP BUTTON
// ============================================================================

function initBackToTop() {
  const button = document.getElementById('back-to-top');
  if (!button) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      button.classList.remove('opacity-0', 'invisible');
      button.classList.add('opacity-100', 'visible');
    } else {
      button.classList.add('opacity-0', 'invisible');
      button.classList.remove('opacity-100', 'visible');
    }
  });
  
  button.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: 'power3.inOut',
    });
  });
}

// ============================================================================
// FLOATING ICONS ANIMATION
// ============================================================================

function initFloatingIcons() {
  const icons = document.querySelectorAll('.floating-icon');
  
  icons.forEach((icon: Element, index: number) => {
    gsap.to(icon, {
      y: -10,
      duration: 2 + index * 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.2,
    });
  });
}

// ============================================================================
// SET CURRENT YEAR
// ============================================================================

function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}

// ============================================================================
// MAIN ANIMATIONS - EXPLOSIVE WOW FACTOR!
// ============================================================================

function initAnimations() {
  // Hero section entrance with EXPLOSIVE effects
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power4.out' } });
  
  // Create a stunning starburst effect - split text into characters
  const chars = document.querySelector('.hero-title')?.textContent?.split('') || [];
  const titleEl = document.querySelector('.hero-title');
  if (titleEl) {
    titleEl.innerHTML = chars.map(char => 
      `<span class="char inline-block" style="display: inline-block">${char === ' ' ? '&nbsp;' : char}</span>`,
    ).join('');
  }
  
  heroTimeline
    .from('.char', {
      duration: 1.2,
      opacity: 0,
      scale: 0,
      y: -100,
      rotationX: -180,
      transformOrigin: '50% 50%',
      stagger: {
        amount: 0.8,
        from: 'random',
      },
      ease: 'elastic.out(1, 0.5)',
    })
    .from('.hero-title', {
      duration: 1.5,
      backgroundPosition: '200% center',
      ease: 'power2.out',
    }, '-=1')
    .from('.hero-subtitle', {
      duration: 1,
      y: 50,
      opacity: 0,
      rotationY: 90,
      transformOrigin: 'left center',
      ease: 'back.out(2)',
    }, '-=0.8')
    .from('.hero-description', {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      filter: 'blur(20px)',
      ease: 'expo.out',
    }, '-=0.6')
    .fromTo('.hero-buttons > *', {
      y: 100,
      opacity: 0,
      scale: 0,
      rotation: 360,
    }, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      stagger: 0.15,
      ease: 'back.out(3)',
    }, '-=0.6')
    .from('.hero-scroll-indicator', {
      duration: 1,
      opacity: 0,
      y: -50,
      scale: 0,
      rotation: 180,
      ease: 'elastic.out(1, 0.3)',
    }, '-=0.4');

  // Scroll-triggered sections
  (gsap.utils.toArray('.animate-section') as Element[]).forEach((section: Element) => {
    gsap.fromTo(section, {
      y: 100,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
  });

  // Achievement cards with INSANE 3D effect
  (gsap.utils.toArray('.achievement-card') as Element[]).forEach((card: Element, index: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
    
    tl.fromTo(card, {
      y: 150,
      opacity: 0,
      rotationY: index % 2 === 0 ? -180 : 180,
      rotationX: 45,
      scale: 0.3,
      filter: 'blur(20px) brightness(2)',
      transformOrigin: 'center center',
    }, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      ease: 'expo.out',
      delay: index * 0.15,
    })
      .to(card, {
        duration: 0.6,
        boxShadow: '0 0 60px rgba(59, 130, 246, 0.4), 0 0 100px rgba(139, 92, 246, 0.2)',
        ease: 'power2.inOut',
      }, '-=0.6')
      .from(card.querySelectorAll('svg'), {
        duration: 0.8,
        scale: 0,
        rotation: 360,
        ease: 'back.out(2)',
      }, '-=0.8')
      .from(card.querySelectorAll('h3, p, .tech-badge'), {
        duration: 0.6,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: 'power2.out',
      }, '-=0.4');
  });

  // Project cards with SPECTACULAR flip-in effect
  (gsap.utils.toArray('.project-card') as Element[]).forEach((card: Element, index: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
    
    tl.fromTo(card, {
      rotationY: -180,
      rotationX: 45,
      opacity: 0,
      scale: 0,
      z: -500,
      transformOrigin: 'center center',
    }, {
      duration: 1.5,
      rotationY: 0,
      rotationX: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      ease: 'expo.out',
      delay: index * 0.1,
    })
      .to(card, {
        duration: 1,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.3)',
        ease: 'power2.out',
      }, '-=1')
      .from(card.querySelector('div:first-child'), {
        duration: 0.8,
        scale: 1.5,
        rotation: 180,
        opacity: 0,
        ease: 'back.out(2)',
      }, '-=1');
  });

  // Timeline items
  (gsap.utils.toArray('.timeline-item') as Element[]).forEach((item: Element, index: number) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  // Technology badges - simple staggered entrance (no scroll trigger to avoid visibility issues)
  const techBadges = document.querySelectorAll('#technologies .tech-badge');
  if (techBadges.length > 0) {
    gsap.fromTo(techBadges, 
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        duration: 0.5, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#technologies',
          start: 'top 85%',
        },
      },
    );
  }

  // Stats counter animation
  (gsap.utils.toArray('.stat-number') as HTMLElement[]).forEach((stat: HTMLElement) => {
    gsap.from(stat, {
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
      },
      textContent: '0',
      duration: 2,
      snap: { textContent: 1 },
      ease: 'power1.out',
      onUpdate: function() {
        const currentValue = parseFloat(stat.textContent || '0');
        stat.textContent = Math.ceil(currentValue).toString();
      },
    });
  });

  // Parallax scrolling for hero section
  const heroSection = document.querySelector('section');
  if (heroSection) {
    gsap.to(heroSection, {
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: () => -ScrollTrigger.maxScroll(window) * 0.3,
      ease: 'none',
    });
  }
}

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href!);
      if (target) {
        gsap.to(window, {
          duration: 0.6,
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          ease: 'power2.out',
        });
      }
    });
  });
}

// ============================================================================
// NAVIGATION
// ============================================================================

function initNavigation() {
  const nav = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class for background
    if (currentScroll > 50) {
      nav?.classList.add('nav-scrolled');
    } else {
      nav?.classList.remove('nav-scrolled');
    }

    if (currentScroll <= 0) {
      nav?.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > lastScroll && !nav?.classList.contains('scroll-down')) {
      nav?.classList.remove('scroll-up');
      nav?.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav?.classList.contains('scroll-down')) {
      nav?.classList.remove('scroll-down');
      nav?.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
  });

  // Mobile menu toggle - FIXED
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu .btn-primary');

  function openMobileMenu() {
    mobileMenu?.classList.remove('translate-x-full');
    mobileMenuOverlay?.classList.remove('opacity-0', 'invisible');
    mobileMenuOverlay?.classList.add('opacity-100', 'visible');
    menuIcon?.classList.add('hidden');
    closeIcon?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu?.classList.add('translate-x-full');
    mobileMenuOverlay?.classList.add('opacity-0', 'invisible');
    mobileMenuOverlay?.classList.remove('opacity-100', 'visible');
    menuIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  menuButton?.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('translate-x-full')) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });

  mobileMenuOverlay?.addEventListener('click', closeMobileMenu);
  
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// ============================================================================
// CONTACT FORM
// ============================================================================

function initContactForm() {
  const form = document.querySelector('#contact-form') as HTMLFormElement;
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Data would be collected here for API integration
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton?.textContent || 'Send Message';
    
    // Show loading state
    if (submitButton) {
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
    }
    
    // Simulate sending (replace with actual API call in production)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Form submitted successfully (data would be sent to API)
    
    // Show success state
    if (submitButton) {
      submitButton.textContent = '✓ Message Sent!';
      submitButton.style.background = 'linear-gradient(to right, #22c55e, #16a34a)';
    }
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      if (submitButton) {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.background = '';
      }
    }, 2500);
  });
}

// ============================================================================
// PARTICLE SYSTEM
// ============================================================================

function initParticles() {
  // Reduced particle count for better performance
  const particleCount = window.innerWidth < 768 ? 15 : 30;
  const container = document.querySelector('.particle-container');
  
  if (!container) return;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    const colors = ['rgba(59, 130, 246, 0.5)', 'rgba(139, 92, 246, 0.5)', 'rgba(236, 72, 153, 0.5)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
    
    gsap.to(particle, {
      y: `+=${Math.random() * 200 - 100}`,
      x: `+=${Math.random() * 200 - 100}`,
      opacity: Math.random() * 0.5,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
}

// ============================================================================
// 3D CARD TILT - ENHANCED VERSION
// ============================================================================

function init3DCards() {
  // Add card-3d class to achievement and project cards
  document.querySelectorAll('.achievement-card, .project-card').forEach((card) => {
    card.classList.add('card-3d');
  });
  
  const cards = document.querySelectorAll('.card-3d');
  
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const mouseEvent = e as MouseEvent;
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * 15;
      const rotateY = ((centerX - x) / centerX) * -15;
      
      // Calculate distance from center for depth effect
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
      const depth = (distance / maxDistance) * 20;
      
      gsap.to(card, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        z: depth,
        transformPerspective: 1000,
        scale: 1.05,
        boxShadow: `${rotateY * 2}px ${rotateX * 2}px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(59, 130, 246, 0.4)`,
        ease: 'power2.out',
      });
      
      // Add spotlight effect
      const spotlight = card.querySelector('.card-spotlight') || createSpotlight(card);
      gsap.to(spotlight, {
        duration: 0.3,
        x: x - 100,
        y: y - 100,
        opacity: 0.3,
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.6,
        rotationX: 0,
        rotationY: 0,
        z: 0,
        scale: 1,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        ease: 'elastic.out(1, 0.3)',
      });
      
      const spotlight = card.querySelector('.card-spotlight');
      if (spotlight) {
        gsap.to(spotlight, {
          duration: 0.3,
          opacity: 0,
        });
      }
    });
  });
  
  function createSpotlight(card: Element) {
    const spotlight = document.createElement('div');
    spotlight.className = 'card-spotlight';
    spotlight.style.cssText = `
      position: absolute;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      mix-blend-mode: overlay;
    `;
    card.appendChild(spotlight);
    return spotlight;
  }
}

// ============================================================================
// CUSTOM CURSOR
// ============================================================================

function initCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid rgba(59, 130, 246, 0.5);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s, background 0.2s;
  `;
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.style.cssText = `
    width: 4px;
    height: 4px;
    background: rgba(59, 130, 246, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
  `;
  document.body.appendChild(cursorDot);

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      duration: 0.3,
      x: e.clientX - 10,
      y: e.clientY - 10,
    });
    
    gsap.to(cursorDot, {
      duration: 0.1,
      x: e.clientX - 2,
      y: e.clientY - 2,
    });
  });

  document.querySelectorAll('a, button, .card-3d').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        scale: 1.5,
        background: 'rgba(59, 130, 246, 0.1)',
      });
    });
    
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        scale: 1,
        background: 'transparent',
      });
    });
  });
}

// ============================================================================
// TYPING EFFECT
// ============================================================================

function initTypingEffect() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (!subtitle) return;

  const text = subtitle.textContent || '';
  subtitle.textContent = '';

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 1500);
}

// ============================================================================
// MAGNETIC BUTTONS - NEW WOW FEATURE!
// ============================================================================

function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  
  buttons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const mouseEvent = e as MouseEvent;
      const rect = (button as HTMLElement).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.15,
        ease: 'power2.out',
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
    
    // Add ripple effect on click
    button.addEventListener('click', (e) => {
      const mouseEvent = e as MouseEvent;
      const ripple = document.createElement('span');
      const rect = (button as HTMLElement).getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = mouseEvent.clientX - rect.left - size / 2;
      const y = mouseEvent.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;
      
      (button as HTMLElement).style.position = 'relative';
      (button as HTMLElement).style.overflow = 'hidden';
      button.appendChild(ripple);
      
      gsap.fromTo(ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 2,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        },
      );
    });
  });
}

// ============================================================================
// TEXT REVEAL - DISABLED (was breaking about section headings)
// ============================================================================

function initTextReveal() {
  // Disabled - the text splitting was breaking headings that contain emoji spans
  // Even with filtering, GSAP animations were affecting child elements
  return;
}

// ============================================================================
// WAVE EFFECT - NEW WOW FEATURE!
// ============================================================================

function initWaveEffect() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9998;
    mix-blend-mode: screen;
    opacity: 0.3;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const waves: Array<{x: number, y: number, radius: number, opacity: number}> = [];
  let lastWaveTime = 0;
  const waveThrottle = 150; // Only create a wave every 150ms
  
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastWaveTime < waveThrottle) return;
    
    lastWaveTime = now;
    waves.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,
      opacity: 1,
    });
  });
  
  function animateWaves() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    
    waves.forEach((wave, index) => {
      wave.radius += 3;
      wave.opacity -= 0.015;
      
      if (wave.opacity <= 0) {
        waves.splice(index, 1);
        return;
      }
      
      ctx!.beginPath();
      ctx!.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx!.strokeStyle = `rgba(59, 130, 246, ${wave.opacity})`;
      ctx!.lineWidth = 2;
      ctx!.stroke();
    });
    
    requestAnimationFrame(animateWaves);
  }
  
  animateWaves();
}

// ============================================================================
// GLITCH EFFECT - NEW WOW FEATURE!
// ============================================================================

function initGlitchEffect() {
  const glitchElements = document.querySelectorAll('.gradient-text');
  
  glitchElements.forEach((el: Element) => {
    setInterval(() => {
      // Reduced frequency from 0.95 to 0.98 for better performance
      if (Math.random() > 0.98) {
        const tl = gsap.timeline();
        
        tl.to(el, {
          duration: 0.05,
          x: -5,
          skewX: 10,
          filter: 'hue-rotate(90deg)',
        })
          .to(el, {
            duration: 0.05,
            x: 5,
            skewX: -10,
            filter: 'hue-rotate(-90deg)',
          })
          .to(el, {
            duration: 0.05,
            x: 0,
            skewX: 0,
            filter: 'hue-rotate(0deg)',
          });
      }
    }, 100);
  });
}

// ============================================================================
// HOLOGRAPHIC CARDS - NEW WOW FEATURE!
// ============================================================================

function initHolographicCards() {
  const cards = document.querySelectorAll('.glass-card-hover, .achievement-card, .project-card');
  
  cards.forEach((card) => {
    // Create holographic overlay
    const overlay = document.createElement('div');
    overlay.className = 'holographic-overlay';
    overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 0, 255, 0) 0%,
        rgba(0, 255, 255, 0.1) 25%,
        rgba(255, 255, 0, 0.1) 50%,
        rgba(0, 255, 255, 0.1) 75%,
        rgba(255, 0, 255, 0) 100%
      );
      background-size: 200% 200%;
      opacity: 0;
      border-radius: inherit;
      pointer-events: none;
      transition: opacity 0.3s;
    `;
    
    (card as HTMLElement).style.position = 'relative';
    (card as HTMLElement).style.overflow = 'hidden';
    card.appendChild(overlay);
    
    card.addEventListener('mouseenter', () => {
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
      });
      
      gsap.to(overlay, {
        backgroundPosition: '200% 200%',
        duration: 3,
        ease: 'none',
        repeat: -1,
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
      });
    });
    
    // Add sparkle particles on hover (optimized frequency)
    card.addEventListener('mousemove', (e) => {
      const mouseEvent = e as MouseEvent;
      if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        sparkle.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        `;
        
        card.appendChild(sparkle);
        
        gsap.to(sparkle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => sparkle.remove(),
        });
      }
    });
  });
}

// Export for use in other modules if needed
export {
  initAnimations,
  initSmoothScroll,
  initNavigation,
  initContactForm,
  initParticles,
  init3DCards,
  initCursor,
  initTypingEffect,
  initMagneticButtons,
  initTextReveal,
  initWaveEffect,
  initGlitchEffect,
  initHolographicCards,
  initPreloader,
  initScrollProgress,
  initBackToTop,
  initFloatingIcons,
  initProjectStatusCheck};