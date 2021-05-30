import './sass/main.scss';

import debounce from 'lodash.debounce';
import ApiService from './js/apiService.js';
import refs from './js/refs.js';
import { observer } from './js/intersectionObserver.js';
import { renderCardsMarckup, resetCardsMarckup } from './js/renderMarckup';

export const photosApiService = new ApiService();

refs.form.addEventListener('input', debounce(onSearch, 700));
refs.form.addEventListener('submit', e => e.preventDefault());

function onSearch(e) {
  photosApiService.query = e.target.value;
  photosApiService.resetPage();

  if (!photosApiService.searchQuery) return;

  resetCardsMarckup();

  photosApiService.fetchPhotos().then(renderCardsMarckup);
};

observer.observe(refs.loadMore);