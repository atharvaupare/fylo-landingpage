import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-accent pt-32 pb-10 px-8">
      <div className="pb-6 md:px-20">
        <img src={logo} className="h-18"></img>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-evenly">
        <div className="info md:w-[20%]">
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="email">
          <p className="text-[14px]">example@fylo.com</p>
        </div>
        <div className="contact ">
          <p className="text-base font-sans">+1-543-123-4567</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px]">About Us</p>
          <p className="text-[14px]">Jobs</p>
          <p className="text-[14px]">Press</p>
          <p className="text-[14px]">Blog</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px]">Contact Us</p>
          <p className="text-[14px]">Terms</p>
          <p className="text-[14px]">Privacy</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px]">Dont Contact Us</p>
          <p className="text-[14px]">No Terms</p>
          <p className="text-[14px]">No Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
