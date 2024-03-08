import React from "react";
import "./About.css";
import AboutImg from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="left-a">
          <img className="left-a-img" src={AboutImg} alt="" />
        </div>
        <div className="right-a">
          <span>About Us</span>
          <p>
          We're here to make your tech life hassle-free! From setting up CCTV cameras, printers, and large organization PC systems to rescuing lost Android data and servicing laptops at unbeatable prices, we've got it all covered. Our dedication to quality, hard work, and ethical practices ensures that every solution we provide is crafted uniquely for you. At IT Solution, we prioritize your success, combining talent, training, and advice to deliver customized solutions, no matter the scale of your project. Trust us for seamless integration, timely results, and a team of expert practitioners ready to exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
