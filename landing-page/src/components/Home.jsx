import { useState, useEffect } from "react";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";
import home4 from "../assets/home-4.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const images = [home1, home2, home3, home4];

  return (
    <section id="home">
      <div className="container max-w-screen md:max-w-6xl mx-auto md:px-6 py-0 md:py-6 ">
        {/* Carousel Container */}
        <div className="carousel w-full">
          {/* slides-section */}
          {images.map((image, index) => (
            <div key={`slide${index + 1}`} className="carousel-item relative w-full" id={`slide${index+1}`}>
              <div className="relative">
                <img src={image} className="w-full  z-0" />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-2"></div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                <a
                  href={`#slide${index === 0 ? images.length : index}`}
                  className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
                >
                  <AiOutlineArrowLeft />
                </a>
                <a
                  href={`#slide${index === images.length - 1 ? 0 : index + 2}`}
                  className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary    "
                >
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          ))}
          {/* <div id="slide1" className="carousel-item relative w-full ">
            <div className="relative">
              <img src={home1} className="w-full  z-0" />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-2"></div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a
                href="#slide4"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary  "
              >
                <AiOutlineArrowLeft />
              </a>
              <a
                href="#slide2"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="relative">
              <img src={home2} className="w-full  z-0" />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-2"></div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a
                href="#slide1"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowLeft />
              </a>
              <a
                href="#slide3"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="relative">
              <img src={home3} className="w-full  z-0" />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-2"></div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a
                href="#slide2"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowLeft />
              </a>
              <a
                href="#slide4"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="relative">
              <img src={home4} className="w-full  z-0" />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-2"></div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
              <a
                href="#slide3"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowLeft />
              </a>
              <a
                href="#slide1"
                className="btn btn-sm md:btn-lg btn-circle bg-primary/70 md:text-2xl text-accent border-none hover:bg-primary   "
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
