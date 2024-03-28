import './Header.css';
import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className='containner-header'>
      <nav className='nav-hender'>
        <ul className='ul-header'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/missao">Missão</Link></li>
            <li><Link to="/produto">Produtos</Link></li>
            <li><Link to="/nossahistoria">Nossa História</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
