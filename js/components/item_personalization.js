const initItemPersonalization = () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      const product = event.currentTarget;
      const selectionText = document.getElementById(`product-${product.dataset.productNumber}-selection`);
      selectionText.innerText = product.value;
    });
  });
};

export { initItemPersonalization };