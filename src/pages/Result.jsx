import React from "react";
import "./Result.css";

import { useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
  return (
    <div className="result-page">

      <div className="result-container">

        <p className="result-label">YOUR RESULT</p>

        <h1 className="result-type">ENFP</h1>

        <p className="result-description">
          You are a true free spirit—creative, enthusiastic, and supportive of others.
          You see life as full of possibilities and possess a profound ability to make
          connections between events and information very quickly. Your warmth and passion
          inspire those around you to explore their own potential and embrace change with an open heart.
        </p>

        <div className="divider"></div>

        <p className="retake" onClick={() => navigate("/")}>Retake Assessment</p>

      </div>

    </div>
  );
};

export default Result;