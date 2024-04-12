import "./FooterMenuNav.css";
import Nav from 'react-bootstrap/Nav';
const FooterMenuNavHelp = () => {
  return (
    <div className="containnerNavMenu">
      <Nav defaultActiveKey="/home" className="flex-column navMenuHelp">
        <Nav.Link href="/#" className="navMenuHelp">Envios e Devoluções</Nav.Link>
        <Nav.Link href="/#" className="navMenuHelp">Política da Loja</Nav.Link>
        <Nav.Link href="/#" className="navMenuHelp">Métodos de Pagamento</Nav.Link>
        <Nav.Link href="/#" className="navMenuHelp">FAQ</Nav.Link>
      </Nav>
    </div>
  );
};

export default FooterMenuNavHelp;
