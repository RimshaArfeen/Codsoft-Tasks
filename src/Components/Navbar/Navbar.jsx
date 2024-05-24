import React from 'react'
import { RiSearchLine, RiHeartFill, RiShoppingCartFill, RiUserFill } from 'react-icons/ri';
import './Navbar.css'
import { IoRestaurantOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <section className="navbar">
        <header class="text-gray-600 body-font w-full ">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-2 w-full ">
            <a class="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
              <IoRestaurantOutline className=' text-2xl text-gray-900 font-semibold'/>
              <span class="ml-3 text-xl">FreshBiteMarket</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5  text-2xl p-2 rounded-full hover:text-white" href='#'><RiHeartFill className=' text-2xl text-gray-800' /></a>
              <a class="mr-5  text-2xl p-2 rounded-full hover:text-white" href='#'><RiSearchLine  className=' text-2xl text-gray-800'/></a>
              <a class="mr-5  text-2xl p-2 rounded-full hover:text-white" href='#'><RiShoppingCartFill className=' text-2xl text-gray-800' /></a>
              <a class="mr-5  text-2xl p-2 rounded-full hover:text-white" href='#'><RiUserFill className=' text-2xl text-gray-800' /></a>
            </nav>


            <div class=" w-1/6">
              <input type="text" id="text" name="text" class="w-full bg-gray-100 bg-opacity-50 rounded-2xl border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-1" placeholder="" />
            </div>
            <button class="text-white bg-indigo-600 border-0 p-3 focus:outline-none hover:bg-indigo-600  text-lg rounded-full"><RiSearchLine /></button>

          </div>
<section>

          <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center text-gray-700 body-font">
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-md justify-center  h-auto py-1">
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">HOME</a>
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">WHY US</a>
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">SERVICES</a>
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">CONTACTS</a>
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">BLOG</a>
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">CATEGORIES</a>
              <a class="mr-5 hover:text-black hover:underline hover:underline-offset-4 hover:cursor-pointer">TESTIMONIALS</a>

            </nav>

          </div>
</section>

        </header>
      </section>
    </div>
  )
}

export default Navbar
