import "./CaroucelHome.module.css";
import Carousel from "react-bootstrap/Carousel";
import myNovidades from "../../../src/assets/Header/Novidades.png";
import myLook from "../../../src/assets/Header/Look.png";
import myRoupasinfantis from "../../../src/assets/Header/Roupasinfantis.png";

const CarouselHome = () => {
  return (
    <div className="carousel">
      <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={myRoupasinfantis}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myLook}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myNovidades}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselHome;
