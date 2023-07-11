import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact Us/Contact';
import About from './components/About Us/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="Wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
