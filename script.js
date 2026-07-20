const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const revealElements = document.querySelectorAll('.reveal');

navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
  navToggle.classList.toggle('open');
});

siteNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

revealElements.forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  document.querySelectorAll('.hero-copy, .hero-card, .section-header, .info-card, .skill-card, .contact-card').forEach((item, index) => {
    item.style.transitionDelay = `${index * 75}ms`;
  });
});
