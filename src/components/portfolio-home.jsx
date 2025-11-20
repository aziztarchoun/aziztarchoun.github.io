import React from "react";
import "./portfolio-home.css";
import Canvas from "./canvas";

const PortfolioHome = () => {
  return (
    <div className="portfolio-hero">
      <header className="hero-content">
        <h1>
          Hello, I'm{" "}
          <span className="accent">&#123; aziz_tarchoun &#125;;</span>
        </h1>
        <p className="subtitle">
          A passionate developer building modern web experiences.
        </p>
        <Canvas />
      </header>
    </div>
  );
};

export default PortfolioHome;
