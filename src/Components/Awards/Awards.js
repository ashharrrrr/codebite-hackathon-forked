import React from "react";

import Screen from "../../assets/screen-updated.png";
import ShowcaseVideo from "../../assets/showcase-video.mp4";

import "./Awards.css";

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-heading">Connecting isn't hard anymore.</div>
      <div className="cards">
        <div className="ai-card">
          <h2 className="card-heading">Powered by AI</h2>
          <p className="card-paragraph">
            Our experts have developed machine learning models that can help you
            find the team you need, within a few clicks. Compare teams and
            professionals side by side using hundreds of parameters.
          </p>
        </div>
        <div className="award-cards">
          <div className="award-card">
            <div className="award-text">200+</div>
            <div className="award-subtext">Awards</div>
          </div>
          <div className="award-card">
            <div className="position-text">2nd place</div>
            <div className="award-subtext">Best startups of the year</div>
          </div>
          <div className="award-card">
            <div className="freelancer-text">10,000+</div>
            <div className="award-subtext">Freelancers</div>
          </div>
          <div className="award-card">
            <div className="percent-text">100%</div>
            <div className="award-subtext">Commitment</div>
          </div>
        </div>
      </div>
      <div className="showcase">
        <div className="showcase-text">
          <div className="showcase-heading">A little insight into our work</div>
          <div className="showcase-paragraph">
            Take a look at how you can access the most prized features of our
            company.
          </div>
        </div>
        <div className="screen-container">
          <img src={Screen} className="screen" />
          <video
            className="showcase-background"
            src={ShowcaseVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Awards;
