import React from "react";
import "./Cards.css";

export const Cards = ({ image, description, tittle }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex rounded-lg shadow-lg bg-white w-85">
          <a className="p-0" href="#!">
            <img
              className="imgCard"
              src={image}
              alt="Image referencia de trabajos realizados"
            />
          </a>
          <div className="p-0">
            <h5 className="text-gray-900 text-base p-1">{tittle}</h5>
            <p className="text-gray-700 text-justify text-md align-text-top w-48  p-4">
              {description}{" "}
            </p>
            <button
              type="button"
              className=" justify-center ml-4 w-25 mb-2 bg-orange-600 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-orange-700 focus:bg-orange-700 focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              + Más detalles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
