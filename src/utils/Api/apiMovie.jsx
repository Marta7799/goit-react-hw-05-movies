import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '59f1336664fef9f174e58fbaa28590e8';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day${API_KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const searchMovies = async inputValue => {
  const response = await axios.get(
    `/search/movie${API_KEY}&query=${inputValue}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits${API_KEY}&language=en-US`
  );

  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};

// export const getTrending = async () => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
//   );

//   return res.data;
// };

// export const searchMovies = async query => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//   );

//   return res.data;
// };

// export const getMovieDetails = async id => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
//   );

//   return res.data;
// };

// export const getMovieCredits = async id => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//   );

//   return res.data.cast;
// };

// export const getMoviesReviews = async id => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   );

//   return res.data;
// };
