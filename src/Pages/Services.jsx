import React from "react";
import { cardData } from "../assets/Data";
import CardService from "../Components/CardService";

const Services = () => {
  return (
    <>
      <section className="w-11/12 mx-auto p-6  min-h-[80vh] ">
        <h1 className="text-4xl text-center font-bold mb-12">Services</h1>
        <div className=" flex flex-col md:flex-row justify-center items-center">
          {cardData.map((data) => (
            <CardService
              key={data.id}
              icon={data.icon}
              field={data.field}
              description={data.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
