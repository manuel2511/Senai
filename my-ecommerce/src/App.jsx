import "./global.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import  {Routes, Route}  from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Colection from "./Components/colection/Colection.jsx";
import About from "./Components/about/About.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="containner">
      <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecao" element={<Colection />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
