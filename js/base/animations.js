const elementsToAnimate = document.querySelectorAll('h1');

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  console.log(rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  const initAnimations = () => {
    window.addEventListener('scroll', () => {
      elementsToAnimate.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate');
        }
      });
    });
  };
  
  export { initAnimations };