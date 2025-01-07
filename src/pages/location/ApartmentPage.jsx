import React from "react";
import "./apartmentPage.css";

function Apartementpage() {
  return (
    <div className="apartment-page">
      <div>
        <img src="https://picsum.photos/800/400" alt="" />
      </div>{" "}
      <div className="apartment_header">
        <div className="apartment_title">
          {" "}
          <h1 className="apartment-page_title">
            Crazy loft on Canal Saint-Martin
          </h1>
          <h2 className="apartment-page_subtitle"> Paris, Ile de France</h2>
          <div className="apartment_tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>{" "}
        </div>
        <div className="apartment_owner">
          <div className="apartment_owner_details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartment_owner_badge"></div>
          </div>
          <div className="apartement_owaner_star">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartementpage;
