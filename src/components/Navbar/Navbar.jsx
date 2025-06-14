import { Navbar, Nav, Container } from "react-bootstrap";
import {  BsToggle2Off } from "react-icons/bs";
import "../Navbar/Navbar.css";

const NavbarComponent = ({ toggleDarkMode, darkMode }) => {
  return (
    <>
      <Navbar className="navbar" bg="" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo-navbar">
            {" "}
            Milagros M Cabrera{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto div-titles">
              <Nav.Link href="#home" className="me-3 titles">
                Home
              </Nav.Link>
              <Nav.Link href="#sobre-mi" className="me-3 titles">
                Sobre Mi
              </Nav.Link>
              <Nav.Link href="#proyecto" className="me-3 titles">
                Proyectos
              </Nav.Link>
              <Nav.Link href="#contacto" className="me-3 titles">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
