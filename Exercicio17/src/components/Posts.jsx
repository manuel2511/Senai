import styles from "./Posts.module.css";
const Posts = () => {
  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Técnico do Projeto </strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='01/04/2024' dateTime='01/04/2024'>
            Publicado há 1 hora
        </time>
        <div>

        </div>
      </header>
    </article>
  );
};

export default Posts;
