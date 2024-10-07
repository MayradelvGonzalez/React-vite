
// import React, { useState } from 'react';
// import Movie from './componentes/Movie/Movie';
// import Search from './componentes/Search/Search';
// function App() {
//   const [movieList, setMovieList] = useState([]);

//   // Función para actualizar el estado de movieList
//   const updateMovieList = (movies) => {
//     setMovieList(movies);
//   };

//   // Función para manejar los resultados de la búsqueda
//   const handleSearchResults = (results) => {
//     // Puedes realizar cualquier lógica adicional aquí si es necesario
//     console.log('Resultados de búsqueda:', results);
//   };

//   return (
//     <div>
//       <Search movieList={movieList} onSearch={handleSearchResults} />
//       <Movie onUpdateMovieList={updateMovieList} />
      
//     </div>
//   );
// }

// export default App;
// App.jsx
import React, { useState } from 'react';
import Movie from './componentes/Movie/Movie';
import Search from './componentes/Search/Search';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Función para actualizar el estado de movieList
  const updateMovieList = (movies) => {
    setMovieList(movies);
  };

  // Función para manejar los resultados de la búsqueda
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <Search movieList={movieList} onSearch={handleSearchResults} />
      <Movie onUpdateMovieList={updateMovieList} searchResults={searchResults} />
    </div>
  );
}

export default App;
