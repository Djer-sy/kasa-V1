import React from "react";
import "./appartementGrid.css";
import locations from "../../data/locations.json";
import { Link } from "react-router-dom";

function ApparetementGrid() {
  return (
    <section className="locationsContainer">
      {locations.map((location) => {
        return (
          <article key={location.id} >
            <Link className="locationCard" to={`/location/${location.id}`}>
              <img className="imageLocation" src={location.cover} alt={`Image de ${location.title}`} />
              <h2>
                {location.title}
              </h2>
            
            </Link>
          </article>

        );
      })}
    </section>
  );
}

export default ApparetementGrid;
