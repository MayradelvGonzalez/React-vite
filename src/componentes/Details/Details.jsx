import './Details.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import trailer from '../../assets/playTrailer.svg';
import addFav from '../../assets/addFav.svg';
import deleteFav from '../../assets/nofav.svg';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

function Details() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({
        genres: []
    });
    const [imageDetails, setImageDetails] = useState({
        backdrops: [],
        posters: []
    });
    //useState para creadores
    const [movieCreator, setMovieCreator] = useState({
        crew: [],
        cast: [],
    });
    const [peliFav, setPeliFav] = useState(false)

    const [video, setVideo] = useState([]);

    const [mostrarTrailer, setMostrarTrailer] = useState(false);

    function obtenerDetalles() {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b210be581879151ace076e5b138fc414&language=en-EN`)
            .then(response => response.json())
            .then(json => setMovieDetails(json));

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=b210be581879151ace076e5b138fc414`)
            .then(response => response.json())
            .then(json => setImageDetails(json));
        //link de creator
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b210be581879151ace076e5b138fc414`)
            .then(response => response.json())
            .then(json =>
                setMovieCreator(json)
            );
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b210be581879151ace076e5b138fc414&language=en-US`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return setVideo(`https://www.youtube.com/embed/${json.results[0].key}`)
            });
    }

    // Apenas renderice el componente, se va a ejecutar la funcion obtenerDetalles
    useEffect(function () {
        obtenerDetalles();
        let favs = JSON.parse(localStorage.getItem('favoritos'));

        if (!favs)
            return;

        if (favs.find(peli => {
            return Number(peli.id) === Number(movieId)
        })) {
            setPeliFav(true);
        } else {
            setPeliFav(false);
        }
    }, []);

    const agregarAFavoritos = () => {
        const title = movieDetails.title;
        const poster = imageDetails.posters[0];
        let peli = {
            title,
            poster,
            id: movieDetails.id
        };
        let favoritos = JSON.parse(localStorage.getItem('favoritos'));

        if (!favoritos) {
            favoritos = [];
        }

        favoritos.push(peli);

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        setPeliFav(true); //
    }

    const borrarFavoritos = () => {
        let favs = JSON.parse(localStorage.getItem('favoritos'));
        favs = favs.filter(peli => Number(peli.id) !== Number(movieId));
        favs = JSON.stringify(favs);

        localStorage.setItem('favoritos', favs);
        setPeliFav(false);
    }

    const cerrarVideo = () => {
        setMostrarTrailer(false)
    }

    const abrirTrailer = () => {
        setMostrarTrailer(true)
    }

    return (
        <>
            {mostrarTrailer ? <div className="iframe">
                <iframe
                    style={{ width: '500px', height: '500px' }}
                    title="Trailer"
                    src={video}
                    allowFullScreen
                />

                <button onClick={cerrarVideo}>X</button>
            </div> : null}

            <div className='container-details'>

                {
                    imageDetails.backdrops.slice(0, 1).map(image => <img className='background' src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt='Img' />)
                }
                {
                    imageDetails.posters.slice(0, 1).map(image => <img className='poster' src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt='Img' />)
                }


                <div className='container-description'>


                    <h1 className='titulo'>{movieDetails.title}</h1>
                    <p className='date'>{movieDetails.release_date}</p>

                    <p className='minutes'>Duration: {movieDetails.runtime} minutes</p>

                    <div className='generos'>
                        {movieDetails.genres.slice(0, 4).map((genre) => <p className='genres'>{genre.name}</p>)}

                    </div>

                    <div className='favoritos'>
                        {peliFav ? <button onClick={borrarFavoritos} className='fav' >Delete Favourite <img className='heart' src={deleteFav} alt='Imagen' /> </button> : <button onClick={agregarAFavoritos} className='fav'>Add Favourites <img className='heart' src={addFav} alt='Imgen' /></button>}
                        <button onClick={abrirTrailer} className='trailer'> Play Trailer <img className='play' style={{ width: "18px" }} src={trailer} alt='Imagen' /></button>
                    </div>

                    <p className='texto'>{movieDetails.overview}</p>

                    <div className='creator'>
                        {movieCreator.crew.slice(0, 2).map((person) =>
                            <div className='container-creator'>
                                <h4>{person.name}</h4>
                                <p>{person.job}</p>
                            </div>

                        )} </div>

                </div>
            </div>


            <div className='personas'>
                <Slider {...settings}>
                    {movieCreator.cast.slice(0, 12).map((person) =>
                        <div className='container-personas'>
                            <div className='people'>
                                <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt="" />
                                <h4>{person.name}</h4>
                                <p>{person.character}</p>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>


        </>
    );
}

export default Details;