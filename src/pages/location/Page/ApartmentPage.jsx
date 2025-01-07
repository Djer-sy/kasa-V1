import React from "react";
import "./apartmentPage.css";
import ApartmentDescription from "../Description/ApartmentDescription.jsx";
import ApartmentBanner from "../Banner/ApartmentBanner.jsx";
import ApartmentHeader from "../Header/ApartmentHeader.jsx";

function Apartmentpage() {
  return (
    <div className="apartment-page">
      <ApartmentBanner />
      <ApartmentHeader />

      <div className="apartment_description_area">
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  );
}

export default Apartmentpage;
