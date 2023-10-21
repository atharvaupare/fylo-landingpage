import React from "react";
import Navbar from "./Navbar";
import mainphoto from "../assets/images/illustration-intro.png";
import Button from "./Button";
import curvymobile from "../assets/images/bg-curvy-mobile.svg";

const Hero = () => {
  return (
    <div className="max-h-screen bg-primary relative pb-20">
      <img
        src={curvymobile}
        className="w-[150%] absolute left-0 bottom-0"
        alt="Curvy Mobile"
      />
      <div className="px-6">
        <Navbar />
        <div className="flex items-center justify-center">
          <img src={mainphoto} className="mb-5 z-10" alt="Main Photo" />
        </div>

        <div className="flex items-center flex-col text-white text-center gap-4">
          <div className="mx-auto text-2xl font-extrabold leading-12 w-[75%] pb-2 z-10 md:text-3xl md:w-[45%]">
            All your files in one secure location, accessible anywhere.
          </div>
          <div className="text-sm leading-5 w-[90%] z-10 md:w-[50%]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </div>
          <Button className="py-2.5 w-[65%] md:w-[15%]">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
