export const API_KEY = "aa167268e75348c1bc7a1c83b2bfbcb5";
export const BASE_URL = "https://api.themoviedb.org/3";
export const fetchImagePath = "https://image.tmdb.org/t/p/original";

export const requests = {
  fetchMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
  fetchTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchUpcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export const SEARCH_URL = `${BASE_URL}/search/multi?api_key=${API_KEY}`;
