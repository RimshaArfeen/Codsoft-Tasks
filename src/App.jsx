import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Cards/Card';
import './App.css';
import Categories from './Components/Categories/Categories';
import Items_imgs from './Components/Gallery/Items_imgs';
import Deal from './Components/Deal/Deal';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonials/Testimonial';
import { fetch_imgs } from './script';

const App = () => {
  // Declare state at the top level
  const [images, setImages] = useState([]);

  useEffect(() => {
    const get_imgs = async () => {
      const pexelsImages = await fetch_imgs();
      setImages(pexelsImages);
    };
    get_imgs();
  }, []);

  return (
    <div className="app">
      <div className="bg_img"></div>
      <Navbar />
      <Hero />
      <Categories/>
        <Deal/>
      <div className=" w-full flex justify-center items-center flex-col">
      <h1 className=' cards font-bold text-4xl mx-auto text-gray-800 mb-7 block'>Our Top Selling</h1>
      <div className="items">
        {images.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
      </div>
      <Items_imgs/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
