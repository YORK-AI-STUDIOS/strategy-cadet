// Auto-scale a 1920×1080 .sc-slide to fit the viewport, letterboxed.
(function () {
  function scale() {
    var slide = document.querySelector('.sc-slide');
    if (!slide) return;
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    var left = (window.innerWidth - 1920 * s) / 2;
    var top = (window.innerHeight - 1080 * s) / 2;
    slide.style.transform = 'translate(' + left + 'px,' + top + 'px) scale(' + s + ')';
  }
  window.addEventListener('resize', scale);
  document.addEventListener('DOMContentLoaded', scale);
  window.addEventListener('load', scale);
  scale();
})();
