import React from "react";
import Banner from "../compenents/banner/Banner.jsx";
import ApparetementGrid from "../compenents/appartementGrid/AppartementGrid";
import Container from "../compenents/container/Container";

function Home() {
  return (
      <Container>
        <Banner />
        <ApparetementGrid />
      </Container>
  );
}

export default Home;
