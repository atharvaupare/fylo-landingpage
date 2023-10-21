import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-accent pt-32">
      <div>
        <img src={logo} className="h-8"></img>
      </div>
    </div>
  );
};

export default Footer;
