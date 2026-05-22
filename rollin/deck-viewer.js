// Strategy Cadet deck viewer — shared logic.
// Expects window.DECK_CONFIG = { base: '...', slides: [...] } before this script runs.
(function () {
  'use strict';

  const cfg = window.DECK_CONFIG;
  if (!cfg || !cfg.slides || !cfg.slides.length) {
    console.error('[deck-viewer] DECK_CONFIG missing. Aborting.');
    return;
  }
  const BASE = cfg.base || '';
  const SLIDES = cfg.slides;

  let idx = 0;
  const frame = document.getElementById('slideFrame');
  const curIdx = document.getElementById('curIdx');
  const titleEl = document.getElementById('slideTitle');
  const bar = document.getElementById('progressBar');
  const gridOverlay = document.getElementById('gridOverlay');
  const chrome = document.getElementById('chrome');
  const progress = document.getElementById('progress');
  const helpTag = document.getElementById('helpTag');
  const deckTag = document.getElementById('deckTag');
  const totalEl = document.getElementById('totalSlides');

  if (totalEl) totalEl.textContent = '/ ' + SLIDES.length;

  function go(n) {
    idx = Math.max(0, Math.min(SLIDES.length - 1, n));
    const s = SLIDES[idx];
    frame.src = BASE + s.file;
    curIdx.textContent = idx + 1;
    titleEl.textContent = s.title;
    bar.style.width = ((idx + 1) / SLIDES.length * 100).toFixed(1) + '%';
    document.getElementById('prev').disabled = idx === 0;
    document.getElementById('next').disabled = idx === SLIDES.length - 1;
    document.querySelectorAll('.thumb').forEach((el, i) => el.classList.toggle('active', i === idx));
    // Re-focus the document so keyboard nav keeps working.
    setTimeout(() => window.focus(), 50);
  }
  function next() { go(idx + 1); }
  function prev() { go(idx - 1); }
  function toggleFull() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen?.() || Promise.resolve()).catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }
  function toggleGrid() { gridOverlay.classList.toggle('open'); }
  function closeGrid() { gridOverlay.classList.remove('open'); }

  // Build grid thumbnails
  const grid = document.getElementById('thumbGrid');
  SLIDES.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'thumb' + (i === 0 ? ' active' : '');
    el.innerHTML =
      '<div class="frame-wrap"><iframe src="' + BASE + s.file + '" loading="lazy" tabindex="-1"></iframe></div>' +
      '<div class="meta">' +
        '<span class="n">' + String(i+1).padStart(2,'0') + '</span>' +
        '<span>' + s.title + '</span>' +
        '<span class="label">' + s.label + '</span>' +
      '</div>';
    el.addEventListener('click', () => { go(i); closeGrid(); });
    grid.appendChild(el);
  });

  // Wire button clicks. Use mousedown to fire before any focus shifts.
  function bindBtn(id, fn) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); fn(); });
  }
  bindBtn('prev', prev);
  bindBtn('next', next);
  bindBtn('full', toggleFull);
  bindBtn('grid', toggleGrid);
  bindBtn('gridClose', closeGrid);

  // Iframe shield: capture clicks on the slide area so iframe never gets focus.
  // Click-through to chrome is still enabled because shield is BELOW chrome (z-index 2 vs 100).
  const shield = document.getElementById('iframeShield');
  if (shield) {
    shield.addEventListener('click', (e) => {
      // Click on slide area = advance to next slide (presenter-style).
      e.preventDefault();
      window.focus();
      next();
    });
  }

  // Prevent iframe from stealing focus on load
  if (frame) {
    frame.setAttribute('tabindex', '-1');
    frame.addEventListener('load', () => {
      // Restore focus to parent so keyboard keeps working.
      window.focus();
    });
  }

  // Keyboard — attach to window, not document, more reliable
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (gridOverlay.classList.contains('open')) {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'g') { closeGrid(); e.preventDefault(); }
      return;
    }
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        next(); e.preventDefault(); break;
      case 'ArrowLeft':
      case 'PageUp':
        prev(); e.preventDefault(); break;
      case 'Home':
        go(0); e.preventDefault(); break;
      case 'End':
        go(SLIDES.length - 1); e.preventDefault(); break;
      case 'f': case 'F':
        toggleFull(); e.preventDefault(); break;
      case 'g': case 'G':
        toggleGrid(); e.preventDefault(); break;
      case 'Escape':
        if (document.fullscreenElement) document.exitFullscreen();
        break;
    }
  });

  // Force focus back to window if anything tries to steal it
  window.addEventListener('blur', () => {
    setTimeout(() => window.focus(), 100);
  });

  // Click anywhere outside iframe = restore parent focus
  document.addEventListener('mousedown', () => window.focus(), true);

  // Mouse-idle chrome hide
  let idleTimer;
  function showChrome() {
    chrome.classList.remove('hidden');
    progress.classList.remove('hidden');
    helpTag.classList.remove('hidden');
    if (deckTag) deckTag.classList.remove('hidden');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      chrome.classList.add('hidden');
      progress.classList.add('hidden');
      helpTag.classList.add('hidden');
      if (deckTag) deckTag.classList.add('hidden');
    }, 4000);
  }
  document.addEventListener('mousemove', showChrome);
  showChrome();

  // Init
  go(0);
  window.focus();
})();
