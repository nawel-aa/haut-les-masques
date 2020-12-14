
const initExternalLinksIcons = () => {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  
  externalLinks.forEach((link) => {
    link.setAttribute('aria-label', 'Ouvrir dans un nouvel onglet')
    link.insertAdjacentHTML('beforeend', ' <i class="fas fa-external-link-alt external-link" title="Ouvrir dans un nouvel onglet"></i>');
  });
};

export { initExternalLinksIcons };
