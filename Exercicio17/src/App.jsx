import "./global.style.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
function App() {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
      </div>
      <main>
        <Posts />
      </main>
    </>
  );
}

export default App;
