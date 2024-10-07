import React, { useState } from 'react';
import '../Search/Search.css'

const Search = ({ movieList, onSearch }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    // Verificar si movieList está presente antes de filtrar
    if (movieList) {
      // Filtrar los resultados de la búsqueda en función de la consulta
      const filteredResults = movieList.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Actualizar el estado local de los resultados
      setSearchResults(filteredResults);

      // Llamar a la función onSearch para pasar los resultados al componente padre
      onSearch(filteredResults);
    }
  };

  return (
    <div className='search'> 
     
    <div className='busqueda'>
      <input
        type="text"
        value={searchQuery}
        
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display search results */}
      {searchQuery && (
        <div className='resultado'>
          {searchResults.map((result) => (
            <div className='cont' key={result.id}>
              <h2>{result.title}</h2>
              <img
                src={`http://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
              />
               
            </div>
           
          ))}
      
        </div>
      )}
     
    </div>
     
  );
};

export default Search;
