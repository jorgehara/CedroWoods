import React from "react";
import { Cards } from "../Cards/Cards";
import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <div>
        <h2 className="bg-orange-400 bg-gradient-to-tr font-semibold  md:text-3xl  text-white text-center p-2 mt-3 ">
          Los mejores diseños y calidad en muebles personalizados</h2>
        <h3 className="bg-orange-400 bg-gradient-to-tr font-semibold  md:text-3xl  text-white text-center p-2 "> Encontralos aquí</h3>
       

    <Cards
    image={"/image/CEDROwoods/1.jpeg"}
    title={"Muebles de cocina"}
    description={"Muebles de cocina personalizados a medida"}
    />


       
        {/* <img
          src="/image/CEDROwoods/6.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        />
        <img
          src="/image/CEDROwoods/7.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        />
        <img
          src="/image/CEDROwoods/8.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        />
        <img
          src="/image/CEDROwoods/9.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        />
        <img
          src="/image/CEDROwoods/10.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        />
        <img
          src="/image/CEDROwoods/11.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        />
        <img
          src="/image/CEDROwoods/12.jpeg"
          alt="Imagen ilustrativa de muebles entregados"
        /> */}
      </div>
    </>
  );
};
