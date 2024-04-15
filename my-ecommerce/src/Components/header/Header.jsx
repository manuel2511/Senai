import LogoManaKids from "../../../src/assets/Header/LogoManaKids.png";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MagnifyingGlass  } from "@phosphor-icons/react";
import ShoppingCartHeader from "./ShoppingCartHeader";
import IconLoginHeader from "./IconLoginHeader";

const iconSize = 32;
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
                      width="120px"
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
              <Offcanvas.Header closeButtonMenu>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <Form className="d-flex searchHeader">
          <MagnifyingGlass Size = {iconSize} />
            <Form.Control
              type="search"
              placeholder= " Pesquisar..."
              className="me-2 searchHeaderForm"
              aria-label="Search"
            />
          </Form>
          <div className="loginAndShoppingCart">
            <IconLoginHeader/>
            <ShoppingCartHeader/>
          </div>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
