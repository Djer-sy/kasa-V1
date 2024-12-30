import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./compenents/navbar/Navbar.jsx";
import "./App.css";
import Banner from "./compenents/banner/Banner.jsx";
import AppartementGrid from "./compenents/appartementGrid/AppartementGrid.jsx";
import Container from "./compenents/container/Container.jsx";
import About from "./compenents/about/About.jsx"; 

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <AppartementGrid />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;