import './Footer.css';
import InstagramManaKids from "../../../src/assets/Footer/instagram.svg";
import FacebookManaKids from "../../../src/assets/Footer/facebook.svg";
import visacard from "../../../src/assets/Footer/cc-visa.svg";
import mastercard from "../../../src/assets/Footer/cc-mastercard.svg";
import money from "../../../src/assets/Footer/money-bill-solid.svg";
import pix from "../../../src/assets/Footer/pix.svg";
import whatsapp from "../../../src/assets/Footer/whatsapp.png";

const Footer = () => {
  const razaosocial = 'Marceli Bressan Machado CNPJ 00.000.0000-00';
  const lougradouro = 'Av: Juscelino Kubstchek de Oliveira, 2326, Cidade Jardim, Ubá-MG';
  const contato = 'manakids@gmail.com (32)98826-4239 ';
  const mensagem = 'Estimativa de entrega 2- 5 dias úteis';
  const widthRedesSocial = 30;
  const LinkInstagram = 'https://www.instagram.com/manakidsvestuario/';
  const LinkFacebook = 'https://www.instagram.com/manakidsvestuario/';
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Redes sociais </h5>
            <section className="redesSociais mt-3">
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
            <div className="contacts-footer mt-3">
                <p>{razaosocial}<br/>
                      {lougradouro}<br/>
                      {contato}<br/>
                      {mensagem} </p>
            </div>
          </div>
          <div className="col-md-3  ">
            <h5>Métodos de <br/>pagamento</h5>
            <ul className="payments__grid d-flex mt-3" >
                <li className="payments__itens " title="Cartão Visa"><img src={visacard } alt="Siga-nos no Instagram" width={widthRedesSocial} /></li>
                <li className="payments__itens" title="Cartão Mastercar"><img src={mastercard } alt="Siga-nos no Instagram" width={widthRedesSocial} /></li>
                <li className="payments__itens" title="Transferência PIX"><img src={pix } alt="Siga-nos no Instagram" width={widthRedesSocial} /></li>
                <li className="payments__itens" title="Dineiro"><img src={money } alt="Siga-nos no Instagram" width={widthRedesSocial} /></li>
              </ul>   
          </div>
        </div>
        <span class="whatsapp-footer">
        <a href="https://api.whatsapp.com/send?phone=5532988264239&text=Ol%C3%A1!%20Estou%20enteressado%20em%20saber%20mais%20dos%20seus%20produtos,%20estou%20vindo%20do%20site%20da%20empresa." target="_blank" >
          <img src={whatsapp} alt="whatsapp" />
        </a>

      </span>
      </div>
    </div>
  );
};

export default Footer;
