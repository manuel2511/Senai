import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Foto-Fundo"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png"
          alt="Profile"
        />
        <strong> Técnico do Projeto</strong>
        <span>Web Developer</span>
      </div>
      <footer>
      
        <a href="#"  rel="">
        <PencilLine />Editar o seu perfil</a>
      </footer>
    </aside>
  );
};

export default Sidebar;
