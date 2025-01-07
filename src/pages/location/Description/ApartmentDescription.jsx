import React from "react";
import "./apartmentDescription.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ApartmentDescription() {
  return (
    <div>
      {" "}
      <div className="apartment_description">
        <p className="description_header">
          Description <FontAwesomeIcon className="icon" icon={faChevronUp} />
        </p>

        <p className="description_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam
          repellat ex praesentium rem illo deserunt provident delectus
          voluptates distinctio, eius, itaque ratione tenetur veritatis ipsa
          assumenda repudiandae quam aliquam quaerat repellendus recusandae
          natus ducimus accusantium porro! Blanditiis, vitae praesentium fugiat
          ad qui, sed at pariatur excepturi, deserunt cupiditate voluptatem.
        </p>
      </div>
    </div>
  );
}

export default ApartmentDescription;
