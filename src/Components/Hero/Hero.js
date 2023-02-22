import React from "react";

import { motion } from "framer-motion";

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

      <motion.div
        className="headings"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2>Industry experts within your</h2>
        <h1>Fingertips</h1>
      </motion.div>
    </main>
  );
};

export default Hero;
