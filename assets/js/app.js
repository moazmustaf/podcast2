/**
 * بودكاستك (Podcastak) — Interactive Educational Platform Script
 * Features:
 * - Bilingual AR (RTL) / EN (LTR) engine with localStorage persistence
 * - Dark / Light theme toggle with localStorage persistence
 * - In-site YouTube Embedded Video Player Modal with fallback link
 * - Live search & multi-category lesson filtering across sections
 * - FormSubmit AJAX contact form with validation & spam protection
 * - Accessible mobile drawer, copy-link toasts, and smooth back-to-top
 */

document.addEventListener('DOMContentLoaded', () => {
  const I18N = window.PODCASTAK_I18N || { ar: {}, en: {} };
  let currentLang = localStorage.getItem('podcastak_lang') || 'ar';
  let currentTheme = localStorage.getItem('podcastak_theme') || 'dark';

  const t = (key) => {
    return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.ar && I18N.ar[key]) || key;
  };

  /* ------------------------------------------------------------------------
     1. Toast Notification Helper
     ------------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------------
     2. Theme Manager (Dark / Light Mode)
     ------------------------------------------------------------------------ */
  const applyTheme = (theme, announce = false) => {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('podcastak_theme', currentTheme);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', currentTheme === 'light' ? '#f8fafc' : '#0B0F19');
    }

    if (announce) {
      window.showToast(currentTheme === 'light' ? t('toast_theme_light') : t('toast_theme_dark'));
    }
  };

  applyTheme(currentTheme, false);

  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });
  });

  /* ------------------------------------------------------------------------
     3. Bilingual Language Engine (Arabic RTL <-> English LTR)
     ------------------------------------------------------------------------ */
  // Cache original Arabic content of [data-en] elements once on load
  document.querySelectorAll('[data-en]').forEach((el) => {
    if (!el.hasAttribute('data-ar')) {
      el.setAttribute('data-ar', el.textContent.trim());
    }
  });

  const applyLanguage = (lang, announce = false) => {
    currentLang = lang === 'en' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
    localStorage.setItem('podcastak_lang', currentLang);

    // 1) Translate standard [data-i18n] text elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val && val !== key) {
        if (el.tagName === 'TITLE') {
          document.title = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // 2) Translate [data-i18n-html] elements (containing inline markup)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (val && val !== key) {
        el.innerHTML = val;
      }
    });

    // 3) Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val && val !== key) {
        el.setAttribute('placeholder', val);
      }
    });

    // 4) Translate per-element [data-en] / [data-ar] (cards, articles, books)
    document.querySelectorAll('[data-en]').forEach((el) => {
      const txt = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ar');
      if (txt) {
        el.textContent = txt;
      }
    });

    // 5) Update language toggle buttons
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      const flag = btn.querySelector('.lang-flag');
      const label = btn.querySelector('.lang-label-text');
      if (flag) flag.textContent = t('lang_switch_flag');
      if (label) {
        label.textContent = btn.closest('.mobile-drawer') ? t('lang_switch_full') : t('lang_switch_short');
      }
    });

    // 6) Update dynamically injected elements (Back to top, Modal, Empty state)
    const backBtn = document.querySelector('.back-to-top');
    if (backBtn) backBtn.setAttribute('aria-label', t('back_to_top_aria'));

    updateModalLanguage();
    updateEmptyStateLanguage();

    if (announce) {
      window.showToast(t('toast_lang_changed'));
    }
  };

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar', true);
    });
  });

  /* ------------------------------------------------------------------------
     4. Mobile Drawer Navigation
     ------------------------------------------------------------------------ */
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

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });

    // Close drawer when clicking an in-page anchor link
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('is-open')) closeDrawer();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. In-Site Embedded YouTube Video Player Modal
     ------------------------------------------------------------------------ */
  const extractYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  // Inject Modal DOM once
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.id = 'video-player-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'video-modal-title');
  modal.innerHTML = `
    <div class="video-modal-dialog">
      <div class="video-modal-header">
        <div class="video-modal-meta">
          <span class="video-modal-category" id="video-modal-category"></span>
          <h3 class="video-modal-title" id="video-modal-title"></h3>
        </div>
        <button type="button" class="video-modal-close" id="video-modal-close" aria-label="إغلاق">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="video-player-container">
        <iframe
          id="video-modal-iframe"
          src=""
          title="YouTube Lesson Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-modal-body">
        <p class="video-modal-desc" id="video-modal-desc"></p>
        <div class="video-modal-actions">
          <span class="video-fallback-note" id="video-fallback-note"></span>
          <div class="video-modal-btns">
            <button type="button" class="btn btn-secondary" id="video-modal-copy" style="padding: 0.5rem 1rem; font-size: 0.86rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span id="video-modal-copy-text"></span>
            </button>
            <a href="#" target="_blank" rel="noopener noreferrer" data-external="true" class="btn btn-outline" id="video-modal-fallback" style="padding: 0.5rem 1rem; font-size: 0.86rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              <span id="video-modal-fallback-text"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalIframe = document.getElementById('video-modal-iframe');
  const modalTitle = document.getElementById('video-modal-title');
  const modalCategory = document.getElementById('video-modal-category');
  const modalDesc = document.getElementById('video-modal-desc');
  const modalFallback = document.getElementById('video-modal-fallback');
  const modalCopy = document.getElementById('video-modal-copy');
  const modalCloseBtn = document.getElementById('video-modal-close');

  let activeVideoMeta = null;
  let lastFocusedElement = null;

  function updateModalLanguage() {
    const note = document.getElementById('video-fallback-note');
    const fbTxt = document.getElementById('video-modal-fallback-text');
    const cpTxt = document.getElementById('video-modal-copy-text');
    if (note) note.textContent = t('modal_fallback_note');
    if (fbTxt) fbTxt.textContent = t('modal_open_yt');
    if (cpTxt) cpTxt.textContent = t('modal_copy_link');
    if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', t('modal_close_aria'));

    if (activeVideoMeta && modal.classList.contains('is-open')) {
      modalTitle.textContent = currentLang === 'en' ? (activeVideoMeta.titleEn || activeVideoMeta.titleAr) : activeVideoMeta.titleAr;
      modalDesc.textContent = currentLang === 'en' ? (activeVideoMeta.descEn || activeVideoMeta.descAr) : activeVideoMeta.descAr;
      modalCategory.textContent = currentLang === 'en' ? (activeVideoMeta.catEn || activeVideoMeta.catAr) : activeVideoMeta.catAr;
      modalCategory.style.display = modalCategory.textContent ? '' : 'none';
      modalDesc.style.display = modalDesc.textContent ? '' : 'none';
    }
  }

  const openVideoPlayer = (meta) => {
    if (!meta || !meta.videoId) return;
    lastFocusedElement = document.activeElement;
    activeVideoMeta = meta;

    const title = currentLang === 'en' ? (meta.titleEn || meta.titleAr) : meta.titleAr;
    const desc = currentLang === 'en' ? (meta.descEn || meta.descAr) : meta.descAr;
    const cat = currentLang === 'en' ? (meta.catEn || meta.catAr) : meta.catAr;

    modalTitle.textContent = title || t('brand_name');
    modalDesc.textContent = desc || '';
    modalDesc.style.display = desc ? '' : 'none';
    modalCategory.textContent = cat || '';
    modalCategory.style.display = cat ? '' : 'none';

    const originalUrl = meta.url || `https://www.youtube.com/watch?v=${meta.videoId}`;
    modalFallback.setAttribute('href', originalUrl);
    modalCopy.setAttribute('data-url', originalUrl);

    modalIframe.src = `https://www.youtube.com/embed/${meta.videoId}?autoplay=1&rel=0`;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  };

  const closeVideoPlayer = () => {
    modal.classList.remove('is-open');
    modalIframe.src = '';
    document.body.style.overflow = '';
    activeVideoMeta = null;
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  modalCloseBtn.addEventListener('click', closeVideoPlayer);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoPlayer();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeVideoPlayer();
    }
  });

  modalCopy.addEventListener('click', () => {
    const url = modalCopy.getAttribute('data-url');
    if (url) copyToClipboard(url);
  });

  // Global click delegation for all embedded video triggers
  document.addEventListener('click', (e) => {
    // 1. Handle Share buttons first
    const shareBtn = e.target.closest('.share-btn');
    if (shareBtn) {
      e.preventDefault();
      e.stopPropagation();
      const url = shareBtn.getAttribute('data-url') || window.location.href;
      copyToClipboard(url);
      return;
    }

    // 2. Ignore explicitly external links (e.g. fallback button, channels, books)
    const linkEl = e.target.closest('a, [data-video-trigger]');
    if (!linkEl) return;
    if (linkEl.getAttribute('data-external') === 'true') return;

    const explicitId = linkEl.getAttribute('data-video-id');
    const href = linkEl.getAttribute('href') || linkEl.getAttribute('data-url') || '';
    const videoId = explicitId || extractYouTubeId(href);

    if (!videoId) return;

    // Intercept YouTube lesson link and play inside the website
    e.preventDefault();

    const card = linkEl.closest('.card');
    const sidebarItem = linkEl.closest('.sidebar-item');

    let titleAr = linkEl.getAttribute('data-title-ar') || '';
    let titleEn = linkEl.getAttribute('data-title-en') || '';
    let descAr = linkEl.getAttribute('data-desc-ar') || '';
    let descEn = linkEl.getAttribute('data-desc-en') || '';
    let catAr = linkEl.getAttribute('data-cat-ar') || '';
    let catEn = linkEl.getAttribute('data-cat-en') || '';

    if (card) {
      const titleEl = card.querySelector('.card-title a, .card-title');
      const descEl = card.querySelector('.card-desc');
      const tagEl = card.querySelector('.card-tag');
      if (titleEl) {
        titleAr = titleAr || titleEl.getAttribute('data-ar') || titleEl.textContent.trim();
        titleEn = titleEn || titleEl.getAttribute('data-en') || titleAr;
      }
      if (descEl) {
        descAr = descAr || descEl.getAttribute('data-ar') || descEl.textContent.trim();
        descEn = descEn || descEl.getAttribute('data-en') || descAr;
      }
      if (tagEl) {
        catAr = catAr || tagEl.getAttribute('data-ar') || tagEl.textContent.trim();
        catEn = catEn || tagEl.getAttribute('data-en') || catAr;
      }
    } else if (sidebarItem) {
      const sTitle = sidebarItem.querySelector('.sidebar-item-title');
      if (sTitle) {
        titleAr = titleAr || sTitle.getAttribute('data-ar') || sTitle.textContent.trim();
        titleEn = titleEn || sTitle.getAttribute('data-en') || titleAr;
      }
      catAr = catAr || 'مرجع مختار';
      catEn = catEn || 'Recommended Guide';
    }

    openVideoPlayer({
      videoId,
      url: href || `https://youtu.be/${videoId}`,
      titleAr: titleAr || linkEl.getAttribute('aria-label') || 'درس تعليمي',
      titleEn: titleEn || titleAr || 'Educational Lesson',
      descAr,
      descEn,
      catAr,
      catEn
    });
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => window.showToast(t('toast_copied')))
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      window.showToast(t('toast_copied'));
    } catch (err) {
      window.showToast(t('toast_copy_fail'));
    }
    document.body.removeChild(input);
  }

  /* ------------------------------------------------------------------------
     6. Live Search & Multi-Category Lesson Discovery
     ------------------------------------------------------------------------ */
  const searchInput = document.querySelector('.search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const allCards = Array.from(document.querySelectorAll('.card-grid .card'));
  const contentSections = Array.from(document.querySelectorAll('.content-section'));
  const resultsMeta = document.querySelector('.search-results-meta');
  const resultsCountEl = document.querySelector('.results-count');
  const resetFilterBtn = document.querySelector('.clear-filter-btn');
  const spotlightBanners = Array.from(document.querySelectorAll('.js-hide-on-filter'));

  let globalEmptyState = document.getElementById('global-empty-state');
  if (!globalEmptyState && searchInput && allCards.length > 0) {
    globalEmptyState = document.createElement('div');
    globalEmptyState.id = 'global-empty-state';
    globalEmptyState.className = 'empty-state';
    globalEmptyState.style.display = 'none';
    globalEmptyState.style.marginBottom = '3rem';
    globalEmptyState.innerHTML = `
      <div class="empty-state-icon">🔍</div>
      <h3 class="empty-state-title"></h3>
      <p class="empty-state-desc"></p>
    `;
    const controlsBar = document.querySelector('.controls-bar');
    if (controlsBar && controlsBar.parentNode) {
      controlsBar.parentNode.insertBefore(globalEmptyState, controlsBar.nextSibling);
    }
  }

  function updateEmptyStateLanguage() {
    if (!globalEmptyState) return;
    const h3 = globalEmptyState.querySelector('.empty-state-title');
    const p = globalEmptyState.querySelector('.empty-state-desc');
    if (h3) h3.textContent = t('empty_title');
    if (p) p.textContent = t('empty_desc');
  }

  if (searchInput && allCards.length > 0) {
    let activeCategory = 'all';

    const filterCards = () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      allCards.forEach((card) => {
        // Match against visible text PLUS both Arabic and English cached text
        const combinedText = [
          card.textContent,
          ...Array.from(card.querySelectorAll('[data-ar],[data-en]')).map(
            (el) => `${el.getAttribute('data-ar') || ''} ${el.getAttribute('data-en') || ''}`
          )
        ].join(' ').toLowerCase();

        const categories = (card.getAttribute('data-category') || 'all').split(' ');
        const matchesQuery = query === '' || combinedText.includes(query);
        const matchesCategory = activeCategory === 'all' || categories.includes(activeCategory);

        if (matchesQuery && matchesCategory) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Hide sections with 0 visible cards during active filtering
      const isFiltering = query !== '' || activeCategory !== 'all';
      contentSections.forEach((sec) => {
        const secCards = sec.querySelectorAll('.card');
        if (secCards.length === 0) return;
        const anyVisible = Array.from(secCards).some((c) => c.style.display !== 'none');
        sec.style.display = anyVisible ? '' : 'none';
      });

      spotlightBanners.forEach((banner) => {
        banner.style.display = isFiltering ? 'none' : '';
      });

      if (resultsMeta && resultsCountEl) {
        resultsCountEl.textContent = String(visibleCount);
        resultsMeta.classList.toggle('visible', isFiltering);
      }

      if (globalEmptyState) {
        globalEmptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    };

    searchInput.addEventListener('input', filterCards);

    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        filterPills.forEach((p) => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
        activeCategory = pill.getAttribute('data-filter') || 'all';
        filterCards();
      });
    });

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        searchInput.value = '';
        activeCategory = 'all';
        filterPills.forEach((p) => {
          const isAll = p.getAttribute('data-filter') === 'all';
          p.classList.toggle('active', isAll);
          p.setAttribute('aria-selected', isAll ? 'true' : 'false');
        });
        filterCards();
        searchInput.focus();
      });
    }
  }

  /* ------------------------------------------------------------------------
     7. Contact & Comments Form (comments.html) — FormSubmit AJAX + Fallback
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    const honeyInput = contactForm.querySelector('input[name="_honey"]');
    const nextInput = contactForm.querySelector('input[name="_next"]');
    const errName = document.getElementById('error-name');
    const errEmail = document.getElementById('error-email');
    const errMsg = document.getElementById('error-message');
    const statusBox = document.getElementById('form-status');
    const fallbackBar = document.getElementById('form-fallback-bar');
    const fallbackBtn = document.getElementById('form-fallback-btn');
    const submitBtn = document.getElementById('contact-submit');

    // Keep _next pointing cleanly back to comments.html?sent=1 on HTTP/HTTPS
    if (nextInput && window.location.protocol !== 'file:') {
      nextInput.value = `${window.location.origin}${window.location.pathname}?sent=1`;
    }

    // Show success banner if redirected back from standard FormSubmit fallback
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      statusBox.className = 'form-status success';
      statusBox.textContent = t('form_success_msg');
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
      let valid = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('is-invalid');
        errName.classList.add('visible');
        valid = false;
      } else {
        nameInput.classList.remove('is-invalid');
        errName.classList.remove('visible');
      }

      const emailVal = emailInput.value.trim();
      if (emailVal && !emailRegex.test(emailVal)) {
        emailInput.classList.add('is-invalid');
        errEmail.classList.add('visible');
        valid = false;
      } else {
        emailInput.classList.remove('is-invalid');
        errEmail.classList.remove('visible');
      }

      if (!msgInput.value.trim() || msgInput.value.trim().length < 5) {
        msgInput.classList.add('is-invalid');
        errMsg.classList.add('visible');
        valid = false;
      } else {
        msgInput.classList.remove('is-invalid');
        errMsg.classList.remove('visible');
      }

      return valid;
    };

    [nameInput, emailInput, msgInput].forEach((input) => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) validateForm();
      });
    });

    // Direct HTML POST fallback handler (bypasses AJAX blockers)
    if (fallbackBtn) {
      fallbackBtn.addEventListener('click', () => {
        if (!validateForm()) return;
        // Disable blank optional email input so FormSubmit never tries to validate ""
        if (!emailInput.value.trim()) {
          emailInput.disabled = true;
        }
        contactForm.submit();
      });
    }

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot spam protection
      if (honeyInput && honeyInput.value.trim() !== '') {
        return;
      }

      statusBox.className = 'form-status';
      statusBox.textContent = '';
      if (fallbackBar) fallbackBar.classList.remove('visible');

      if (!validateForm()) return;

      // FormSubmit requires HTTP/HTTPS origin
      if (window.location.protocol === 'file:') {
        statusBox.className = 'form-status warning';
        statusBox.textContent = t('form_error_local');
        return;
      }

      const submitLabel = submitBtn.querySelector('span');
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = t('form_sending');

      try {
        // CRITICAL: Only include `email` when actually provided; FormSubmit rejects non-email strings
        const payload = {
          name: nameInput.value.trim(),
          message: msgInput.value.trim(),
          _subject: 'رسالة جديدة من منصة بودكاستك (Podcastak)',
          _template: 'table',
          _captcha: 'false'
        };
        const emailVal = emailInput.value.trim();
        if (emailVal) {
          payload.email = emailVal;
        }

        const response = await fetch('https://formsubmit.co/ajax/moazaldebawy@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        let result = {};
        try {
          result = await response.json();
        } catch (_) {
          result = {};
        }

        const rawMsg = String(result.message || '').toLowerCase();

        if (response.ok && (result.success === 'true' || result.success === true)) {
          statusBox.className = 'form-status success';
          statusBox.textContent = t('form_success_msg');
          contactForm.reset();
        } else if (rawMsg.includes('activat') || rawMsg.includes('confirm')) {
          statusBox.className = 'form-status warning';
          statusBox.textContent = t('form_activation_msg');
        } else {
          throw new Error(result.message || `HTTP ${response.status}`);
        }
      } catch (err) {
        statusBox.className = 'form-status error';
        statusBox.textContent = t('form_error_generic');
        if (fallbackBar) fallbackBar.classList.add('visible');
      } finally {
        submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = t('form_submit');
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. Back to Top Button
     ------------------------------------------------------------------------ */
  const backToTopBtn = document.createElement('button');
  backToTopBtn.type = 'button';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', t('back_to_top_aria'));
  backToTopBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  `;
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ------------------------------------------------------------------------
     9. Initialize Language State on Load
     ------------------------------------------------------------------------ */
  applyLanguage(currentLang, false);
});
