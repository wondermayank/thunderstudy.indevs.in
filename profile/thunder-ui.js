/* ThunderStudy shared header behaviour: theme toggle (light/dark). */
(function () {
  var root = document.documentElement;

  // Apply saved theme early (no flash) if the page hasn't already.
  if (!root.getAttribute('data-theme')) {
    try { root.setAttribute('data-theme', localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'); } catch (e) {}
  }

  function init() {
    var btn = document.getElementById('tuThemeBtn');
    if (!btn) return;
    var sun = btn.querySelector('.tu-icon-sun');
    var moon = btn.querySelector('.tu-icon-moon');

    function sync() {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (sun) sun.style.display = dark ? 'none' : 'block';
      if (moon) moon.style.display = dark ? 'block' : 'none';
    }

    sync();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
