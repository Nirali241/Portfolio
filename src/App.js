import './App.css';
import Carouselimage from './Carouselimage';
import Navbar from './Navbar';
import  About from './About';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Carouselimage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
