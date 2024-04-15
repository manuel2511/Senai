import { Carousel } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ColectionCard from "../colection/ColectionCard";
import './CarouselItensHome.css'

const CarouselItensHome = () => {
  return (
    <div className="containnerCarouselItens">
      <Carousel slide>
        <Carousel.Item>
          <div className="d-flex justify-content-evenly">
            <ColectionCard />
            <ColectionCard />
            <ColectionCard />
            <ColectionCard />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-evenly">
            <ColectionCard />
            <ColectionCard />
            <ColectionCard />
            <ColectionCard />
          </div>
        </Carousel.Item>
      </Carousel>
      <Nav className="justify-content-center flex-grow-1 pe-3">
        <Nav.Link className="carouselLink" href="/colecao">Comprar</Nav.Link>
      </Nav>
    </div>
  );
};

export default CarouselItensHome;
