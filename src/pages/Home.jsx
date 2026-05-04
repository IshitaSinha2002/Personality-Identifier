import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Hero */}
      <div className="hero">
        <h1 className="hero-title">Personality Identifier</h1>
        <p className="hero-subtitle">
          Discover the colors of your unique psychological blueprint.
        </p>

        <button className="cta-btn" onClick={() => navigate("/test")}>Take Test</button>
      </div>

      {/* Instructions Card */}
      <div className="card">
        
        <div className="card-left">
          <p className="methodology">METHODOLOGY</p>
          <h2 className="instructions-title">Instructions</h2>
        </div>

        <div className="card-right">
          <p className="desc">
            For every question, choose the response that best reflects your natural tendencies.
            Your results are calculated based on the following scale:
          </p>

          <div className="scale">
            <div className="scale-box sd">
              <span>1</span>
              <p>Strongly Disagree</p>
            </div>

            <div className="scale-box d">
              <span>2</span>
              <p>Disagree</p>
            </div>

            <div className="scale-box n">
              <span>3</span>
              <p>Neutral</p>
            </div>

            <div className="scale-box a">
              <span>4</span>
              <p>Agree</p>
            </div>

            <div className="scale-box sa">
              <span>5</span>
              <p>Strongly Agree</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;