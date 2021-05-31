import '../../node_modules/alertifyjs/build/css/alertify.min.css';
import '../../node_modules/alertifyjs/build/css/themes/default.min.css';
import alertify from 'alertifyjs';
import { photosApiService } from '../index';

alertify.defaults = {
  notifier: {
    delay: 5,
    position:'top-right',
  },
};

export function notifications(data) {
  if (!data.length) {
    return onNothingFound();
  }

  onSuccess();
}

function onSuccess() {
  alertify.success(`${photosApiService.total} images were found for your search.`)
};

function onNothingFound() {
  alertify.warning('No results were found for your search.');
};

export function onError(error) {
  alertify.error(`${error}`);
};