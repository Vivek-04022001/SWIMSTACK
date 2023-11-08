import { useState } from "react";
import aboutImage from "../assets/about.jpg";
const About = () => {
  return (
    <section id="about">
      <div className=" container max-w-6xl  mx-auto px-3 py-0 md:py-6 mb-20">
        <div className="flex-col font-about">
          {/* main headline */}
          <div className="text-black text-4xl md:text-6xl text-center capitalize space-y-8">
            <h3 className="bg-secondary inline px-12 py-2 rounded-full border-2 border-secondary hover:bg-primary text-3xl">
              About Us
            </h3>
            <h4>grow your career with us</h4>
          </div>
          {/* image and text container */}
          <div className="flex flex-col md:flex-row mt-12 gap-6">
            {/* image container */}
            <div className="group relative md:w-1/2 w-full md:rounded-2xl md:border border-black overflow-hidden p-0  md:p-4 shadow-lg">
              <img
                src={aboutImage}
                alt="about-image"
                className="group w-full h-full object-cover group-hover:scale-110 transition-hover duration-500 ease-in-out"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-accent/50 group-hover:opacity-10 "></div>
            </div>
            {/* text content */}
            <div className="w-full md:w-1/2 font-about-text space-y-4 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl tracking-wider text-black">
                Welcome Scholars,
              </h3>
              <div className="hidden md:block text-black text-lg md:text-xl leading-66 space-y-4">
                <p>
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  is renowned for its commitment to providing internships to
                  individuals with diverse backgrounds, both technical and
                  non-technical.
                </p>
                <p>
                  Our primary mission is to prepare students for success,
                  helping them achieve their life goals.
                </p>
                <p>
                  We are dedicated to supporting those who aspire to develop
                  their skills, including students from Tier-3 colleges.
                </p>
                <p>
                  Recognizing the challenges students face due to limited
                  resources, we strive to bridge the gap, ensuring they are
                  well-prepared for their future careers.
                </p>
                <p>
                  Our goal is to grow and evolve alongside individuals who are
                  eager to learn, helping them become the best possible version
                  of themselves."
                </p>
                <p>
                  This version incorporates the name{" "}
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  while maintaining the welcoming and supportive tone of the
                  text.
                </p>
              </div>

              {/* short version */}
              <div className="md:hidden text-black text-lg md:text-xl space-y-4">
                <p>
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  Swim Stack offers diverse internships for technical and
                  non-technical backgrounds, empowering students to achieve
                  their goals. We support aspiring individuals, including Tier-3
                  college students, bridging the resource gap and preparing them
                  for future careers. Join us on a journey of learning and
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
