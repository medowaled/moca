/**
 * MOCHA CAFE - Main JavaScript
 * Author: Eng. Ahmed Walid & Eng. Islam Saad
 */

'use strict';

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Smooth trail with RAF
function animateTrail() {
  trailX += (mouseX - trailX) * 0.12;
  trailY += (mouseY - trailY) * 0.12;
  trail.style.left = trailX + 'px';
  trail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Expand cursor on interactive elements
const interactives = document.querySelectorAll('a, button, .menu-card, .cat-tab, .value-card, .contact-card');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('expanded');
    trail.classList.add('expanded');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('expanded');
    trail.classList.remove('expanded');
  });
});

// Hide cursor on touch devices
if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  trail.style.display  = 'none';
  document.body.style.cursor = 'auto';
}

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Scrolled class for navbar
  if (scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top visibility
  if (backToTop) {
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}, { passive: true });

// Back to top click
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
    } else {
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.replace('fa-bars', 'fa-xmark');
    }
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
    });
  });
}

// ============================================
// HERO SLIDER
// ============================================
const heroSlider = document.getElementById('hero-slider');
if (heroSlider) {
  const slides = heroSlider.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  let currentSlide = 0;
  let sliderTimer = null;
  const SLIDE_DURATION = 5500;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('exit');
    dots[currentSlide]?.classList.remove('active');

    setTimeout(() => {
      slides[currentSlide]?.classList.remove('exit');
    }, 1200);

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function startAutoplay() {
    sliderTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, SLIDE_DURATION);
  }

  function resetAutoplay() {
    clearInterval(sliderTimer);
    startAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoplay(); });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoplay(); });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); resetAutoplay(); });
  });

  startAutoplay();

  // Touch/Swipe support
  let touchStartX = 0;
  heroSlider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  heroSlider.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      goToSlide(delta > 0 ? currentSlide + 1 : currentSlide - 1);
      resetAutoplay();
    }
  }, { passive: true });
}

// ============================================
// TESTIMONIAL SLIDER
// ============================================
const tTrack = document.getElementById('testimonial-track');
if (tTrack) {
  const tCards = tTrack.querySelectorAll('.testimonial-card');
  const tDots = document.querySelectorAll('.t-dot');
  const tPrev = document.getElementById('t-prev');
  const tNext = document.getElementById('t-next');

  let tCurrent = 0;
  let tTimer = null;
  const T_DURATION = 5000;

  function getCardWidth() {
    if (!tCards[0]) return 0;
    return tCards[0].offsetWidth + 24; // card width + margin
  }

  function goToTestimonial(index) {
    tDots[tCurrent]?.classList.remove('active');
    tCurrent = (index + tCards.length) % tCards.length;
    tTrack.style.transform = `translateX(calc(-${tCurrent * 100}% - ${tCurrent * 24}px))`;
    tDots[tCurrent]?.classList.add('active');
  }

  function startTAutoplay() {
    tTimer = setInterval(() => goToTestimonial(tCurrent + 1), T_DURATION);
  }
  function resetTAutoplay() {
    clearInterval(tTimer);
    startTAutoplay();
  }

  tPrev?.addEventListener('click', () => { goToTestimonial(tCurrent - 1); resetTAutoplay(); });
  tNext?.addEventListener('click', () => { goToTestimonial(tCurrent + 1); resetTAutoplay(); });

  tDots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToTestimonial(i); resetTAutoplay(); });
  });

  startTAutoplay();

  // Touch support
  let tTouchStart = 0;
  tTrack.addEventListener('touchstart', e => { tTouchStart = e.touches[0].clientX; }, { passive: true });
  tTrack.addEventListener('touchend', e => {
    const delta = tTouchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      goToTestimonial(delta > 0 ? tCurrent + 1 : tCurrent - 1);
      resetTAutoplay();
    }
  }, { passive: true });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ============================================
// ANIMATED COUNTER (STATS)
// ============================================
const statsNums = document.querySelectorAll('.stats-num');

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

statsNums.forEach(el => counterObserver.observe(el));

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = '#C9A96E';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ============================================
// PARALLAX ON HERO SLIDES (subtle)
// ============================================
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  const activeSlide = document.querySelector('.slide.active');
  if (activeSlide) {
    activeSlide.style.transform = `scale(1) translateY(${scrolled * 0.2}px)`;
  }
}, { passive: true });

console.log('%c☕ Mocha Cafe — Crafted with love', 'color: #C9A96E; font-size: 14px; font-weight: bold;');
