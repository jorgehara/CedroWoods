import React from 'react'
import './BeforeHeader.css'

export const BeforeHeader = () => {
  return (
    <>
    <section className='bg-orange-100 content-center opacity-0.5 '>
       <div className="m-1 flex  container justify-center gap-3 justify-items-center mb-1">
           <h3
            className='flex mt-4 text-white text-2xl justify-center font-bold button-container '
           >
           Mercado Pago
            </h3> 
         {/* <img
            className="img-container"
            src="/image/CEDROwoods/MercadoPago.png"
            alt="Imagen logo MercadoPago"
          /> */}
          <h3 className='flex mt-4 text-gray-900 text-2xl font-mono font-extrabold '>Entregas en 48 hs - Envios en Corrientes, Capital</h3>
          {/* <img
              className="LogoAhora12 "
              src="/image/CEDROwoods/logo-ahora12.jpg"
              alt="Imagen logo Ahora 3,6,12 y 18"
            /> */}
            {/* <h3 className='flex mt-4 text-gray-900 text-2xl font-mono font-extrabold '>Envios en Corrientes, Capital.</h3> */}
            <img
             className="truckFill "
            src="/image/CEDROwoods/truck-fill.svg"
            alt="Imagen logo Camioncito"
          />
            <img
              className="LogoCuotas "
              src="/image/CEDROwoods/logo-plancuotas.jpg"
              alt="Imagen logo Ahora 3,6,12 y 18"
            />
         </div>
    </section>
    </>
  )
}
