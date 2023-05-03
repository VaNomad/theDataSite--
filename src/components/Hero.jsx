import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH REACT, VITE & TAILWIND
        </p>
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Grow with libraries & frameworks
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-2xl text-xl font-bold py-4">
            Fast, flexible powering for
          </p>
          <Typed
            className="md:text-4xl sm:text-2xl text-xl font-bold text-[#f982eb] md:ps-4 ps-2"
            strings={["SPA", "E-COM", "AI"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">Use a reliable stack and stay away from bugs and surprises</p>
        <button className="bg-[#00df9a] text-black w-[150px] rounded-md py-3 font-medium my-6 mx-auto">Get Started</button>      
      </div>
    </div>
  );
};

export default Hero;