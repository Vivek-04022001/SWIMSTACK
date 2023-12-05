import { useState } from "react";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";
import home4 from "../assets/home-4.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const images = [home1, home2, home3, home4];
  const [index, setIndex] = useState(0);
  const handleIndex = (e) => {
    const btn_id = e.target.id;
    console.log(btn_id);
  
    // handle next click
    if (btn_id === "next") {
      setIndex((index) => (index === 3 ? 0 : index + 1));
    }
  
    // handle previous click
    if (btn_id === "prev") {
      setIndex((index) => (index === 0 ? 3 : index - 1));
    }
  
    console.log(index);
  };
  const textMessage = [
    "Navigating Your Career Journey with Swim Stack",
    "Swim Your Way to Success with Swim Stack",
    "Dive Deep, Reach High with Swim Stack",
    "Helping You Navigate the Waters of Success",
  ];

  return (
    <section id="home">
      <div className=" mx-auto pt-10">
        {/* Carousel Container */}
        <div className="carousel w-full">
        
          <div className="carousel w-full">
            {/* slides-section */}
            <div className="carousel-item relative w-full min-h-[50dvh]">
              <div className="relative">
                <img
                  src={images[index]}
                  className="h-full md:w-full z-0 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-2"></div>
                {/* text content */}
                <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center gap-y-10">
                  <h3 className="px-2 md:px-0 md:max-w-3xl text-center text-4xl md:text-6xl  font-bold text-primary tracking-wider">
                    {textMessage[index]}
                  </h3>
                  <div className="flex gap-4 ">
                    <button className="px-4 py-3 md:px-8 md:py-3 text-sm md:text-lg uppercase bg-secondary/90 font-bold hover:bg-secondary text-primary">
                      Contact Us
                    </button>
                    <button className="px-4 py-3 text-sm md:text-lg md:px-8 md:py-3 uppercase bg-primary/90 font-bold text-black hover:bg-primary">
                      Apply Here
                    </button>
                  </div>
                </div>
              </div>
              {/* desktop buttons */}
              <div className="hidden  absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                <button
                  href="#"
                  id="prev"
                  onClick={handleIndex}
                  className="btn btn-sm md:btn-lg btn-circle bg-transparent  md:text-2xl text-primary border-primary hover:bg-secondary/50 hover:text-primary hover:border-none"
                >
                  <AiOutlineArrowLeft />
                </button>
                <button
                  href="#"
                  id="next"
                  onClick={handleIndex}
                  className="btn btn-sm md:btn-lg btn-circle bg-transparent  md:text-2xl text-primary border-primary hover:bg-secondary/50 hover:text-primary  hover:border-none"
                >
                  <AiOutlineArrowRight />
                </button>
              </div>
              {/* mobile buttons */}
              <div className="md:hidden absolute  flex gap-4 p-4 justify-between transform bottom-0 left-1/2 -translate-x-1/2 z-10">
                <button
                  id="prev"
                  onClick={handleIndex}
                  className="btn btn-sm  btn-circle bg-primary text-accent border-none    "
                >
                  <AiOutlineArrowLeft />
                </button>
                <button
                  id="next"
                  onClick={handleIndex}
                  className="btn btn-sm btn-circle bg-primary text-accent border-none     "
                >
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* next container */}
      </div>
    </section>
  );
};

export default Home;
