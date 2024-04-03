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
      <div className= {styles.content}>
        <p>Fala Galera</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam impedit ducimus quisquam nihil eaque?</p>

        <p><a href="">web design/projeto</a> </p>
        <p><a href="">#novoprojeto</a></p>

        <form className={styles.commentsForm} action="">
          <strong> Deixe seu feedback</strong>

          <textarea placeholder="Deixe seu comentário"></textarea>
          <div>
            <button type="submit" >Comentar</button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Posts;
