const hideSnackbar = () => {
  snackbar.classList.remove('active');
};

const initSnackbar = () => {
  const btns = document.querySelectorAll('.btn');
  const snackbar = document.getElementById('snackbar');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      snackbar.className = 'active';

      setTimeout(hideSnackbar, 3000);
    });
  });
};

export { initSnackbar };