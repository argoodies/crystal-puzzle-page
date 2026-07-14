(function () {
  function apply(l) {
    var en = l === 'en';
    document.documentElement.classList.toggle('lang-en-active', en);
    document.documentElement.setAttribute('lang', en ? 'en' : 'ja');
    document.querySelectorAll('.langbtns button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === l);
    });
  }
  var saved = 'ja';
  try { saved = localStorage.getItem('lang') || 'ja'; } catch (e) {}
  apply(saved);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.langbtns button');
    if (!b) return;
    var l = b.dataset.lang;
    try { localStorage.setItem('lang', l); } catch (e) {}
    apply(l);
  });
})();
