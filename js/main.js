// External link icon
const external_links = document.querySelectorAll('a[target="_blank"]');
external_links.forEach((link) => {
  link.setAttribute('aria-label', 'Ouvrir dans un nouvel onglet')
  link.insertAdjacentHTML('beforeend', ' <i class="fas fa-external-link-alt" title="Ouvrir dans un nouvel onglet"></i>');
});