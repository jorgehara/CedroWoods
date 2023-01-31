import React, { useState } from "react";
import { Cards } from "../Cards/Cards";
import "./../Cards/Classes.js";
import { CardsClasess as CardsClasses } from "./../Cards/Classes.js";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Muebles de cocina",
    description:
      "Muebles de cocina personalizados a medida Muebles de cocina personalizados a medidaMuebles de cocina personalizados a medida",
    url: "6.jpeg",
    className: "imgCard",
  },
  {
    id: 2,
    title: "Muebles de sala",
    description:
      "Muebles de cocina personalizados a medida Muebles de cocina personalizados a medidaMuebles de cocina personalizados a medida",
    url: "7.jpeg",
    className: "imgCard",
  },
  {
    id: 4,
    title: "Muebles de sala",
    description:
      "Muebles de cocina personalizados a medida Muebles de cocina personalizados a medidaMuebles de cocina personalizados a medida",
    url: "9.jpeg",
    className: "imgCard",
  },
  {
    id: 5,
    title: "Muebles de cocina",
    description: "Muebles de cocina personalizados a medida",
    url: "10.jpeg",
    className: "imgCard",
  },
  {
    id: 6,
    title: "Muebles de sala",
    description: "Muebles de sala personalizados a medida",
    url: "11.jpeg",
    className: "imgCard",
  },
  {
    id: 7,
    title: "Muebles de cocina",
    description: "Muebles de cocina personalizados a medida",
    url: "12.jpeg",
    className: "imgCard",
  },
  // ... más elementos aquí
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const imagePath = "/image/CEDROwoods/";

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center p-1 rounded-sm ">
          <h2 className="bg-orange-400 bg-gradient-to-tr font-semibold  md:text-3xl  text-white text-center p-2 mt-3 ">
            Los mejores diseños y calidad en muebles personalizados
          </h2>
        </div>
        <div className="flex justify-center p-1 rounded-sm ">
          <h3 className="bg-orange-400 bg-gradient-to-tr font-semibold  md:text-3xl  text-white text-center p-2 ">
            {" "}
            Encontralos aquí
          </h3>
        </div>
        <div className=" justify-center grid grid-cols-3 p-2 gap-8 w-3/3">
          {projects.map((project) => (
            <Cards
              key={project.id}
              image={`${imagePath}${project.url}`}
              title={project.title}
              description={project.description}
              onClick={() => setSelectedProject(project.id)}
              selected={project.id === selectedProject}
              className={project.className}
              clasess={CardsClasses}
            />
          ))}
        </div>
      </div>
    </>
  );
};
