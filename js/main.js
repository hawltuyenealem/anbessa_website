(function () {
  'use strict';

  const HTML = document.documentElement;
  const HEADER = document.getElementById('header');
  const NAV = document.getElementById('nav');
  const NAV_TOGGLE = document.getElementById('navToggle');
  const THEME_TOGGLE = document.getElementById('themeToggle');
  const CONTACT_FORM = document.getElementById('contactForm');
  const YEAR_EL = document.getElementById('year');
  const THEME_KEY = 'anbessa-theme';

  // ----- Theme (dark / light) -----
  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }
  function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    HTML.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }
  function initTheme() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  initTheme();
  if (THEME_TOGGLE) {
    THEME_TOGGLE.addEventListener('click', function () {
      var current = HTML.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ----- Header scroll effect -----
  function onScroll() {
    if (window.scrollY > 60) {
      HEADER.classList.add('scrolled');
    } else {
      HEADER.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Mobile nav toggle -----
  if (NAV_TOGGLE && NAV) {
    NAV_TOGGLE.addEventListener('click', function () {
      NAV.classList.toggle('is-open');
      NAV_TOGGLE.classList.toggle('is-open');
      document.body.style.overflow = NAV.classList.contains('is-open') ? 'hidden' : '';
    });
    NAV.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        NAV.classList.remove('is-open');
        NAV_TOGGLE.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Scroll reveal -----
  const revealEls = document.querySelectorAll('.section-head, .about-grid, .about-content, .about-visual, .value-card, .product-card, .contact-grid, .contact-info, .contact-form-wrap');
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(function (el) {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ----- Contact form -----
  if (CONTACT_FORM) {
    CONTACT_FORM.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value.trim();
      var message = document.getElementById('message').value.trim();
      if (!name || !email || !message) return;
      var mailto = 'mailto:Lionteamtactical@gmail.com?subject=' + encodeURIComponent(subject || 'Website inquiry from ' + name) + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.location.href = mailto;
    });
  }

  // ----- Footer year -----
  if (YEAR_EL) {
    YEAR_EL.textContent = new Date().getFullYear();
  }
})();
