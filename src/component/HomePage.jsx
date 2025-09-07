import React from 'react'
import pdf from '../pdf/Ashwani yadav.pdf'
import { ReactTyped } from "react-typed";
import Navbar from './Navbar';
import About from './About';



const HomePage = () => {
   
  return (
    <>
      <div className="container home" >
        <div className="fade-up-right" data-aos="fade-down" data-aos-duration="1000">
          <h3>Hello,It'me</h3>
          <h1 className='text-2xl '>Ashwani Yadav</h1>
            <ReactTyped className='text-3xl font-semibold text-cyan-300'
            strings={[
                "I am  Full Stack Developer",
                "And I am Web Designer"
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
            />
             
            <br /><br />
            <a href={pdf} download="resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
            <div className='img' data-aos="fade-up-left" data-aso-duration="1000">
                <img src="public\assets\Logo\tony.jpg" alt="" />
            </div>
        </div>
      </div>
     
    </>
  )
}

export default HomePage
