import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Contact.css";
const ContactForm = () => {
  return (
    <div className="formContainer">
      <p>Entre em contato conosco em caso de dúvidas</p>
      <Form>
        <Row className="mb-3">
          <Form.Group sm as={Col} controlId="formName">
            <Form.Label>Nome *</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group sm as={Col} controlId="formLastName">
            <Form.Label>Sobrenome *</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group sm as={Col} controlId="formSubject">
            <Form.Label>Assunto *</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group sm as={Col} controlId="formEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="e-mail" placeholder="" />
          </Form.Group>
        </Row>
        <Form.Group sm className="mb-3" controlId="formMensage">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="btnSend">
          <Button variant="" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
