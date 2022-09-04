import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import About from './about/About';
import Projects from './projects/Projects'
import Contact from './contact/Contact';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
