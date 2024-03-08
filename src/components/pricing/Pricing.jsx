import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container" id="pricing">
      <div className="pricing-header">
      </div>
      <div className="pricing">
        <div className="price-card">
          <span>Excellence</span>
          <div className="features">
            <div className="feature">
              <label>Crafting exceptional experiences, we surpass expectations through a passion for perfection and meticulous attention to detail.</label>
            </div>
          </div>
        </div>
        <div className="price-card">
          <span>Professionalism</span>
          <div className="features">
            <div className="feature">
              <label>We deliver top-notch service, and handle requests with expertise, ensuring your journey is smooth and hassle-free.</label>
            </div>
          </div>
        </div>
        <div className="price-card">
          <span>Expertise</span>
          <div className="features">
            <div className="feature">
              <label>Our intimate knowledge of destinations worldwide allows us to craft tailored, extraordinary journeys.</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
