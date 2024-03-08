import React from "react";
import "./Service.css";
import Printer from "../../assets/images/services/printer.jpeg"
import Cctv from "../../assets/images/services/cctv.jpeg"
import Mobile from "../../assets/images/services/mobile.jpeg"
import Desktop from "../../assets/images/services/desktop.jpeg"
const Service = () => {
  return (
    <div className="service" id="service">
      <div className="service-header">
        <span>Services</span>
      </div>
      <div className="service-category">
        <div className="category">
          <img src={Desktop} alt=""/>
          <span>All PC & Laptop Repair</span>
          <span>
          We fix and make your computers and laptops work like new, handling everything from minor issues to major repairs.
          </span>
        </div>
        <div className="category">
          <img src={Cctv} alt="" />
          <span>CCTV Camera Management</span>
          <span>
            Efficient management and maintenance of CCTV cameras for enhanced security and surveillance.
          </span>
        </div>
        <div className="category">
          <img src={Printer} alt="" />
          <span>Printer Service & Repairing</span>
          <span>
          Expert service and repair for printers, making sure your printing needs are always in top-notch condition.
          </span>
        </div>
        <div className="category">
          <img src={Mobile} alt="" />
          <span>Android Mobile Service & Repair</span>
          <span>
            Professional service and repair for Android mobile phones, ensuring they run smoothly and stay in optimal condition.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
