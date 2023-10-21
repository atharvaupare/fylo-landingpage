import React from "react";

const ProfileCard = ({ imageSrc, name, title, description }) => {
  return (
    <div className="bg-primary w-[85%] flex flex-col gap-4 px-2 py-4 rounded-md shadow-md">
      <p className="text-[14px] ">{description}</p>
      <div className="flex items-center gap-2">
        <img src={imageSrc} className="max-h-8 rounded-full" alt={name} />
        <div>
          <p className="text-[16px] font-semibold">{name}</p>
          <p className="text-[14px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
