import React from "react";
import logo from "../../../logo.svg";
import './Welcome.css'
const Welcome = () => {
  return (
    <>
      <div className="company_logo">
        <img src={logo} alt="Fintek Digital Logo" />
      </div>
      <div className="left_text">
        Use our weather app to see the weather around the world
      </div>
    </>
  );
}

export default Welcome;
