import React, { useState } from "react";
import { Cards } from "../Cards/Cards";
import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Muebles de cocina",
        description: "Muebles de cocina personalizados a medida",
        url: "6.jpeg"
    },
    {
        id: 2,
        title: "Muebles de sala",
        description: "Muebles de sala personalizados a medida",
        url: "7.jpeg"
    },
    {
        id: 3,
        title: "Muebles de cocina",
        description: "Muebles de cocina personalizados a medida",
        url: "8.jpeg"
    },
    {
        id: 4,
        title: "Muebles de sala",
        description: "Muebles de sala personalizados a medida",
        url: "9.jpeg"
    },
    {
        id: 5,
        title: "Muebles de cocina",
        description: "Muebles de cocina personalizados a medida",
        url: "10.jpeg"
    },
    {
        id: 6,
        title: "Muebles de sala",
        description: "Muebles de sala personalizados a medida",
        url: "11.jpeg"
    },
    {
        id: 7,
        title: "Muebles de cocina",
        description: "Muebles de cocina personalizados a medida",
        url: "12.jpeg"
    },
    // ... más elementos aquí
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const imagePath = '/image/CEDROwoods/';

  return (
    <>
      <div className="flex flex-col ">
      <div className="flex justify-center p-1 rounded-t-sm ">
        <h2 className="bg-orange-400 bg-gradient-to-tr font-semibold  md:text-3xl  text-white text-center p-2 mt-3 ">
          Los mejores diseños y calidad en muebles personalizados</h2>
          </div>
          <div className="flex justify-center p-1 rounded-t-sm ">
        <h3 className="bg-orange-400 bg-gradient-to-tr font-semibold  md:text-3xl  text-white text-center p-2 "> Encontralos aquí</h3>
        </div>

        <div className="flex justify-center flex-wrap mr-4 pr-1">
        {projects.map(project => (
          <Cards
            key={project.id}
            image={`${imagePath}${project.url}`}
            title={project.title}
            description={project.description}
            onClick={() => setSelectedProject(project.id)}
            selected={project.id === selectedProject}
          />
        ))}
        </div>
        </div>

    </>
  );
};
