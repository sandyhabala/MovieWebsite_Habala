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

  // element for movie poster
const moviePoster = (title, backdrop_path, id) => {
    return `
          <div class="movie-poster" ondblclick="viewMovie(${id})">
              <div class="movie-poster-content">
                <img src="http://image.tmdb.org/t/p/w500${backdrop_path}" alt=${backdrop_path}>
                <h3>${title}</h3>
              </div>
          </div>
            `;
  };

  // display movies function
const renderMovies = async () => {
    const movies = await getMovies();
    moviesDiv.innerHTML = movies
      .map(({ title, backdrop_path, id }) => {
        return moviePoster(title, backdrop_path, id);
      })
      .join("");
  };
  
  renderMovies();
  
  // movie info content display
const popupContent = (
    title,
    overview,
    popularity,
    backdrop_path,
    vote_count,
    vote_average
  ) => {
    return `
      <div class="popup-content">
        <div>
          <h1>${title}</h1>
          <h4>Overview:</h4>
          <p>${overview}</p> 
          <h4>Popularity</h4>
          <h5>${popularity}</h5>
          <h4>Votes:</h4>
          <p>${vote_count}</p>
          <h4>Vote average:</h4>
          <p>${vote_average}</p>
        </div>
        <img src="http://image.tmdb.org/t/p/w500${backdrop_path}">
      </div>
      
    `;
  };

  // declare elements
const moviePopup = document.getElementById("movie-popup");
const popupOverlay = document.getElementById("popup-overlay");
const popupContainer = document.getElementById("popup-container");
const relatedMoviesContainer = document.getElementById("related-movies");
const searchMoviePopup = document.getElementById("search-movie-popup");

  