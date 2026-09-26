/* ThunderStudy CA — shared footer loader.
   Fetches the single footer.html partial and injects it into
   <div id="site-footer"></div> so the footer markup lives in one
   place instead of being duplicated on every page. */
(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  fetch('/ca/footer.html')
    .then(function (res) {
      if (!res.ok) throw new Error('footer fetch failed: ' + res.status);
      return res.text();
    })
    .then(function (html) {
      mount.innerHTML = html;
    })
    .catch(function () {
      /* Fail quietly with a minimal inline fallback so the page
         never ships a broken/empty footer if the fetch fails
         (e.g. opened directly from the filesystem). */
      mount.innerHTML =
        '<footer><p class="fcopy">&copy; 2025 Thunder &middot; by wondermayank</p></footer>';
    });
})();
