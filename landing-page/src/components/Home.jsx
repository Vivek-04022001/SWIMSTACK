import { useState, useEffect } from "react";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";
import home4 from "../assets/home-4.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const images = [home1, home2, home3, home4];
  const textMessage = ["Navigating Your Career Journey with Swim Stack","Swim Your Way to Success with Swim Stack","Dive Deep, Reach High with Swim Stack","Helping You Navigate the Waters of Success"];

  return (
    <section id="home">
      <div className=" min-h-screen  mx-auto ">
        {/* Carousel Container */}
        <div className="carousel w-full ">
          {/* slides-section */}
          {images.map((image, index) => (
            <div
              key={`slide${index + 1}`}
              className="carousel-item relative w-full"
              id={`slide${index + 1}`}
            >
              <div className="relative">
                <img src={image} className="w-full z-0 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-70 z-2"></div>
                {/* text content */}
                <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center gap-y-10">
                  <h3 className="max-w-xl text-center text-6xl  font-bold text-primary ">
                    {textMessage[index]}
                  </h3>
                  <div className="flex gap-4 ">
                    <button className="px-8 py-3 uppercase bg-secondary/90 font-bold hover:bg-secondary text-primary">
                      Contact Us
                    </button>
                    <button className="px-8 py-3 uppercase bg-primary/90 font-bold text-black hover:bg-primary">
                      Apply Us
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                <a
                  href={`#slide${index === 0 ? images.length : index}`}
                  className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
                >
                  <AiOutlineArrowLeft />
                </a>
                <a
                  href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                  className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary    "
                >
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
