import React from 'react';
import './Card.css'
import { FaBagShopping } from "react-icons/fa6";

const Card = ({ image }) => {
  return (
    <div className="card w-full p-4 md:w-full lg:w-full h-auto">
      <a className="relative block h-48 overflow-hidden rounded">
        <img alt={image.alt} className="block h-full w-full object-cover object-center" src={image.src.medium} />
      </a>
      <div className="mt-4">
        <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">{image.photographer}</h3>
        
        <div className="flex items-center">
          <FaBagShopping className="text-xl p-2 w-8 h-8 text-gray-800 hover:border hover:rounded-full hover:bg-white hover:text-green-700" />
          <p className="ml-2 mt-1 text-gray-700">$16.00</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
