import React from "react";
import Navbar from "./compenents/components/Navbar.jsx";
import "./App.css";
import Banner from "./compenents/components/Banner.jsx";
import ApparetementGrid from "./compenents/components/AppartementGrid.jsx";
import Container from "./compenents/components/main.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <ApparetementGrid />
      </main>
    </div>
  );
}

export default App;
