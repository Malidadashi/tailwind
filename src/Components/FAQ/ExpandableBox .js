import React, { useState } from "react";
import "./FAQ.css"; // Import your CSS for styling

const ExpandableBox = ({ title, text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-box ${expanded ? "expanded" : ""}`}>
      <div className="box-header" onClick={toggleExpanded}>
        <h3>{title}</h3>
        <div className={`icon icon-chevron ${expanded ? "expand" : ""}`}>
          &#9654;
        </div>
      </div>
      <div className="box-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ExpandableBox;
