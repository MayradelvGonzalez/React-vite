import { useEffect } from 'react';
import { useState } from 'react';
import './Favorite.css'
import { NavLink } from 'react-router-dom';

export default function Favorite() {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        let fav = JSON.parse(localStorage.getItem('favoritos'));

        if (fav) {
            setFavoritos(fav);
        }
    }, []);

    function handleClick(peliId) {
        let fav = JSON.parse(localStorage.getItem('favoritos'));

        fav = fav.filter(peli => peli.id !== peliId);

        setFavoritos(fav);
        localStorage.setItem('favoritos', JSON.stringify(fav));
    }

    return (
        <div className='container-add-favoritos'>
            {favoritos.map(favorito =>  <div><NavLink style={{ textDecoration: 'none' }} to={`/details/${favorito.id}`}>
                        <div  className='add-favoritos' key={favorito.id}>
                          
                            <img src={`https://image.tmdb.org/t/p/w500${favorito.poster.file_path}`}
                               alt=""
                            />
                            <p className='titulo-movie'>{favorito.title}</p>
                            
                  
                        </div>
                       
                </NavLink> 
            
                <button className='btn-quitar' onClick={() => handleClick(favorito.id)}>Quitar</button>
    
                </div>
            )}
        </div>
    )
}