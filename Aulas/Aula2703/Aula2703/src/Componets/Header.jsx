import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h1>Meu Site</h1>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
