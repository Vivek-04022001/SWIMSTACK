import { useState, useEffect } from "react";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";
import home4 from "../assets/home-4.jpg";

const Home = () => {
  const images = [home1, home2, home3, home4];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images[currentIndex]);

  // Function to change the image
  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Start the image rotation
    const intervalId = setInterval(changeImage, 3000); // Change image every 5 seconds

    return () => {
      // Clear the interval on unmount to prevent memory leaks
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  return (
    <section id="home">
      <div className="container mx-auto px-6 md:py-6 py-0  min-h-screen ">
        <div className="relative">
          <div className="absolute left-0 z-30 w-1/3 h-full flex flex-col justify-center items-start px-4 bg-primary/20 backdrop-filter backdrop-blur-sm bg-white bg-opacity-17 shadow-xl gap-y-8 text-primary ">
            <h2 className="text-md md:text-6xl ">Swim Your Way to Success with Swim Stack</h2>
            {/* button container */}
            <div className="flex gap-20  ">
           <a href="#contact" className="px-10 py-3 uppercase font-semibold text-lg bg-secondary border-none text-primary rounded-sm hover:bg-primary hover:text-secondary">Apply</a>
            {/* <button className="btn border-4  text-white border-primary bg-transparent rounded-none hover:bg-secondary hover:border-secondary hover:text-primary"><a href="#apply">Apply</a></button> */}
            </div>
          </div>
          <div className="absolute z-20 w-full h-full bg-gradient-to-l from-primary/20 to-accent/90">

          </div>
          <div className="overflow-hidden relative">
            {/* home-image container */}
            <div
              className="flex transition-transform duration-1000"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img key={index} src={image} alt="" className="w-full h-full object-contain" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
