import React from "react";
import ProfileCard from "./ProfileCard";
import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";

const Testimonials = () => {
  const profiles = [
    {
      imageSrc: profile1,
      name: "Satish Patel",
      title: "Founder & CEO, Huddle",
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine.",
    },
    {
      imageSrc: profile2,
      name: "Bruce McKenzie",
      title: "Founder & CEO, Huddle",
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      imageSrc: profile3,
      name: "Iva Boyd",
      title: "Founder & CEO, Huddle",
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine.",
    },
  ];

  return (
    <div className="testimonials px-4 py-6 flex items-center justify-center flex-col gap-6 md:flex-row md:px-36 ">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          imageSrc={profile.imageSrc}
          name={profile.name}
          title={profile.title}
          description={profile.description}
        />
      ))}
    </div>
  );
};

export default Testimonials;
