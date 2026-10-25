// Año actual en el pie de página.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Cambio de idioma ES / EN (se recuerda en el navegador).
const root = document.documentElement;
const toggle = document.getElementById('lang-toggle');

function setLang(lang) {
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang);
  if (toggle) toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
setLang(saved === 'en' || saved === 'es' ? saved : 'es');

if (toggle) {
  toggle.addEventListener('click', () => {
    setLang(root.getAttribute('data-lang') === 'es' ? 'en' : 'es');
  });
}
