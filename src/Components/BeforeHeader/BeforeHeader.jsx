import React from 'react'
import './BeforeHeader.css'

export const BeforeHeader = () => {
  return (
    <>
    <section className='bg-orange-100 opacity-0.5'>
       <div className="m-2 flex gap-1 mb-3">
       <button className="button-container uppercase">
            Aceptamos
          </button>
          <img
            className="img-container "
            src="/image/CEDROwoods/MercadoPago.png"
            alt="Imagen logo MercadoPago"
          />
          <span className='flex flex-col mt-4 text-gray-900 text-2xl font-mono font-extrabold '>Entregas dentro de las 48 hs.</span>
          <img
              className="LogoAhora12 "
              src="/image/CEDROwoods/logo-ahora12.jpg"
              alt="Imagen logo Ahora 3,6,12 y 18"
            />
            <img
              className="LogoCuotas "
              src="/image/CEDROwoods/logo-plancuotas.jpg"
              alt="Imagen logo Ahora 3,6,12 y 18"
            />
            <span className='flex flex-col mt-4 text-gray-900 text-2xl font-mono font-extrabold '>Envios dentro de Corrientes, Capital.</span>
            <img
             className="truckFill "
            src="/image/CEDROwoods/truck-fill.svg"
            alt="Imagen logo Camioncito"
          />
        </div>
        

    </section>
    
    
    
    </>
  )
}
