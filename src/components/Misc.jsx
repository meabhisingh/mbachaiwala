import React from "react";
import logo from "../assets/logo.png";
import { BsMouse } from "react-icons/bs";

const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" data-cursorpointer={true} />
      </a>
      <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRANCHISE
      </a>

      <BsMouse className="scrollBtn" data-cursorpointer={true} />
    </>
  );
};

export default Misc;
