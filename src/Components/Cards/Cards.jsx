import React from 'react'
import './Cards.css'

export const Cards = ({image, description, tittle}) => {
  return (
    <>  
    <div class="flex justify-center pt-3">
  <div class="flex rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className='imgCard' src={image} alt=""/>
    </a>
    <div class="p-1">
      <h5 class="text-gray-900 text-xl font-medium pt-1 mb-4 mr-4">{tittle}</h5>
      <p class="text-gray-700 text-base mb-3">{description} </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
    
    
    </>
  )
}
