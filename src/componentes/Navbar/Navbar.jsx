import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import React , {useState} from 'react';
import '../Navbar/Navbar.css'
function NavScrollExample() {
   
      // const [MovieList, setMoviesList] = useState([]);
      // const [busqueda , setBusqueda] = useState{""}
      // const datos = e =>{
      //   e.preventDefault()
      //   fetch(https://api.themoviedb.org/3/discover/movie?${busqueda})
      //   .then(response => response.json())
      //   .then(data => {

      //     const{Search} = data

      //     setMovieList{Search}
      //   })
      // }

      // const ChangeState = e => {
      //   setBusqueda (e.target.value)
      // }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="texto">Movies🍿</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="texto-costum">Home</Nav.Link>
            
            <NavDropdown title="Categorías" className="texto-costum" id="navbarScrollingDropdown">
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2" className='desplegable'>
                Comedias
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3" className='desplegable'>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4" className='desplegable'>
                Acción
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='desplegable'>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6" className='desplegable'>
                Familiares
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7" className='desplegable'>
                Asiaticas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8" className='desplegable'>
                Thriller
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9" className='desplegable'>
                Ciencia Ficción
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action10" className='desplegable'>
               Aventura
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
          {/* <Form className="d-flex" 
          // onSubmit={datos}
          >
            <Form.Control
              type="search"
              placeholder="¿Qué peli quieres ver?"
              className="me-2"
              aria-label="Search"
              // onChange={ChangeState}
            />
            <Button variant="outline-success" className='btn'>Buscar</Button>
          </Form>
          {/* <div className='resultado'>
            {movie.length === 0 ?
            <p>Lo sentimos, no se encontró tu película</p>
            : pelis.map(movie =>{
              return(
                <Movie key= {movie.id}{movie.title}{movie.poster_path}/>
              )
            })
          }

          </div> */} 
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavScrollExample;