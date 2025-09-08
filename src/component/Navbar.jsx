import React, { useState } from "react";
import { IoMenu,IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  
  return (
    
    <div className=" shadow-md h-20 w-full px-8 flex items-center justify-between sticky top-0 z-50"
      data-aos="fade-down" data-aos-duration="1000">
        <div className="text-white font-semibold text-3xl  ml-auto">Portfolio</div>
        <div className="  p-20 hidden md:flex gap-10  text-lg font-medium ">
          <Link to ="/" className="text-2xl">Home</Link>
          <Link to ="about" className="text-2xl">About</Link>
          <Link to ="skills" className="text-2xl">Skills</Link>
          <Link to ="project" className="text-2xl">Project</Link>
          <Link to ="contact" className="text-2xl">contact</Link>
        </div>
         {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </div>
       {/* Mobile Dropdown */}
      <div
        className={`fixed top-20 right-0 h-screen w-2/3 bg-gray-800 text-white flex flex-col gap-6 px-6 py-6 transition-transform duration-300 ease-in-out md:hidden  
          ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/" className="text-xl hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="text-xl hover:text-blue-400" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/skills" className="text-xl hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Skills
        </Link>
        <Link to="/project" className="text-xl hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Project
        </Link>
        <Link to="/contact" className="text-xl hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
      </div>
  );
};

export default Navbar;
