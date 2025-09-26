// Portfolio JavaScript - Filip Szwerluga

// Tailwind configuration
const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                'primary': '#1e40af',
                'secondary': '#7c3aed',
                'accent': '#f59e0b',
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow': {
                    'from': { 'box-shadow': '0 0 20px #7c3aed' },
                    'to': { 'box-shadow': '0 0 30px #7c3aed, 0 0 40px #7c3aed' },
                },
                'fadeInUp': {
                    'to': {
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    }
                }
            }
        }
    }
};

// Apply Tailwind configuration
if (typeof tailwind !== 'undefined') {
    tailwind.config = tailwindConfig;
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Main initialization function
function initializePortfolio() {
    // Use requestIdleCallback for non-critical initializations
    if (window.requestIdleCallback) {
        requestIdleCallback(() => {
            setupParticleAnimations();
            setupCardHoverEffects();
            setupTypingEffect();
        });
        
        // Critical initializations immediately
        setupSmoothScrolling();
        setupNavigationEffects();
        setupScrollAnimations();
    } else {
        // Fallback for browsers without requestIdleCallback
        setupSmoothScrolling();
        setupNavigationEffects();
        setupScrollAnimations();
        setTimeout(() => {
            setupParticleAnimations();
            setupCardHoverEffects();
            setupTypingEffect();
        }, 100);
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation background effects on scroll
function setupNavigationEffects() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}

// Scroll-triggered animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe achievement cards
    document.querySelectorAll('.achievement-card').forEach(card => {
        observer.observe(card);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}

// Enhanced particle animations
function setupParticleAnimations() {
    const particles = document.querySelectorAll('.floating-particles .particle');
    
    particles.forEach((particle, index) => {
        // Add random delays and speeds
        const delay = Math.random() * 2;
        const duration = 6 + Math.random() * 4;
        
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Add random positioning variations
        const randomX = Math.random() * 10 - 5;
        const randomY = Math.random() * 10 - 5;
        
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

// Card hover effects and interactions
function setupCardHoverEffects() {
    // Achievement cards
    document.querySelectorAll('.achievement-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Project cards with click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            // Add your project link logic here
            console.log('Project card clicked:', this.querySelector('h3').textContent);
        });

        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.fa-external-link-alt');
            if (icon) {
                icon.style.transform = 'translate(2px, -2px)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.fa-external-link-alt');
            if (icon) {
                icon.style.transform = 'translate(0, 0)';
            }
        });
    });

    // Social link hover effects
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });

        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Typing effect for the hero section
function setupTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Utility function for smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// Add scroll listener for reveal animations
window.addEventListener('scroll', revealOnScroll);

// Parallax effect for background elements
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Initialize parallax effect
setupParallaxEffect();

// Contact form handler (if you add a contact form later)
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Contact form submitted');
        });
    }
}

// Theme toggle functionality (for future dark/light mode)
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', 
                document.body.classList.contains('light-mode') ? 'light' : 'dark'
            );
        });
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedReveal = debounce(revealOnScroll, 10);
window.addEventListener('scroll', debouncedReveal);

// Loading screen handler
function handleLoadingScreen() {
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
        
        // Trigger initial animations
        document.body.classList.add('loaded');
    });
}

// Initialize loading screen
handleLoadingScreen();

// Export functions for potential external use
window.PortfolioJS = {
    initializePortfolio,
    setupSmoothScrolling,
    setupNavigationEffects,
    setupScrollAnimations,
    setupParticleAnimations,
    setupCardHoverEffects,
    setupTypingEffect,
    revealOnScroll,
    debounce
};