/**
 * PRAGEETH P. CREATIVE PORTFOLIO — NAVIGATION CONTROLLER
 */

class NavigationController {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.menuBtn = document.querySelector('.menu-toggle-btn');
    this.mainNav = document.querySelector('.main-nav');
    this.sections = document.querySelectorAll('section[id]');
    
    this.init();
  }

  init() {
    this.bindScrollEffects();
    this.bindSmoothScroll();
    this.bindMobileMenu();
    this.bindActiveSectionObserver();
  }

  bindScrollEffects() {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        this.header?.classList.add('scrolled');
      } else {
        this.header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          this.closeMobileMenu();

          const headerOffset = 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          history.pushState(null, null, targetId);
        }
      });
    });
  }

  bindMobileMenu() {
    if (!this.menuBtn || !this.mainNav) return;

    this.menuBtn.addEventListener('click', () => {
      const isOpen = this.mainNav.classList.contains('open');
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    // Close on link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Close on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mainNav.classList.contains('open')) {
        this.closeMobileMenu();
      }
    });
  }

  openMobileMenu() {
    this.mainNav.classList.add('open');
    this.menuBtn.classList.add('open');
    this.menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.mainNav.classList.remove('open');
    this.menuBtn.classList.remove('open');
    this.menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  bindActiveSectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '-80px 0px -50% 0px'
    });

    this.sections.forEach(section => observer.observe(section));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioNav = new NavigationController();
});
