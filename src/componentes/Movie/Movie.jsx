import React, { useState, useEffect } from 'react';
import './Movie.css';
import { NavLink } from 'react-router-dom';

function Movie({ searchResults, searchQuery, modoBusqueda, genero }) {
    const [movieList, setMovieList] = useState([]);

    const apiKey = 'b210be581879151ace076e5b138fc414';

    const getMovie = () => {
        console.log(genero);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genero}`)
            .then(response => response.json())
            .then(json => setMovieList(json.results))
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        if (!modoBusqueda) {
            getMovie();
        }
    }, [modoBusqueda]);

    useEffect(() => {
        getMovie();
    }, [genero]);


    return (
        <>

            {modoBusqueda === false ?
                <div className='bienvenida'>
                    <h1 className='titulo-bienvenida'>Todo el cine!</h1>
                    {/* <h1 className='titulo-bienvenida'>Te Damos la Bienvenida.</h1> */}
                </div> : <div></div>}

            <div className='container'>
                {
                    searchResults.length === 0 && searchQuery.length !== 0 && modoBusqueda ? <p>No se encontraron películas con ese nombre.</p> : null
                }
                {
                    !modoBusqueda ? movieList.map((movie) => (
                        <NavLink key={movie.id} style={{ textDecoration: 'none' }} className="titulo-movie" to={`/details/${movie.id}`}>
                            <div className='card'>

                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt=""
                                />
                                <p className='titulo-movie'>{movie.title}</p>

                            </div>
                        </NavLink>
                    )) : searchResults.map((movie) => (
                        <NavLink key={movie.id} style={{ textDecoration: 'none' }} to={`/details/${movie.id}`}>
                            <div className='card'>

                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt=""
                                />
                                <p className='titulo-movie'>{movie.title}</p>

                            </div>
                        </NavLink>
                    ))
                }
            </div>

            
        </>
    );
}

export default Movie;


