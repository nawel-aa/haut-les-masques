const initSlideshow = () => {
  const slides = document.querySelectorAll('.slide');
  const slideshow = document.querySelector('.slideshow');
  const trackers = document.querySelectorAll('.slideshow__tracker span');
  let currentSlide = 0;
  
  const setSlideshowHeight = () => {
    slideshow.style.height = `${slides[currentSlide].clientHeight}px`;
  };
  
  const toggleActiveClass = () => {
    slides[currentSlide].classList.toggle('active');
    trackers[currentSlide].classList.toggle('active');
  };
  
  // const autorun = () => {
  //   toggleActiveClass();
  //   currentSlide = (currentSlide+1)%slides.length;
  //   setSlideshowHeight();
  //   toggleActiveClass();
  // };
  
  const goToSlide = (event) => {
    // Remove active class from slide and tracker
    toggleActiveClass();
    
    // Set current slide to tracker number
    currentSlide = event.currentTarget.dataset.slideNumber;
    
    // Set height of slideshow to new slide height
    setSlideshowHeight();
    
    // Set current slide and tracker to active
    toggleActiveClass();
  };
  
  setSlideshowHeight();
  // setInterval(autorun, 5000);
  
  trackers.forEach((tracker) => {
    tracker.addEventListener('click', goToSlide);
  });
  
};

export { initSlideshow };