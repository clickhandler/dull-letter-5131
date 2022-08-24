import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "../Style/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div>
          <img
            src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/SparkAmerica2020-02-515x65.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="Links">
        <div>JOIN THE MOVEMENT</div>
        <div>PARTNERS</div>
        <div>CALENDER</div>
        <div>THE APP</div>
        <div>CONTACT US</div>
        <div>REGISTER</div>
        <div style={{ color: "#4267B2" }}>
          <FaFacebookSquare />
        </div>
        <div style={{ color: "#8a3ab9" }}>
          <FaInstagram />
        </div>
      </div>
    </>
  );
};

export default Navbar;