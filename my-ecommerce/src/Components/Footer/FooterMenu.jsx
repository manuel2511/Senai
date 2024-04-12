import './FooterMenu.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FooterMenuNavSing from './FooterMenuNavSing';
import FooterMenuNavHelp from './FooterMenuNavHelp';
import FooterMenuNavMain from './FooterMenuNavMain';
const FooterMenu = () => {
  return (
    <div className='containerFooterMenu'>
      <Container >
      <Row>
        <Col  md={4}>
        <FooterMenuNavMain/>
        </Col>
        <Col  md={4}>
        <FooterMenuNavHelp/>
        </Col>
        <Col  md={4}>
        <FooterMenuNavSing/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default FooterMenu
