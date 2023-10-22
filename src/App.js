import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <Home/>
        <About/>
        <Resume/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      
    </div>
  );
}

export default App;