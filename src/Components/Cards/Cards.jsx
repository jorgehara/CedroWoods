import React, { useState } from "react";
import "./Cards.css";

export const Cards = ({ image, description, details, title, clasess }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  // const [isChange, setIsChange] = useState(false);

  // const className = isChange ? "CardsClasess" : "CardsClasessRotate";

  // console.log(isChange);
  return (
    <div>
    <div className="Cards flex flex-col" onClick={toggleModal}>
      <div className="card flex rounded-lg shadow-lg bg-white w-85">
        <div className="card-image">
          <img src={image} alt="Image referencia de trabajos realizados" />
        </div>
        <div className="card-content">
          <h5 className="card-title text-gray-900 text-base p-1">{title}</h5>
          <p className="card-description text-gray-700 text-justify text-md align-text-top w-48  p-4">{description}</p>
          <button className="justify-center ml-4 w-25 mb-2 bg-orange-700 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-1000 ease-in-out">+ Más detalles</button>
        </div>
      </div>
    </div>

    {showModal && (
      <div className="Modal">
        <div className="card">
          {/* <div className="justify-end justify-items-end "> */}
          <button className="justify-end justify-self-end ml-4 w-25 mb-2 bg-orange-700 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-1000 ease-in-out" onClick={toggleModal}>
            X
          </button>
            {/* </div> */}
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










// <div>
//   <div className={className}>
//     { isChange ? (

      // <div className="rotationCards flex flex-col">
      //   <div className="flex rounded-lg shadow-lg bg-white w-85">
      //     <a className="p-0" href="#!">
      //       <img
      //         className="imgCard"
      //         src={image}
      //         alt="Image referencia de trabajos realizados"
      //       />
      //     </a>
      //     <div className="p-0">
      //       <h5 className="rotateButtonEnviar text-gray-900 text-base p-1">{title}</h5>
      //       <p className="rotateButtonEnviar text-gray-700 text-justify text-md align-text-top w-48  p-4">
      //         {details}
      //       </p>
      //       <button
      //         onClick={() => setIsChange(!isChange)}
      //         // onClick={handleClick}
      //         type="button"
      //         className="rotateButtonEnviar justify-center ml-4 w-25 mb-2 bg-orange-700 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-1000 ease-in-out"
      //       >
      //         Enviar
      //       </button>
      //     </div>
      //   </div>
      // </div>
//         ) : (
//           <div className="flex flex-col">
//             <div className="flex rounded-lg shadow-lg bg-white w-85">
//               <a className="p-0" href="#!">
//                 <img
//                   className="imgCard"
//                   src={image}
//                   alt="Image referencia de trabajos realizados"
//                 />
//               </a>
//               <div className="p-0">
//                 <h5 className="text-gray-900 text-base p-1">{title}</h5>
//                 <p className="text-gray-700 text-justify text-md align-text-top w-48  p-4">
//                   {description}
//                 </p>
//                 <button
//                   onClick={() => setIsChange(!isChange)}
//                   type="button"
//                   className="justify-center ml-4 w-25 mb-2 bg-orange-700 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-1000 ease-in-out"
//                 >
//                   + Más detalles
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );