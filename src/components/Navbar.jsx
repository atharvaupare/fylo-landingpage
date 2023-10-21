import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center flex-row justify-between py-6 pb-16 md:p-16">
      <img src={logo} className="h-8 md:h-14"></img>
      <div className="flex flex-row gap-4 text-white text-base font-normal ">
        <div>
          <a href="#">Features</a>
        </div>
        <div>
          <a href="#">Team</a>
        </div>
        <div>
          <a href="#">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
