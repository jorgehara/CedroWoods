import React, { useState } from "react";
import "./Cards.css";

export const CardsPrueba = ({ image, description, details, title, clasess }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="Cards" onClick={toggleModal}>
        <div className="card">
          <div className="card-image">
            <img src={image} alt="Image referencia de trabajos realizados" />
          </div>
          <div className="card-content">
            <h5 className="card-title">{title}</h5>
            <p className="card-description">{description}</p>
            <button className="card-details">+ Más detalles</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="Modal">
          <div className="card">
            <button className="close" onClick={toggleModal}>
              X
            </button>
            <div className="card-image">
              <img src={image} alt="Image referencia de trabajos realizados" />
            </div>
            <div className="card-content">
              <h5 className="card-title">{title}</h5>
              <p className="card-details">{details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
