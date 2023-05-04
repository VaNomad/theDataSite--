import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full px-4 py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 me-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="flex rounded-md p-3 w-full text-black" type="email" placeholder="Enter your email" />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 mx-auto">Notify Me</button>
          </div>
          <div className="">
            <p>We care about the protection of your data.{" "}<span className="text-[#00df9a] underline">Read our Privacy Policy</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
