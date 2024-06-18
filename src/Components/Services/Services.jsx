import React, { useState } from "react";
import "./Services.css";
import "../../assets/uiux.jpg";

function Services() {
  const [content, setContent] = useState({
    title: "Ui Ux design",
    text: (
      <ul>
        <li>Visual design</li>
        <li>Motion design</li>
        <li>Brand architecture</li>
        <li>Esxibition design</li>
        <li>Productive Concept</li>
      </ul>
    ),
  });

  const contentOptions = [
    {
      title: "Development",
      text: (
        <ul>
          <li>Mobile Development</li>
          <li>PWA application</li>
          <li>Web refactoring</li>
          <li>System redesign</li>
          <li>Performance improvment</li>
        </ul>
      ),
      image: "../../assets/uiux.jpg",
    },
    {
      title: "Ui Ux design",
      text: (
        <ul>
          <li>Visual design</li>
          <li>Motion design</li>
          <li>Brand architecture</li>
          <li>Esxibition design</li>
          <li>Productive Concept</li>
        </ul>
      ),
      image: "../../assets/uiux.jpg",
    },
  ];

  const changeContent = (index) => {
    setContent(contentOptions[index]);
  };

  return (
    <div className="services">
      <div
        className="content-box"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <h1>{content.title}</h1>
        <p>{content.text}</p>
      </div>
      <div className="buttons">
        <button onClick={() => changeContent(0)}>Development</button>
        <button onClick={() => changeContent(1)}>Ui Ux design</button>
      </div>
    </div>
  );
}

export default Services;
