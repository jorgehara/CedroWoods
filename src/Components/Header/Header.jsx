import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
{/* <div className='flex min-h-screen flex-col items-center justify-start p-4'> */}


<div className='flex flex-col items-center justify-start p-2'>
   <h2
   className="bg-orange-400 bg-gradient-to-tr font-bold  md:text-4xl  text-white text-center p-2 rounded-md"
   >CEDRO Woods - Fábrica de Muebles
   </h2>
    </div>
    
    <div className='flex flex-col items-center justify-start p-1'>
      <div className='flex'>
    <h2
   className="bg-orange-600 bg-gradient-to-tr font-bold leading-tight mb-4 md:mb-2 md:text-4xl text-white p-2 rounded-md"
   >Contactanos al 3794-123456
   </h2>
    <a href="https://wa.me/543794350479?Somos%20CEDRO%20Woods%20realizamos%20muebles%20con%20diseños%20personalizados%20y%20a%20medida.%20Esperamos%20su%20consulta!!%20:D" target='_blank'><img src="/image/CEDROwoods/whatsapp-fill (2).svg" alt="Imagen ilustrativa de muebles entregados" /></a>

    </div>



   </div>
    {/* </div> */}
    </>
  )
}
