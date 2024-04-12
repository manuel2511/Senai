import { Truck  } from "@phosphor-icons/react";
import { MapPin  } from "@phosphor-icons/react";
import { CreditCard } from "@phosphor-icons/react";
import { Key } from "@phosphor-icons/react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./ConditionHome.css";
const ConditionHome = () => {
  const sizeIcons = 52;
  return (
    <div>
      <Container>
        <Row className="rowCondition">
          <Col xs={6} md={3}>
            <Truck  size={sizeIcons} />
            <div className="textItemCondition">
              <p>FRETE GRÁTIS</p>
              <p>Confira Condições</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <MapPin  size={sizeIcons} />
            <div className="textItemCondition">
              <p>ENVIAMOS</p>
              <p>Para todo o Brasil</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <CreditCard size={sizeIcons} />
            <div className="textItemCondition">
              <p>ATÉ 3X SEM JUROS</p>
              <p>10% Off no Boleto</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <Key  size={sizeIcons} />
            <div className="textItemCondition">
              <p>100% SEGURO</p>
              <p>Certificado SSL</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConditionHome;
