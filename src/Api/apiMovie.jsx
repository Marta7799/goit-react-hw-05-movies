import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '59f1336664fef9f174e58fbaa28590e8';

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \
//      --header 'Authorization: Bearer 59f1336664fef9f174e58fbaa28590e8' \
//      --header 'accept: application/json'
