import React, { lazy } from "react";
import ajay from "../assets/ajay.jpg";

import { TypeAnimation } from "react-type-animation";


const Hero = () => {

  return (
    <section className="min-h-screen bg-[#1A1A1A] text-[#E0E0E0] pt-32 md:pt-24 lg:pt-0  md:flex items-center justify-center ">
      <div className="px-4 sm:px-6  lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-[#00FFAA]">AJAY</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000, // Pause for 1 second
                "", // Erase the text
                500, // Pause before retyping
              ]}
              speed={20}
              repeat={Infinity}
            />
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-[#A0A0A0] mb-8 max-w-md mx-auto lg:mx-0">
            Building dynamic, scalable web applications with MongoDB,
            Express.js, React, and Node.js.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
            <a
              href="#projects"
              className="bg-[#6fa895] text-[#1A1A1A] font-bold px-6 py-3 rounded-full  hover:bg-[#80ffd5] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#00FFAA] text-[#00FFAA] px-6 py-3 rounded-full font-bold hover:bg-[#6fa895] hover:text-[#1A1A1A] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 m-5 flex justify-center">
          <img
            src={ajay}
            loading={lazy}
            alt="Developer writing  code"
            className=" max-w-sm rounded-4xl h-56 w-80 lg:h-84  lg:w-96  object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
