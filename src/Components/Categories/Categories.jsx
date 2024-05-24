import React from 'react'
import './Categories.css'
import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const Categories = () => {
  return (

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 className=' text-center font-bold mx-auto my-7 text-4xl text-black mb-3'>Most loved food items</h1>
        <div className=' flex justify-around items-center w-1/2 mb-7 mx-auto'><hr className='text-gray-700 h-1 rounded-lg border-none bg-gray-500 m-auto pl-4' /><IoIosArrowDown className=' text-xl text-gray-700  w-full my-auto' /><hr className='text-gray-700 rounded-lg border-none bg-gray-500 m-auto pr-4 h-1' /></div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class=" card p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://img.freepik.com/free-photo/side-view-pizza-stand-with-tomatoes-olives-bell-peppers_141793-13029.jpg?t=st=1716480997~exp=1716484597~hmac=a0667af14feeeacb1438694b14f14ccb3af73f0bbe2cabd231793e9fa61aaee1&w=740" />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">Vegeterian Pizza</h2>
            <div className=' flex justify-around items-center mt-2'><span className=' flex justify-around items-center'>$26.00 </span>|<span className=' flex justify-around items-center'><h6> 5.0</h6><IoStarSharp className='text-lg text-yellow-500 my-auto mx-1' /></span></div>


          </div>
          <div class=" card p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://img.freepik.com/free-photo/chocolate-cake-decorated-with-chocolate-pieces_140725-3054.jpg?t=st=1716511526~exp=1716515126~hmac=827acb205b1be6885cc8affb2755134b92c20a1bc931dbee3673b2711420bf6f&w=740" />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">Chocolate Cake</h2>
            <div className=' flex justify-around items-center mt-2'><span className=' flex justify-around items-center'>$26.00 </span>|<span className=' flex justify-around items-center'><h6> 5.0</h6><IoStarSharp className='text-lg text-yellow-500 my-auto mx-1' /></span></div>


          </div>
          <div class=" card p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?t=st=1716511703~exp=1716515303~hmac=9bfad3e06f2da387b2c266b4b3c7d624ee88f9ab92c2af07509a3056b8112edd&w=360" />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">Chicken Qourma</h2>
            <div className=' flex justify-around items-center mt-2'><span className=' flex justify-around items-center'>$26.00 </span>|<span className=' flex justify-around items-center'><h6> 5.0</h6><IoStarSharp className='text-lg text-yellow-500 my-auto mx-1' /></span></div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Categories
