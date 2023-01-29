import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="mx-auto mt-8 w-full max-w-container">
          <div className="border-t border-slate-900/5 py-10 bg-neutral-100">
            {/* <svg
              className="mx-auto h-5 w-auto text-slate-900"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 160 24"
            > */}
              <img
              className="mx-auto h-20  rounded-full w-auto text-slate-900"
                src="/image/CEDROwoods/logo.jpeg"
                alt="Imagen referencia visual logo"
              />
            {/* </svg> */}
            <div className="mt-5 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
            <span className="mt-5 items-center text-center justify-center text-sm leading-6 text-slate-500">
              © 2023 CEDRO Woods Company. All rights reserved.
            </span>
            </div>
            <div className="rounded-t-2xl mt-10 text-slate-600 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 ">
              <button className="buttonFooter">
              <a className="aFooter" href="https://wa.me/543794350479?Somos%20CEDRO%20Woods%20realizamos%20muebles%20con%20diseños%20personalizados%20y%20a%20medida.%20Esperamos%20su%20consulta!!%20:D"
            target="_blank">
                Contactanos
              </a>
              </button>
              <button className="buttonFooter">
                <a className="aFooter" href="http://www.instagram.com/cedrowoods/" target="_blank">
                  Siguenos
                </a>
                </button>
            </div>
          </div>
      </footer>
    </>
  );
};
