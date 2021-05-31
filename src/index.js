import './sass/main.scss';
import '../node_modules/lightbox2/dist/css/lightbox.css';

import debounce from 'lodash.debounce';
import ApiService from './js/apiService.js';
import refs from './js/refs.js';
import { observer } from './js/intersectionObserver.js';
import { renderCardsMarckup } from './js/renderMarckup';
import { notifications, onError } from './js/notifications';
import lightbox from 'lightbox2';


lightbox.option({
  disableScrolling: true,
});

export const photosApiService = new ApiService();

refs.form.addEventListener('input', debounce(onSearch, 700));
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.input.blur();
});

function onSearch(e) {
  photosApiService.query = e.target.value;
  photosApiService.resetPage();

  if (!photosApiService.searchQuery) return;

  photosApiService.fetchPhotos()
    .then(renderCardsMarckup)
    .then(notifications)
    .catch(onError);
};

observer.observe(refs.loadMore);
