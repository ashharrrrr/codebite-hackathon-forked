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
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </nav>

      <motion.div className="headings">
        <motion.h2
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          Industry experts within your
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          viewport={{ once: true }}
        >
          Fingertips
        </motion.h1>
      </motion.div>
    </main>
  );
};

export default Hero;
