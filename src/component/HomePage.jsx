import React from "react";
import { ReactTyped } from "react-typed";
import { FaFacebook } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="container home">    
        <div className="left" 
          data-aos="fade-down"
          data-aos-duration="1000">
          <h3 className="text-3xl">Hello,It'me</h3>
          <h1 className="text-2xl ">Ashwani Yadav</h1>
          <h2 className="text-3xl font-semibold text-cyan-300 flex">
           And I'm&nbsp;
          <ReactTyped 
            className="text-3xl font-semibold text-cyan-300"
            strings={["Java Full Stack Developer","Web Designer"]}
            typeSpeed={60}
            backSpeed={40}
            loop/>
            </h2>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aso-duration="1000">
            <img src="public\assets\Logo\tony.jpg" alt="" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
