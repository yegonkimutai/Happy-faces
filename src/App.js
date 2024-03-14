/* eslint-disable default-case */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavScrollExample from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <NavScrollExample />
    <div className="components">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
