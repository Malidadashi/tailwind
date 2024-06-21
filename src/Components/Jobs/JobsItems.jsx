import React from "react";
import "./JobsItems.css";

const JobsItems = ({ icon, title, text, imageSrc }) => {
  return (
    <div className="items">
      <span
        className="item-overlay"
        style={{ backgroundImage: `url(${imageSrc})` }}></span>
      <div>
        {icon}
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default JobsItems;
