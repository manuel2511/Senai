import "./Colection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColectionCard from "./ColectionCard";
import ColectionMenuFilter from "./ColectionMenuFilter";
const Colection = () => {
  return (
    <div className="colectionContainer">
      <h3>Comprar produto</h3>
      <div className="cardsColections">
        <Container>
          <Row sm={4}>
            <Col className="ColectionMenu">
              <ColectionMenuFilter />
            </Col>
            <Col sm={8}>
              <Row>
                <Col md={4}><ColectionCard /></Col>
                <Col md={4}><ColectionCard /></Col>
                <Col md={4}><ColectionCard /></Col>
              </Row>
              <Row>
                <Col md={4}><ColectionCard /></Col>
                <Col md={4}><ColectionCard /></Col>
                <Col md={4}><ColectionCard /></Col>
              </Row>
              <Row>
                <Col md={4}><ColectionCard /></Col>
                <Col md={4}><ColectionCard /></Col>
                <Col md={4}><ColectionCard /></Col>
              </Row>
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Colection;
