import React from "react";
import "./Slice.css";

export const Slice = () => {
  return (
    <>
     <div className=""></div>
      <section className="border border-slate-800 rounded max-h-67 max-w-xs">
        <div className="flex flex-wrap gap-6">
          <img
            className="imgMerPago rounded "
            src="/image/CEDROwoods/MercadoPago.png"
            alt="Imagen logo MercadoPago"
          />
            <img
              className="imgAhora12 rounded"
              src="/image/CEDROwoods/AHORA12.jpg"
              alt="Imagen logo Ahora 3,6,12 y 18"
            />
          <button className="buttonSlice mt-1 mb-1 p-0 uppercase">
            Aceptamos
          </button>
          <span>Entregas dentro de las 48 hs.</span>
          <img
            src="/image/CEDROwoods/truck-fill.svg"
            alt="Imagen logo Camioncito"
          />
          <span>Envios dentro de Corrientes, Capital.</span>
        </div>
      </section>
    </>
  );
};
