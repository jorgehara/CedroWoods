import React from 'react'
import './Slice.css'

export const Slice = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-start p-2">
        <div>
            <img src="/image/CEDROwoods/MercadoPago.png" alt="Imagen logo MercadoPago" />
        </div>
        <div>
        <button className='buttonSlice uppercase text-1xl'>Aceptamos</button>
        </div>
        <div>
        <img src="/image/CEDROwoods/AHORA12.jpg" alt="Imagen logo Ahora 3,6,12 y 18" />
        </div>
        <div>
            <span>Entregas dentro de las 48 hs.</span>
        </div>
        <div>
            <img src="/image/CEDROwoods/truck-fill.svg" alt="Imagen logo Camioncito" />
        </div>
        <div>
            <span>Envios dentro de Corrientes, Capital.</span>
        </div>

    </div>
    </>
  )
}
