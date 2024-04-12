import "./CaroucelHome.css";
import Carousel from "react-bootstrap/Carousel";
import myNovidades from "../../../src/assets/Header/Novidades.png";
import myLook from "../../../src/assets/Header/Look.png";
import myRoupasinfantis from "../../../src/assets/Header/Roupasinfantis.png";
import { useEffect } from "react";

const CarouselHome = () => {

  useEffect(() => {
    
  },[])


  return (
    <div className="carousel">
      <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarousel "
          src={myRoupasinfantis}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarousel"
          src={myLook}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarousel"
          src={myNovidades}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselHome;
