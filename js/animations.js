/**
 * PRAGEETH P. CREATIVE PORTFOLIO — ANIMATION & INTERACTION ENGINE
 */

class AnimationEngine {
  constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    this.initHeroSequence();
    this.observeElements();
    this.initMagneticElements();
  }

  initHeroSequence() {
    if (this.prefersReducedMotion) return;

    // Elements in hero
    const header = document.querySelector('.site-header');
    const heroTitleGroup = document.querySelector('.hero-title-group');
    const heroPortrait = document.querySelector('.hero-portrait-wrapper');
    const bottomBar = document.querySelector('.hero-bottom-bar');

    if (header) header.classList.add('hero-stagger-1');
    if (heroTitleGroup) heroTitleGroup.classList.add('hero-stagger-2');
    if (heroPortrait) heroPortrait.classList.add('hero-stagger-3');
    if (bottomBar) bottomBar.classList.add('hero-stagger-5');
  }

  observeElements() {
    if (this.prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
      observer.observe(el);
    });
  }

  initMagneticElements() {
    if (this.prefersReducedMotion) return;

    const magneticElements = document.querySelectorAll('.hero-cta-btn, .theme-toggle-btn');
    
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioAnimations = new AnimationEngine();
});
