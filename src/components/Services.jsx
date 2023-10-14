import React from "react";
import Feature from "./Feature";
import accessyourfiles from "../assets/images/icon-access-anywhere.svg";
import anyfilestorage from "../assets/images/icon-any-file.svg";
import collaborate from "../assets/images/icon-collaboration.svg";
import security from "../assets/images/icon-security.svg";

const Services = () => {
  const features = [
    {
      iconSrc: accessyourfiles,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      iconSrc: security,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      iconSrc: collaborate,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      iconSrc: anyfilestorage,
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <div className="bg-secondary px-6 text-white py-20">
      <div className="flex flex-col items-center justify-center gap-20">
        {features.map((feature, index) => (
          <Feature
            key={index}
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
