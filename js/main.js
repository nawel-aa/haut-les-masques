import { initExternalLinksIcons } from './base/external_links.js';
import { initSlideshow } from './components/slideshow.js';
import { initItemCounter } from './components/item_counter.js';
import { initItemPersonalization } from './components/item_personalization.js';
import { initSnackbar } from './components/snackbar.js';

window.addEventListener('load', (event) => {
  // Add icon after all external links
  initExternalLinksIcons();

  // Slideshow
  initSlideshow();

  // Products interactivity
  initItemCounter();
  initItemPersonalization();
  initSnackbar();

  // Animations
  AOS.init();
});

