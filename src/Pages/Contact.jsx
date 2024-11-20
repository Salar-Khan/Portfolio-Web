
import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
const Contact = (e) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
//Enter your own ServiceID, TemepelatID ,PublickId via Emailjs
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };
  return (
    <section className="min-h-[90vh] mt-4 w-11/12 mx-auto py-12 bg-gray-50">
      <h1 className="text-4xl text-center font-bold mb-12">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 m-4">
        {/* left  */}
        <div className="flex flex-col justify-center">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>

            <input
              type="text"
              className="w-full p-3 m-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Name"
            />

            <input
              type="text"
              className="w-full p-3 m-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Topic"
            />

            <textarea
              className="w-full p-3 m-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 m-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* right */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
            Let's Collaborate and Improve Together!
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
            As a web developer, my primary goal is to create efficient,
            user-friendly, and visually appealing web experiences. I’m always
            looking for ways to improve my work, and your feedback is invaluable
            in helping me achieve that. Whether you're a fellow developer, a
            client, or just someone interested in the web, feel free to reach
            out. I value communication and am always open to discussions about
            new projects, challenges, or just exploring the latest web
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
