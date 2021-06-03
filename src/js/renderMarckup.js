import refs from './refs';
import templates from '../templates/photo-card.hbs';
import { photosApiService } from '../index';

export function renderCardsMarckup(data) {
  if (data.length && photosApiService.page === 2) {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    resetMarckup();
  };

  refs.gallery.insertAdjacentHTML('beforeend', templates(data));

  return data;
};

function resetMarckup() {
  refs.gallery.innerHTML = '';
}