import React from "react";
import stayProd from "../assets/images/illustration-stay-productive.png";
import arrowsvg from "../assets/images/icon-arrow.svg";

const StayProductive = () => {
  return (
    <div className="bg-secondary px-6 py-4 md:px-36">
      <div className="flex flex-col gap-4 items-center justify-content text-white md:flex-row md:gap-8 ">
        <div>
          <img src={stayProd} className="p-2"></img>
        </div>
        <div className="prod-card flex flex-col gap-2 md:gap-4">
          <h2 className="font-semibold text-xl md:text-3xl md:font-extrabold md:w-[50%] ">
            Stay productive, wherever you are
          </h2>
          <p className="text-sm">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-sm">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <div className="flex items-center">
            <span className="border-b border-[#339ecc] ">
              See how Fylo works
            </span>
            <img src={arrowsvg} alt="Arrow Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayProductive;
