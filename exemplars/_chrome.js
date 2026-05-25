// Injects mandatory chrome (Strategy Cadet logo top-right, © line bottom-left,
// page number bottom-right) into every .sc-slide.
//
// Usage in slide HTML:
//   <script src="_chrome.js" data-page="07" data-of="78"></script>
//
// Pass data-york="true" to also render the York Studios mark to the right of
// the © line on the bottom-left (back cover only).
//
// On a gradient slide, mark the section as <section class="sc-slide gradient">.
// CSS in slide-base.css handles the white/blue logo swap and white footer text.
//
// Embed mode: append ?chrome=off to the slide URL to suppress chrome injection
// entirely. Used when the slide is rendered inside a viewer chassis that
// provides its own topbar/footer (logos, page count, copyright). Default is
// chrome-on so standalone direct-open of a slide keeps the mandatory chrome.
(function () {
  function chromeSuppressed() {
    try {
      return new URLSearchParams(window.location.search).get('chrome') === 'off';
    } catch (e) { return false; }
  }
  function inject() {
    if (chromeSuppressed()) return;
    var slide = document.querySelector('.sc-slide');
    if (!slide) return;
    if (slide.dataset.chromeInjected === 'true') return;
    slide.dataset.chromeInjected = 'true';

    var script = document.currentScript ||
                 document.querySelector('script[src*="_chrome.js"]');
    var page = (script && script.dataset.page) || '';
    var of   = (script && script.dataset.of)   || '';
    var withYork = script && script.dataset.york === 'true';

    var html = '';

    // Top-right Cadet logo (88px high, swapped white/blue by CSS).
    html += '<div class="sc-chrome-cadet">';
    html += '  <img class="on-white" src="../assets/logos/Strategy-Cadet-logo-blue.png"  alt="Strategy Cadet">';
    html += '  <img class="on-dark"  src="../assets/logos/Strategy-Cadet-logo-white.png" alt="Strategy Cadet">';
    html += '</div>';

    // Bottom-left © line, optionally with York Studios logo on back cover.
    html += '<div class="sc-chrome-copy">';
    if (withYork) {
      html += '  <span class="sc-chrome-york"><img src="../assets/logos/York-Studios-logo-slogan.png" alt="York Studios"></span>';
    }
    html += '  <span class="sc-copy-text">© 2026 York Studios. All rights reserved.</span>';
    html += '</div>';

    // Bottom-right page number only.
    if (page) {
      html += '<div class="sc-chrome-footer">';
      html += '  <span class="sc-page">' + page + (of ? ' / ' + of : '') + '</span>';
      html += '</div>';
    }

    slide.insertAdjacentHTML('beforeend', html);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
