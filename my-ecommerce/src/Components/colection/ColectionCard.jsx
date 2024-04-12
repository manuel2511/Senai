import Card from "react-bootstrap/Card";
import "./ColectionCard.css";
const ColectionCard = () => {
  return (
    <div className="cardContainner">
      <Card>
        <Card.Img
          variant="top"
          src="https://static.wixstatic.com/media/45d10e_11ee24bab35748af871e855fa259b6ab~mv2.jpg/v1/fill/w_418,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/45d10e_11ee24bab35748af871e855fa259b6ab~mv2.jpg"
        />
        <Card.Body>
          <div className="cardFooter">
            <p>Produto 1</p>
            <hr />
            <div className="cardCash">
              <span>À vista</span>
              <span>19,90</span>
            </div>
            <div className="cardTerm">
              <span>À Prazo</span>
              <span>21,90</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColectionCard;
