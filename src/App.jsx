import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './compenents/About/About';
import Navbar from "./compenents/navbar/Navbar";
import Footer from "./compenents/footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;