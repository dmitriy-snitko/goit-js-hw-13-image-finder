import refs from './refs';
import templates from '../templates/photo-card.hbs';

export function renderCardsMarckup(data) {
  refs.gallery.insertAdjacentHTML('beforeend', templates(data));
};

export function resetCardsMarckup() {
  refs.gallery.innerHTML = '';
};