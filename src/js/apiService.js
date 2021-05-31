import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class ApiService {
  #API_KEY = '21149088-9f5924478b20a01769fc809e0';
  
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
    this.total = '';
  }
  
  fetchPhotos() {
    const url = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.searchQuery,
      page: this.page,
      per_page: this.perPage,
      key: this.#API_KEY,
    });

    return axios.get(`?${url}`)
      .then(response => {
        this.total = response.data.total;
        return response.data.hits;
      })
      .then(this.incrementPage());
  };

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}