import React from "react";
import pdf from '../pdf/Ashwani yadav.pdf'


const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 h-[100%] w-[100%] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-40"
    >
      {/* Left: Profile Image */}
      <div
        data-aos="fade-right"
        className=" h-[400px] w-[400px] rounded-2xl overflow-hidden shadow-lg border-4  border-blue-500">
        <img src="public\assets\Logo\tony.jpg" alt="" className="w-[360] h-[350] object-cover " />
      </div>

      {/* Right: About Content */}
      <div data-aos="fade-left"data-aos-duration="3000" className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-2xl leading-7 mb-4 text-gray-300 ">
          Hi, I'm <span className="font-semibold text-white">Ashwani Yadav</span>, 
          a passionate Web Developer specializing in creating responsive and 
          interactive web applications. I enjoy solving problems and bringing 
          ideas to life with clean, efficient code.
        </p>
        <p className="text-2xl leading-7 text-gray-300 mb-6">
          My expertise lies in <span className="text-blue-400">React, Tailwind CSS, and Java</span>. 
          Currently, I am learning advanced concepts in full-stack development 
          to expand my skillset and build scalable applications.
        </p>

        {/* Buttons */}
        <div className="flex gap-6">
          <a href={pdf} download="resume.pdf" className="px-2 mt-8 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition"
       >Download Resume</a>
         
          <a
            href="#contact"
            className="mt-8 px-6 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
