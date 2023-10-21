import React from "react";

const Feature = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <img src={iconSrc} alt={title} className="mx-auto" />
      <p className="font-semibold text-xl">{title}</p>
      <p className="text-sm px-4">{description}</p>
    </div>
  );
};

export default Feature;
