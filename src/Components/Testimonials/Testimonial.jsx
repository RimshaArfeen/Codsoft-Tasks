import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed mb-6">I have been using this service for the past year and it has significantly improved my daily workflow. The intuitive design and user-friendly interface make it easy to navigate, and the customer support team is always quick to respond to any inquiries. Highly recommend!</p>
            <a class="inline-flex items-center">
              <img alt="testimonial" src="https://img.freepik.com/free-photo/silhouette-couple-holding-rose-hill-sunset-time-skyline-background_1150-7232.jpg?t=st=1716533389~exp=1716536989~hmac=916de9e368385893a3fff7c116ce0357670b847d77d0f45d95df4d7dfc1da184&w=740" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Faris Ghazi</span>
                <span class="text-gray-500 text-sm">PRODUCT MANAGER</span>
              </span>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed mb-6">This platform has transformed the way we manage projects. Its seamless integration with other tools and the robust set of features make it a must-have for any team looking to enhance productivity. The analytics and reporting capabilities are particularly impressive.</p>
            <a class="inline-flex items-center">
              <img alt="testimonial" src="https://img.freepik.com/free-photo/silhouette-photographer-who-shoots-sunset-mountains_1150-7356.jpg?t=st=1716533553~exp=1716537153~hmac=6131abfa2422e6b0333839f891bbc8d58287907eb9fc9357aed8a472bf141864&w=740" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Mahir Fareed </span>
                <span class="text-gray-500 text-sm">TEAM LEAD</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial
