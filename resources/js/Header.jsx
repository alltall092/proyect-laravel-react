
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header=({buscar,setBuscar,handleSearch})=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(<>
<Navbar expand="lg" className="bg-body-tertiary"  bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><img src="./imagenes/photo.jpg" alt="logo" height="60" width="150"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="/"><i className="fa fa-home"></i>Home</Nav.Link>
            <Nav.Link href="cursos"><i className="fa-solid fa-school"></i>Course</Nav.Link>
           
            <Nav.Link href="contacto"><i className="fa-solid fa-id-card"></i>Contact</Nav.Link>
            <Nav.Link href="acerca"><i className="fa-solid fa-street-view"></i>About</Nav.Link>
            <Nav.Link href="login"><i className="fa-solid fa-right-to-bracket"></i>Login</Nav.Link>
            <Nav.Link href="#cart"><i className="fa fa-shopping-cart" onClick={handleShow} style={{fontSize:"25px"}}></i>
      
      </Nav.Link>

          </Nav>
          <form className="box">
  <div className="container-2">
      <span className="icon" onClick={handleSearch}><i className="fa fa-search"></i></span>
      <input type="search" id="search" onChange={(e)=>setBuscar(e.target.value)} placeholder="Buscar..." value={buscar} />
  </div>
</form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>


</>)

}
export default Header;