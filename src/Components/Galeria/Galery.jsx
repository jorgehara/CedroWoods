import React from 'react'
import './Galery.css'

export const Galery = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-start'>
    <section className='rounded-t-md'>
        <img className='rounded-t-md' src="/image/CEDROwoods/1.jpeg" alt="Imagen ilustrativa de muebles entregados" />
        <img className='rounded-t-md' src="/image/CEDROwoods/2.jpeg" alt="Imagen ilustrativa de muebles entregados" />
        <img className='rounded-t-md' src="/image/CEDROwoods/3.jpeg" alt="Imagen ilustrativa de muebles entregados" />
        <img className='rounded-t-md' src="/image/CEDROwoods/4.jpeg" alt="Imagen ilustrativa de muebles entregados" />
        <img className='rounded-t-md' src="/image/CEDROwoods/5.jpeg" alt="Imagen ilustrativa de muebles entregados" />
    </section>
    </div>
    </>
  )
}
