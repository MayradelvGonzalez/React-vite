import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Movie } from './Movie/Movie.jsx';
import Search from './Search/Search.jsx';

export function Rutas(){
    return(
     <Router>
        <Routes>
            <Route exact path="/" element={<Movie />}/>
            <Route exact path="/busqueda" element={<Search />}/>
            </Routes>
     </Router>
    )
}