/**
 * PRAGEETH P. CREATIVE PORTFOLIO — MAIN APPLICATION CONTROLLER
 */

class PortfolioApp {
  constructor() {
    this.themeToggleBtn = document.getElementById('theme-toggle');
    this.contactForm = document.getElementById('contact-form');
    this.backToTopBtn = document.getElementById('back-to-top');
    this.yearEl = document.getElementById('current-year');
    
    this.init();
  }

  init() {
    this.initTheme();
    this.initContactForm();
    this.initBackToTop();
    this.initCurrentYear();
  }

  initTheme() {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('prageeth-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.updateThemeButtonState(savedTheme);
    } else {
      // Default is pure deep black monochrome as approved
      document.documentElement.setAttribute('data-theme', 'dark');
      this.updateThemeButtonState('dark');
    }

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('prageeth-theme', newTheme);
        this.updateThemeButtonState(newTheme);
      });
    }
  }

  updateThemeButtonState(theme) {
    if (!this.themeToggleBtn) return;
    const isLight = theme === 'light';
    this.themeToggleBtn.setAttribute('aria-checked', isLight ? 'true' : 'false');
    this.themeToggleBtn.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
  }

  initContactForm() {
    if (!this.contactForm) return;

    this.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = this.contactForm.querySelector('#form-name')?.value.trim();
      const email = this.contactForm.querySelector('#form-email')?.value.trim();
      const message = this.contactForm.querySelector('#form-message')?.value.trim();
      const statusMsg = document.getElementById('form-status');

      if (!name || !email || !message) {
        if (statusMsg) {
          statusMsg.textContent = 'Please fill out all required fields.';
          statusMsg.className = 'form-status-msg active';
          statusMsg.style.borderColor = 'rgba(255, 100, 100, 0.4)';
        }
        return;
      }

      // Simulated successful delivery
      if (statusMsg) {
        statusMsg.textContent = `Thank you, ${name}. Your inquiry has been received. Let's create something meaningful.`;
        statusMsg.className = 'form-status-msg success';
      }

      this.contactForm.reset();

      setTimeout(() => {
        if (statusMsg) {
          statusMsg.className = 'form-status-msg';
        }
      }, 6000);
    });
  }

  initBackToTop() {
    if (!this.backToTopBtn) return;

    this.backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  initCurrentYear() {
    if (this.yearEl) {
      this.yearEl.textContent = new Date().getFullYear();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
