import React from 'react'
import './Hero.css'
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <div>
     <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-9 md:flex-row flex-col items-center mt-5">
          <div class=" w-5/6 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Fresh, Organic & Delicious
              <br class="hidden lg:inline-block" />Your Gourmet Groceries
            </h1>
            <p class="mb-8 text-gray-300 w-1/2 ">Discover a variety of fresh, organic produce, gourmet ingredients, and pantry staples delivered right to your door. Elevate your cooking with premium quality food items sourced from trusted suppliers.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-lg text-lg bg-red-900">Order Now</button>
              
            </div>
            <div className="container py-6  text-gray-600 body-font mt-5">
                <div className="flex flex-wrap -m-4 text-left mt-5">
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                      <CountUp start={1500} end={1700} duration={4} />
                    </h2>
                    <p className="text-gray-300">Brands</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                      <CountUp start={2000} end={2400} duration={5} />
                    </h2>
                    <p className="text-gray-300">Outlets</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                      <CountUp start={1700} end={3500} duration={6} />
                    </h2>
                    <p className="text-gray-300">Customers</p>
                  </div>
                </div>
              </div>
          </div>
          {/* <div class="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div> */}
        </div>

      </section>
    </div>
  )
}

export default Hero
