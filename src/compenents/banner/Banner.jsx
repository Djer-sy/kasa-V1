import React from "react";
import "./banner.css";
import bannerImg from "../../assets/banner-image.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Image de bannière" className="bannerImg" />
      <div className="overlay">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
