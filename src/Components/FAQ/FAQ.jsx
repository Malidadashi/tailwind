import React from "react";
import ExpandableBox from "./ExpandableBox ";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="app">
      <ExpandableBox
        title="Box 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ExpandableBox
        title="Box 2"
        text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ExpandableBox
        title="Box 3"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default FAQ;
