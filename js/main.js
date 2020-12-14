import { initExternalLinksIcons } from './base/external_links.js';
import { initAnimations } from './base/animations.js';
import { initSlideshow } from './components/slideshow.js';
import { initItemCounter } from './components/item_counter.js';
import { initItemPersonalization } from './components/item_personalization.js';

window.addEventListener('DOMContentLoaded', (event) => {
  // Add icon after all external links
  initExternalLinksIcons();

  // Slideshow
  initSlideshow();

  // Products interactivity
  initItemCounter();
  initItemPersonalization();

  // Animations
  initAnimations();
});

