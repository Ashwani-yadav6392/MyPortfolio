import React from "react";

const Skills = () => {
  return (
    <div className="h-[80%] w-[100%]">
      {/* Heading */}
      <div>
      <h1 className="text-4xl font-semibold mb-10 text-center  ">
        <span className="text-cyan-400 mt-15">My</span> Skills </h1>
          <div className="  grid grid-cols-4 gap-5 mt-15 justify-items-center  h-[80%] w-[90%] ml-20 ">
            <div>
                <img className="h-[200px] w-[200px]" data-aos="fade-right"data-aos-duration="3000" src="public\assets\Logo\html.png" alt="" />
            </div>
            <div>
              <img className="h-[200px] w-[200px]"  data-aos="flip-left"data-aos-duration="3000" src="public\assets\Logo\css.png" alt="" />
            </div>
            <div><img className="h-[200px] w-[200px] " data-aos="flip-left"data-aos-duration="3000" src="public\assets\Logo\js.png" alt="" /></div>
            <div><img className="h-[200px] w-[200px] " data-aos="flip-left"data-aos-duration="3000"  src="public\assets\Logo\react.png" alt="" /></div>
            <div><img className="h-[200px] w-[200px] " data-aos="fade-up-right"data-aos-duration="3000" src="public\assets\Logo\Java.png" alt="" /></div>
            <div><img className="h-[200px] w-[200px] "data-aos="flip-left"data-aos-duration="3000" src="public\assets\Logo\Python.png" alt="" /></div>
            <div><img className="h-[200px] w-[200px] "data-aos="flip-left"data-aos-duration="3000" src="public\assets\Logo\boot.png" alt="" /></div>
            <div><img className="h-[200px] w-[200px] " data-aos="fade-up-left"data-aos-duration="3000" src="public\assets\Logo\tailwind.png" alt="" /></div>
          </div>
      </div> 
    </div>
  );
};

export default Skills;
