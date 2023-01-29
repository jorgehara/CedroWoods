import React from 'react'
import './Cards.css'

export const Cards = ({image, description, tittle}) => {
  return (
    <>  
    <div className="flex flex-col pt-3">
  <div className="flex rounded-lg shadow-lg bg-white max-w-sm">
    <a className='aImgCard' href="#!">
      <img className='imgCard' src={image} alt=""/>
    </a>
    <div className="p-1">
      <h5 className="text-gray-900 text-xl font-medium pt-1 mb-4 mr-4">{tittle}</h5>
      <p className="text-gray-700 text-base mb-3">{description} </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
    
    
    </>
  )
}
