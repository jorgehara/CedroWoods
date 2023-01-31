import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="mx-auto pt-1 mt-5 max-w-container">
          <div className="border-t border-slate-900/5 bg-neutral-100">
              <img
              className="mx-auto pt-1 h-20  rounded-full text-slate-900"
                src="/image/CEDROwoods/logo.jpeg"
                alt="Imagen referencia visual logo"
              />
            {/* </svg> */}
            <div className="mt-1 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
            <span className="mt-1 items-center text-center justify-center text-sm leading-6 text-slate-500">
              © 2023 CEDRO Woods Company. All rights reserved.
            </span>
            </div>
            <div className="rounded-t-2xl mt-2 text-slate-600 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 ">
              {/* <button className="buttonFooter">
              </button> */}
              
              <a className="aFooter" href="https://wa.me/543794350479?Somos%20CEDRO%20Woods%20realizamos%20muebles%20con%20diseños%20personalizados%20y%20a%20medida.%20Esperamos%20su%20consulta!!%20:D"
            target="_blank">
                Contacto
              </a>
                <a className="aFooter" href="http://www.instagram.com/cedrowoods/" target="_blank">
                  Siguenos
                </a>
              {/* <button className="buttonFooter">
                </button> */}
            </div>
          </div>
      </footer>
    </>
  );
};
