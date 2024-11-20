import React from "react";

const CardService = ({ field, description, icon: Icon }) => {
  return (
    <div className="hover:shadow-slate-900 p-3 shadow-lg m-3 rounded-lg min-h-[300px] flex flex-col justify-between w-[320px] md:w-[380px] sm:w-full items-center">
      <div className="m-7">
        <Icon className="text-orange-600" size={50} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-center">{field}</h1>
        <p className="font-light text-center overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
      <div className="bg-orange-600 p-0.5 w-full rounded-b-lg"></div>
    </div>
  );
};

export default CardService;
