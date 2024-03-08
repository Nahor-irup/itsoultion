import React from "react";
import Header from "../header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div className="main" id="home">
      <div className="left-h">
        <Header />
        <div className="main-text">
          <div>
            <span className="stroke-text glow">IT</span>
          </div>
          <div>
            <span className="glow">Solution.</span>
          </div>
          <div className="main-quotes glow">
            <span>Empowering Futures, Crafting Solutions: ITSolution, Where Goals Meet Precision for Business Success!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
