import { photosApiService } from '../index.js';
import { renderCardsMarckup } from './renderMarckup';
  
const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && photosApiService.page > 1) {
      photosApiService.fetchPhotos().then(renderCardsMarckup);
    }
  });
};

export const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});