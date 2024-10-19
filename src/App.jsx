import React from 'react'
import Movie from './componentes/Movie/Movie';
import NavBar from './componentes/Navbar/Navbar.jsx';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Details from './componentes/Details/Details.jsx';
import Favorite from './componentes/Favorite/Favorite.jsx'
import { useNavigate } from 'react-router-dom';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modoBusqueda, setModoBusqueda] = useState(false);
  const [genero, setGenero ] = useState ('');
  const apiKey = 'b210be581879151ace076e5b138fc414';
  const navigate = useNavigate()
  const handleSearch = () => {
    if (searchQuery === '') {
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return setSearchResults(json.results)
      })
      .catch(error => console.error('Error fetching data:', error));

    setModoBusqueda(true);
    navigate('/')
  };

  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setModoBusqueda={setModoBusqueda}
        setGenero={setGenero}
      />

      <Routes>
        <Route path="/" element={(<Movie
          searchResults={searchResults}
          searchQuery={searchQuery}
          modoBusqueda={modoBusqueda}
          genero={genero}
        />)} />
        
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="/favoritos" element={<Favorite />} />
      </Routes>
    </>
  )
}

export default App;
