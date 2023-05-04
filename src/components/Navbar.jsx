import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    // Navbar
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex">
        <h1 className="w-full text-3xl font-bold ps-2 text-[#00df9a]">REACT.</h1>
        <h1 className="w-full text-3xl font-bold text-[#f982eb]">Vite.</h1>
        <h1 className="w-full text-3xl font-bold text-[#efe96b]">Tailwind.</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      {/* Mobile Menu Icon */ }
      <div onClick={handleNav} className="block md:hidden cursor-pointer hover:scale-125 duration-75">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
      </div>
      {/* Mobile Menu */}
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed top-[-100%] left-0 w-[60%] ease-in duration-300"}>
        <div className="flex flex-col m-4">
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <h1 className="w-full text-3xl font-bold text-[#f982eb]">Vite.</h1>
          <h1 className="w-full text-3xl font-bold text-[#efe96b]">
            Tailwind.
          </h1>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
