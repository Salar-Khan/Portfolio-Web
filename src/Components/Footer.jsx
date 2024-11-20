import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="font-thin text-center p-4 mb-7">
      &#169;Copyrights reserved{" "}
      <span className="text-orange-600">{date.getFullYear()}</span>
    </div>
  );
};

export default Footer;
