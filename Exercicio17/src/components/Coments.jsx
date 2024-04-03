import { Trash } from "phosphor-react";
import styles from "./Coments.module.css";
import { ThumbsUp } from "phosphor-react";
const Coments = () => {
  return (
    <div className={styles.comments}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />
      <div className={styles.commentsBox}>
        <div className={styles.commentsContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Técnico do Projeto</strong>
              <time title="02/04/2024" dateTime="2024-04-02">
                Cerca de 1 hora atrás
              </time>
              <div>
                <button title="Excluir Comentário"> 
                    <Trash/>
                </button>
              </div>
            </div>
          </header>
                <p>Muito Bom. Parabens!!!</p>
        </div>
        <footer>
            <button>
                <ThumbsUp/>
                Gostei
            </button>
        </footer>
      </div>
    </div>
  );
};

export default Coments;
