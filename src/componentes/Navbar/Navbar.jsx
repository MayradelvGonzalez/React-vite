import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import iconoCinema from '../../assets/iconoCinema.png';
import { useState } from 'react';

function NavScrollExample({ handleSearch, searchQuery, setSearchQuery, setModoBusqueda, setGenero}) {
const [isFocused, setIsFocused] = useState(false);

const handleFocus = (e) => {
  setIsFocused(true);
 };
 const handleBlur = (e) => {
  setIsFocused(false);
 };


  const navigate = useNavigate()
  
  function handleClick(){
    setSearchQuery('');
    setModoBusqueda(false);
    setGenero('');
  }

  function cambiarGenero(generoId) {
    setGenero(generoId);
    setModoBusqueda(false);
    setSearchQuery('');
    navigate('/')
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavLink onClick={handleClick} to='/'>
        <img style={{width:'45px'}} src={iconoCinema} alt='imagenIcono'/>
        </NavLink>
        <NavLink style={{textDecoration:'none'}}  to='/'>
        <Navbar.Brand onClick={handleClick} className="texto">MOVIES</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '700px' }}
            navbarScroll
          >
            <Nav.Link className="texto-costum">
              <NavLink onClick={handleClick} to="/"  style={{color:"black", textDecoration:'none'}}>Home</NavLink>
            </Nav.Link>
            

            <NavDropdown color='black' style={{color:"black", textDecoration:"none"}}
             title="Categorías"
             className="texto-costum" 
              id="navbarScrollingDropdown">
               
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('35')} href="#action2" className='desplegable'>
                Comedias
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('10749')} href="#action3" className='desplegable'>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('28')}  href="#action4" className='desplegable'>
                Acción
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('18')} href="#action5" className='desplegable'>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('10751')}  href="#action6" className='desplegable'>
                Familiares
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('14')} href="#action7" className='desplegable'>
                Fantasia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('53')} href="#action8" className='desplegable'>
                Thriller
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('878')} href="#action9" className='desplegable'>
                Ciencia Ficción
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => cambiarGenero('12')}  href="#action10" className='desplegable'>
                Aventura
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="texto-costum">
            <NavLink to= "/favoritos" style={{color:"black", textDecoration:"none"}} 
              className="favoritos">Favorites</NavLink>
            </Nav.Link>

          </Nav>
          <Form className="d-flex"

          >
            <Form.Control
              type="search"
              placeholder={isFocused ? '' : 'Search a movie🔎'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
             
                <Button variant="outline-success" className='btn' onClick={handleSearch}>Search</Button>
             
          </Form>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;