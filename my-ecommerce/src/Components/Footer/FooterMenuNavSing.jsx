import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./FooterMenuNav.css";
const FooterMenuNavSing = () => {
  return (
    <div className="containnerNavMenu">
      <Form>
        <Row className="align-items-center">
          <Col sm={12} className="sendBroadcastList">
            <Form.Label className="LabelSend">Cadastre-se para receber nossas ofertas</Form.Label>
            <br />
            <Form.Label className="LabelSend">Insira o seu WhatsApp aqui* </Form.Label>
            <div className="broadcastList">
              <Col sm={8} className="sendBroadcastList ">
                <Form.Control id="FormInputPhone" type="phone" placeholder="" />
              </Col>
              <Col sm={4} className="sendBroadcastList">
                <Button variant="primary" type="submit" className="buttonSend">
                  Assine Já
                </Button>
              </Col>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FooterMenuNavSing;
