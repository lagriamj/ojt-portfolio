/* eslint-disable react/prop-types */
import React, { useState } from "react";

const HoverCard = ({ image, title, url, technologies, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative w-[350px] h-[250px] bg-white rounded-md overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-0 transition duration-300 ease-in-out ${
          isHovered ? "opacity-70" : ""
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white transition duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <a
          href={url}
          className="bg-red-500 rounded-xl px-3 py-2 my-4 hover:opacity-85"
          target="_blank"
        >
          Source Code
        </a>
        <ul className="flex items-center justify-center text-center gap-6 absolute bottom-10 list-disc w-full">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
};

export default HoverCard;
