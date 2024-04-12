import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ContactHeader = () => {
  return (
    <div className="containerContact">
      <h4>Contate-nos</h4>
      <Container className="contactContainer">
        <Row className="contactRow">
          <Col sm className="contactCol">
            <div className="contactText">
              <h5 >VISITE-NOS</h5>
              <p>Av: JK de oliveira, 2326</p>
              <p>Ubá, MG - CEP 36507-330</p>
              <p>(32)998866-2595</p>
            </div>
          </Col>

          <Col sm className="contactCol">
          <div className="contactText">
              <h5 >HORÁRIO</h5>
              <p>Seg à Sex.: 8:00 às 18:00</p>
              <p>Sábado.: 8:00 às 14:00</p>
            </div>
          </Col>
          <Col sm className="contactCol">
          <div className="contactText">
              <h5 >SERVIÇO AO CLIENTE</h5>
              <p>(32)998866-2595</p>
              <p>manakids@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactHeader;
