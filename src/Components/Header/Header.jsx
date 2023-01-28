import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
{/* <div className='flex min-h-screen flex-col items-center justify-start p-4'> */}


<div className='flex flex-col items-center justify-start p-2'>
   <h2
   className="bg-orange-400 bg-gradient-to-tr font-bold  md:text-4xl  text-white text-center p-2"
   >CEDRO Woods - Fábrica de Muebles
   </h2>
    </div>
    
    <div className='flex flex-col items-center justify-start '>
    <h2
   className="bg-orange-600 bg-gradient-to-tr font-bold leading-tight mb-4 md:mb-2 md:text-4xl text-white p-2"
   >Contactanos al 3794-123456
   </h2>
   </div>
    {/* </div> */}
    </>
  )
}
