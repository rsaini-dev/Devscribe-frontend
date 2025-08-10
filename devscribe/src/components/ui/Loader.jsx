import React from "react";
import { FaPenNib } from "react-icons/fa6";
import "../../assets/styles/Loader.css";

const DevScribeLoader = () => {
    const label = "Devscribe...";
  return (
      <div className="box-container">
      <FaPenNib className="mr-2 h-8 w-8" />
      <div className="label">
        {label.split("").map((char, index) => (
          <span key={index} className="char" style={{ animationDelay: `${index * 0.2}s` }}>
            {char}
          </span>
        ))}
      </div>
      
    </div>
  );
};

export default DevScribeLoader;
