import './FooterMenuNav.css';
import Nav from 'react-bootstrap/Nav';
const FooterMenuNavMain = () => {
  return (
    <div className="containnerNavMenu">
      <Nav defaultActiveKey="/" className="flex-column navMenuMain">
        <Nav.Link href="/" className="navMenuMain">Página Inicial</Nav.Link>
        <Nav.Link href="/colecao" className="navMenuMain">Ver Coleção</Nav.Link>
        <Nav.Link href="/sobre" className="navMenuMain">Nossa História</Nav.Link>
        <Nav.Link href="/contato" className="navMenuMain">Contato</Nav.Link>
     </Nav>
    </div>
  )
}

export default FooterMenuNavMain
