import * as API from '../Api/apiMovie';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.searchMovies(input).then(ret => setMovies(ret));
  }, [input]);
  return { movies };
};
