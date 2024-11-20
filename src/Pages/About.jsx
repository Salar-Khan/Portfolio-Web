import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { commentdata } from '../assets/Data'; // Assuming you have data for testimonials

const About = () => {
  return (
    <>
      <div className='w-11/12 mx-auto leading-8 mt-4 min-h-[90vh] bg-gray-50 md:mt-0'>
        {/* heading section */}
        <h1 className='text-5xl text-center font-extrabold text-gray-800'>
          About Me
        </h1>

        {/* introductory text */}
        <div className="mt-8 max-w-4xl mx-auto px-4 text-lg text-gray-700">
          <p>
            I am Nicolas Bravo, a passionate and driven web developer with a deep love for creating intuitive, user-friendly, and high-performance digital experiences. With several years of hands-on experience in front-end and back-end development, I have honed my skills in various technologies, including HTML, CSS, JavaScript, React, Node.js, and more. My journey in the tech world began with a fascination for how websites and applications come to life, and over time, this curiosity evolved into a dedicated pursuit of crafting seamless and impactful online solutions.
          </p>
          <p className="mt-4">
            I approach each project with the goal of not just meeting client expectations but exceeding them, ensuring the end product is not only functional but also visually engaging and easy to navigate. Throughout my career, I’ve had the privilege of working on a variety of projects, from small business websites to large-scale enterprise applications, collaborating with cross-functional teams to bring ideas to life.
          </p>
          <p className="mt-4">
            My dedication to continuous learning keeps me on the cutting edge of emerging technologies and best practices, ensuring that I’m always able to deliver modern, scalable solutions. Whether I’m tackling a complex problem or implementing a creative feature, I’m driven by the desire to create products that make a meaningful impact on users and businesses alike.
          </p>
        </div>

        {/* testimonial section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">What People Are Saying</h2>
          <div className="flex justify-center flex-wrap mt-8 gap-8 px-4">
            {commentdata.map((data) => (
              <div key={data.id} className="w-full sm:w-1/2 lg:w-1/3 p-4 transition-all duration-300 ease-in-out hover:scale-105">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center items-center">
                    <BiSolidQuoteLeft size={30} className="text-orange-500" />
                  </div>
                  <p className="italic text-lg text-gray-600 mt-4">{data.message}</p>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{data.name}</h3>
                    <p className="text-sm text-gray-500">{data.role}</p>
                  </div>
                  <div className="bg-orange-500 mt-4 p-0.5 rounded-b-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
