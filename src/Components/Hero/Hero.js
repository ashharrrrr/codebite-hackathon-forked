import React, { useEffect } from "react";

import "./Hero.css";
import Logo from "../../assets/gem-regular.svg";

const Hero = () => {
  return (
    <main className="hero-background">
      <nav>
        <img src={Logo} />
        <ul>
          <li>
            <a>Sign Up</a>
          </li>
          <li>
            <a>Log In</a>
          </li>
        </ul>
      </nav>

      <div className="headings">
        <h2>Industry experts within your</h2>
        <h1>Fingertips</h1>
      </div>
    </main>
  );
};

export default Hero;
