import LogoManaKids from "../../../src/assets/Header/LogoManaKids.png";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <div className="containnerHender">
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container className="container-Menu">
            <Navbar expand="md" className="">
              <Container className="">
                <Navbar.Brand href="#">
                  <a href="/">
                    <img
                      src={LogoManaKids}
                      alt="Logo Mana Kids"
                      width="150px"
                      className="logo"
                    />
                  </a>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              {/* Botão de fechar e Logo menu */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={LogoManaKids}
                    alt="Logo Mana Kids"
                    width="100px"
                    className="logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/">Página Inicial</Nav.Link>
                  <Nav.Link href="/colecao">Ver Coleção</Nav.Link>
                  <Nav.Link href="/sobre">Nossa História</Nav.Link>
                  <Nav.Link href="/contato">Contato</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Pesquisar..."
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
