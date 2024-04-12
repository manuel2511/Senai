import { Carousel } from 'react-bootstrap';
const CarouselItensHome = () => {
  return (
    <div>
            <Carousel slide>
            <Carousel.Item>
                <div className="d-flex justify-content-between">
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="First slide"
                    />
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Second slide"
                    />
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Third slide"
                    />
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Fourth slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-between">
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Fifth slide"
                    />
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Sixth slide"
                    />
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Seventh slide"
                    />
                    <img
                        className="d-block"
                        src="https://via.placeholder.com/200x200"
                        alt="Eighth slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselItensHome
