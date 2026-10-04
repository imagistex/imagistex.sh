(function () {
  var leaf = document.querySelector('.leaf');
  if (!leaf) return;
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function openEntry(id, focus) {
    var entry = id ? document.getElementById(id) : null;
    if (!entry || !leaf.contains(entry)) return;
    if (entry.tagName === 'DETAILS') entry.open = true;
    entry.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'start' });
    var summary = entry.querySelector('summary');
    if (focus && summary) summary.focus({ preventScroll: true });
  }
  function named(hash) {
    var id = (hash || '').slice(1);
    try { id = decodeURIComponent(id); } catch (error) {}
    return id;
  }
  leaf.addEventListener('click', function (event) {
    var link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
    if (link) openEntry(named(link.getAttribute('href')), false);
  });
  function fromHash() {
    var id = named(window.location.hash);
    if (id) openEntry(id, false);
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();

(function () {
  function openRecord() {
    var id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    var el = document.getElementById(id);
    if (!el) return;
    var parent = el.parentElement;
    while (parent) { if (parent.tagName === 'DETAILS') parent.open = true; parent = parent.parentElement; }
    if (location.hash) requestAnimationFrame(function () { el.scrollIntoView({block:'start'}); });
  }
  addEventListener('hashchange', openRecord); openRecord();
})();
