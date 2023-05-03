import React from "react";
import Laptop from "../assets/laptop2.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sequi minus voluptatem magnam neque error facere repellendus
            excepturi qui sunt! Dolores similique beatae rerum officiis eveniet
            ex dolore sapiente pariatur?
          </p>
          <button className="text-[#00df9a] bg-black w-[150px] rounded-md py-3 font-medium my-6 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;