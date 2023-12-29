// declare movie container

const moviesDiv = document.getElementById("movies");

const apiKey = "1bfdbff05c2698dc917dd28c08d41096";

let page = 1;

// get upcoming movies function
const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
    );
  
    const movies = await response.json();
    return movies.results;
  };
  
  // search movies function
  const searchMovies = async (title) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
    );
  
    const movies = await response.json();
    return movies.results;
  };
  
  // get movie info function
  const movieInfo = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
  
    const movieInfo = await response.json();
  
    return movieInfo;
  };
  
  // get similar movies function
  const relatedMovies = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
  
    const movies = await response.json();
  
    return movies.results;
  };