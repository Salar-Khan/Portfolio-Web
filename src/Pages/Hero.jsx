import React from "react";
import Navbar from "../Components/Navbar";
import hero from "../assets/Images/Hero .png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto  bg-slate-50  min-h-[90vh]">
        <div className="w-full flex flex-wrap items-center justify-between md:flex-row">
          <div className="md:w-1/2 leading-8 mx-auto p-4">
            <p className="md:mb-10 mt-3 md:mt-0 mb-4 text-orange-600 text-xl">
              Hello Welcome
            </p>
            <h1 className="text-5xl font-bold pb-5 ">
              {" "}
              I am Nicolas <span className="text-orange-500">Bravo</span>
            </h1>
            <p className="text-gray-600">
              From interactive websites to full-stack applications, I specialize
              in building clean, responsive, and user-friendly solutions. I use
              the latest web technologies like HTML, CSS, JavaScript, React, and
              Node.js to bring your ideas to life.I approach each project with
              the goal of not just meeting client expectations but exceeding
              them, ensuring the end product is not only functional but also
              visually engaging and easy to navigate.
            </p>
            <button className="primary-btn mt-3">Contact</button>
          </div>
          <div className="md:w-1/2 p-4 mx-auto ">
            <img src={hero} className="w-[500px] pl-4 md:pl-8" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
