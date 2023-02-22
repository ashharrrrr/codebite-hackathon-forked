import React, { useEffect } from "react";

import "./App.css";

import Hero from "./Components/Hero/Hero";

function App() {
  useEffect(() => {
    const trailer = document.querySelector("#trailer");

    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;

      const x = clientX - trailer.offsetWidth / 2;
      const y = clientY - trailer.offsetHeight / 2;

      trailer.animate(
        {
          transform: `translate(${x}px, ${y}px)`,
        },
        { duration: 4000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <React.Fragment>
      <div id="trailer"></div>
      <Hero />
    </React.Fragment>
  );
}

export default App;
