import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Contact from "./Componets/Contact";

function App() {
  return (
    <>
      <Header />
      <div>
          <Routes>
              <Route path= '/'          element={<Home/>}/>
              <Route path= '/sobre' element={<About/>}/>
              <Route path= '/contato' element={<Contact/>}/>
          </Routes>
        </div>
      <Footer/>
    </>
  );
}

export default App;
