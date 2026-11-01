/**
 * Centralised static image imports for Marjoribanks Joinery
 * Importing images directly enables Vite to bundle, optimize, and generate
 * proper production asset URLs for Cloudflare Pages, GitHub Pages, and static hosting.
 */

import heroImage from './images/hero_bespoke_joinery_1793546659006.jpg';
import aboutImage from './images/about_craftsman_workshop_1793546660713.jpg';
import wardrobesImage from './images/gallery_fitted_wardrobes_1793546660553.jpg';
import kitchenImage from './images/gallery_bespoke_kitchen_1793546660991.jpg';
import shelvingImage from './images/gallery_custom_shelving_1793546661539.jpg';

export const siteImages = {
  hero: heroImage,
  about: aboutImage,
  wardrobes: wardrobesImage,
  kitchen: kitchenImage,
  shelving: shelvingImage,
};
