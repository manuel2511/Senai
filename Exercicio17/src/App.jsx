import "./global.style.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import styles from "./components/App.module.css";
function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Posts />
            <Posts />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
