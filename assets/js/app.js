/**
 * بودكاستك (Podcastak) — Interactive Application Script
 * Features: Mobile drawer, live card search, category filter, toast alerts, smooth interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileClose = document.querySelector('.mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    const openDrawer = () => {
      mobileDrawer.classList.add('is-open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (mobileClose) mobileClose.focus();
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      mobileToggle.focus();
    };

    mobileToggle.addEventListener('click', openDrawer);
    if (mobileClose) mobileClose.addEventListener('click', closeDrawer);

    // Close on backdrop click
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  // 2. Toast Notification Helper
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);

  let toastTimeout;
  window.showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  // 3. Share / Copy Link Handlers
  document.addEventListener('click', (e) => {
    const shareBtn = e.target.closest('.share-btn');
    if (shareBtn) {
      e.preventDefault();
      e.stopPropagation();
      const url = shareBtn.getAttribute('data-url') || window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          window.showToast('تم نسخ الرابط بنجاح! 📋');
        }).catch(() => {
          fallbackCopy(url);
        });
      } else {
        fallbackCopy(url);
      }
    }
  });

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      window.showToast('تم نسخ الرابط بنجاح! 📋');
    } catch (err) {
      window.showToast('تعذر نسخ الرابط تلقائياً');
    }
    document.body.removeChild(input);
  }

  // 4. Live Search and Category Filtering
  const searchInput = document.querySelector('.search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.card-grid .card');
  const cardGrid = document.querySelector('.card-grid');

  if (searchInput && cards.length > 0) {
    let emptyState = document.querySelector('.empty-state');
    if (!emptyState && cardGrid) {
      emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.style.display = 'none';
      emptyState.innerHTML = `
        <div class="empty-state-icon">🔍</div>
        <h3>لم يتم العثور على نتائج</h3>
        <p>جرب البحث بكلمات مختلفة أو إزالة عوامل التصفية.</p>
      `;
      cardGrid.appendChild(emptyState);
    }

    let activeCategory = 'all';

    const filterCards = () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const category = card.getAttribute('data-category') || 'all';

        const matchesQuery = query === '' || text.includes(query);
        const matchesCategory = activeCategory === 'all' || category === activeCategory;

        if (matchesQuery && matchesCategory) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    };

    searchInput.addEventListener('input', filterCards);

    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        filterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-filter') || 'all';
        filterCards();
      });
    });
  }

  // 5. Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'العودة إلى أعلى الصفحة');
  backToTopBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  `;
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 6. Highlight active nav link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
