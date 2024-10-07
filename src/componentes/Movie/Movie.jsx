// Movie.jsx
// import React, { useState, useEffect } from 'react';

// function Movie({ onUpdateMovieList }) {
   
//   const [movieList, setMovieList] = useState([]);
//   const apiKey = 'b210be581879151ace076e5b138fc414';

//   const getMovies = (query) => {
//     const url = query
//       ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
//       : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         setMovieList(json.results);
//         onUpdateMovieList(json.results); // Actualiza también el estado en App
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <>
//       <div className='bienvenida'>
//         <h1>Disfruta de todo tipo de Películas aquí en SpaceMovie.</h1>
//         <h1>Te Damos la Bienvenida.</h1>
//       </div>

//       <div className='container'>
//         {movieList.map((movie) => (
//           <div className='card' key={movie.id}>
//             <img
//               style={{ width: '300px', height: '350px' }}
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt=""
//             />
//             <p>{movie.title}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Movie;
// Movie.jsx
import React, { useState, useEffect } from 'react';
import '../Movie/Movie.css';
function Movie({ onUpdateMovieList, searchResults }) {
  const [movieList, setMovieList] = useState([]);
  const apiKey = 'b210be581879151ace076e5b138fc414';

  const getMovies = (query) => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setMovieList(json.results);
        onUpdateMovieList(json.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    // Llama a la función onUpdateMovieList solo cuando no haya resultados de búsqueda
    if (searchResults.length === 0) {
      onUpdateMovieList(movieList);
    }
  }, [searchResults, movieList, onUpdateMovieList]);

  return (
    <>
      <div className='bienvenida'>
        <h1>Disfruta de todo tipo de Películas aquí en SpaceMovie.</h1>
        <h1>Te Damos la Bienvenida.</h1>
      </div>

      <div className='container'>
        {/* Mostrar solo cuando no hay resultados de búsqueda */}
        {searchResults.length === 0 && movieList.map((movie) => (
          <div className='card' key={movie.id}>
            <img
              style={{ width: '300px', height: '350px' }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movie;
