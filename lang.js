// 双语切换：在 <html> 上切 class，由 CSS 控制显隐（不动内联 display，span/div 都正常）。
(function () {
  function apply(lang) {
    var en = lang === 'en';
    document.documentElement.lang = en ? 'en' : 'zh-Hans';
    document.documentElement.classList.toggle('lang-en-active', en);
    document.querySelectorAll('.langbtns button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('lg-lang', lang); } catch (e) {}
  }
  function initial() {
    try {
      var s = localStorage.getItem('lg-lang');
      if (s === 'en' || s === 'zh') return s;
    } catch (e) {}
    return (navigator.language || '').slice(0, 2).toLowerCase() === 'en' ? 'en' : 'zh';
  }
  window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.langbtns button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.lang); });
    });
    apply(initial());
  });
})();
