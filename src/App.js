/* eslint-disable default-case */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavScrollExample from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Officials from './pages/Officials';

function App() {
  return (
    <div className='main-app'>
    <NavScrollExample />
    <div className="components">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/officials" element={<Officials />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
