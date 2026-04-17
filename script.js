// ============================================
// HEYLA COACHING – JavaScript
// ============================================

// ===== INSTAGRAM CONSENT MODAL =====
(function () {
  // Modal-HTML dynamisch erstellen
  const modal = document.createElement('div');
  modal.id = 'ig-modal';
  modal.className = 'ig-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'ig-modal-title');
  modal.innerHTML = `
    <div class="ig-modal__box">
      <h2 class="ig-modal__title" id="ig-modal-title">Weiter zu Instagram</h2>
      <p class="ig-modal__text">
        Du verlässt jetzt diese Website. Beim Besuch von Instagram gelten die
        Datenschutzbestimmungen von Meta Platforms Ireland Ltd.
      </p>
      <div class="ig-modal__buttons">
        <button id="ig-cancel" class="btn btn--outline">Abbrechen</button>
        <button id="ig-confirm" class="btn btn--primary">Weiter zu Instagram</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  let pendingHref = '';

  function openModal(href) {
    pendingHref = href;
    modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    document.getElementById('ig-cancel').focus();
  }

  function closeModal() {
    modal.classList.remove('is-visible');
    document.body.style.overflow = '';
    pendingHref = '';
  }

  // Links abfangen
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-instagram-consent]');
    if (!link) return;
    e.preventDefault();
    openModal(link.getAttribute('href'));
  });

  document.getElementById('ig-cancel').addEventListener('click', closeModal);

  document.getElementById('ig-confirm').addEventListener('click', function () {
    window.open(pendingHref, '_blank', 'noopener,noreferrer');
    closeModal();
  });

  // Overlay-Klick schließt Modal
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Escape-Taste schließt Modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-visible')) closeModal();
  });
})();

// ===== HEADER: Scroll-Effekt =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });


// ===== BURGER MENÜ =====
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Nav-Links schließen Menü auf Mobile
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  });
});

// Außerhalb klicken schließt Menü
document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && nav.classList.contains('open')) {
    burger.classList.remove('open');
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }
});

// Escape-Taste schließt Menü
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    burger.classList.remove('open');
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
    burger.focus();
  }
});


// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
  '.card, .step, .usp, .faq__item, .intro__text, .ueber__content'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Gestaffelte Animation
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});
