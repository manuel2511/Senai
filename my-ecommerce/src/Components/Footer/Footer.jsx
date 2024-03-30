import "./Footer.css";
import InstagramManaKids from "../../../src/assets/Footer/instagram.svg";
import FacebookManaKids from "../../../src/assets/Footer/facebook.svg";

const Footer = () => {
  const razaosocial = 'Marceli Bressan Machado CNPJ 00.000.0000-00';
  const lougradouro = 'Av: Juscelino Kubstchek de Oliveira, 2326, Cidade Jardim, Ubá-MG';
  const contato = 'manakids@gmail.com (32)98826-4239 ';
  const mensagem = 'Estimativa de entrega 2- 5 dias úteis';
  const widthRedesSocial = 30;
  const LinkInstagram = 'https://www.instagram.com/manakidsvestuario/';
  const LinkFacebook = 'https://www.instagram.com/manakidsvestuario/';
  return (
    <di>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Redes sociais </h5>
            <section className="redesSociais">
              <a href={LinkInstagram} target="_blank" rel="noopener noreferrer">
                <img src={InstagramManaKids } alt="Siga-nos no Instagram" width={widthRedesSocial} />
              </a>
              <a href={LinkFacebook} target="_blank" rel="noopener noreferrer">
                <img src={FacebookManaKids} alt="Siga-nos no Instagram" width={widthRedesSocial} />
              </a>
            </section>
          </div>
          <div className="col-md-6">
            <h5>Contatos</h5>
            <p>{razaosocial}<br/>
                   {lougradouro}<br/>
                   {contato}<br/>
                   {mensagem} </p>
          </div>
          <div className="col-md-3 payments">
            <h5>Métodos de <br/>pagamento</h5>
            <ul className="payments__grid" >
                <li><i className="fa fa-cc-visa" aria-hidden="true">visa</i></li>
                <li><i className="fa-cc-mastercard" aria-hidden="true">visa</i></li>
                <li><i className="fas fa-home"></i></li>
                <li><i className="fa fa-cc-visa" aria-hidden="true">visa</i></li>
                <li><i className="fa fa-cc-visa" aria-hidden="true">visa</i></li>
                <li><i className="fa fa-cc-visa" aria-hidden="true">visa</i></li>
                <li><i className="fa fa-cc-visa" aria-hidden="true">visa</i></li>
              </ul>   
          </div>
        </div>
      </div>
    </di>
  );
};

export default Footer;
