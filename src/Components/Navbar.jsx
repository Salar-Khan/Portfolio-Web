import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className="p-3">
        <div className="flex  justify-between items-center">
          <div className="text-4xl font-extrabold">DEV</div>
          {/* Desktop navigation */}
          <ul className="hidden md:flex">
            <li className=" m-2 font-medium p-2 rounded-lg transition-all ease-in-out duration-300 hover:bg-orange-600 hover:text-white">
              <FaFacebook size={30} />
            </li>
            <li className=" m-2 font-medium p-2 rounded-lg transition-all ease-in-out duration-300 hover:bg-orange-600 hover:text-white">
              <FaLinkedin size={30} />
            </li>
            <li className=" m-2 font-medium p-2 rounded-lg transition-all ease-in-out duration-300 hover:bg-orange-600 hover:text-white">
              <FaXTwitter size={30} />
            </li>
            <li className=" m-2 font-medium p-2 rounded-lg transition-all ease-in-out duration-300 hover:bg-orange-600 hover:text-white">
              <GrInstagram size={30} />
            </li>
          </ul>
          {/* Mobile */}
          <div className="flex items-center ">
            <div className="md:hidden" onClick={handelOpen}>
              {isOpen ? <RxCross2 size={25} /> : <FaBars size={25} />}
            </div>
          </div>
        </div>
        <ul
          className={`md:hidden  ${
            isOpen
              ? `bg-orange-400 flex justify-center text-center mt-2 text-white transition-all ease-in-out duration-300   p-2 `
              : `fixed left-[-100%]`
          }`}
        >
          <li className="m-4 font-medium text-center">
            <FaFacebook size={30} />
          </li>
          <li className="m-4 font-medium">
            <FaLinkedin size={30} />
          </li>
          <li className="m-4 font-medium">
            <FaXTwitter size={30} />
          </li>
          <li className="m-4 font-medium">
            <GrInstagram size={30} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
