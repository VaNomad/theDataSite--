import React from "react";
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    // Section Div 
    <div className="bg-white w-full py-[10rem] px-[3rem] md:px-1 text-black">
      {/* Container */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Card Left */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto">
            Start Trial
          </button>
        </div>
        {/* Card Middle */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">2 Users</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto">
            Start Trial
          </button>
        </div>
        {/* Card Right */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">3 Users</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto">
            Start Trial
          </button>
          <div className=""></div>
        </div>

      </div>
    </div>
  );
};

export default Cards;