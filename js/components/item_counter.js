const initItemCounter = () => {
  const minusButtons = document.querySelectorAll('.minus');
  const plusButtons = document.querySelectorAll('.plus');

  const substractOneFromQuantity = (event) => {
    const quantityElement = event.currentTarget.nextElementSibling;
    let quantity = parseInt(quantityElement.dataset.productQuantity);

    if (quantity > 0) {
      quantity -= 1;
      quantityElement.dataset.productQuantity = quantity;
      quantityElement.innerText = quantity;
    }
  };

  const addOneToQuantity = (event) => {
    const quantityElement = event.currentTarget.previousElementSibling;
    let quantity = parseInt(quantityElement.dataset.productQuantity);

    quantity += 1;
    quantityElement.dataset.productQuantity = quantity;
    quantityElement.innerText = quantity;
  }

  minusButtons.forEach((minus) => {
    minus.addEventListener('click', substractOneFromQuantity);
  });

  plusButtons.forEach((plus) => {
    plus.addEventListener('click', addOneToQuantity);
  });
};

export { initItemCounter };