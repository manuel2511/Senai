import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Home from "./Componets/Home";
import Mission from "./Componets/Mission";
import Product from "./Componets/Product";
import About from "./Componets/About";
import Contact from "./Componets/Contact";

function App() {
  return (
    <>
      <Header />
      <div className="containner">
          <Routes>
              <Route path= '/'          element={<Home/>}/>
              <Route path= '/missao' element={<Mission/>}/>
              <Route path= '/produto' element={<Product/>}/>
              <Route path= '/nossahistoria' element={<About/>}/>
              <Route path= '/contato' element={<Contact/>}/>
          </Routes>
        </div>
      <Footer/>
    </>
  );
}

export default App;
