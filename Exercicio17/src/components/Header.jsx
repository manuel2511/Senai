import logo from '../assets/react.svg';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={logo} alt="Logo React" />
      <strong>RPV react posts</strong>
    </header>
  )
}

export default Header
