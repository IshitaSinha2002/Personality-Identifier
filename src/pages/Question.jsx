import React from "react";
import "./Question.css";

import { useNavigate } from "react-router-dom";

const QuestionBlock = ({ title, color, questions }) => {

  return (
    <div className="trait-section">
      <div className="trait-header">
        <div className="trait-bar" style={{ background: color }}></div>
        <h2>{title}</h2>
      </div>

      <div className="question-card" style={{ borderTop: `3px solid ${color}` }}>
        
        {questions.map((q, index) => (
          <div key={index} className="single-question">

            <p className="question-text">{q}</p>

            <div className="scale-row">
              <span className="scale-label">STRONGLY DISAGREE</span>

              <div className="circles">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="circle">{num}</div>
                ))}
              </div>

              <span className="scale-label">STRONGLY AGREE</span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

const Question = () => {
    const navigate = useNavigate();
  return (
    <div className="question-page">

      {/* Header */}
      <div className="header">
        <p className="header-text"><b>
            Please answer all 30 questions honestly. Your data is used to generate a
            comprehensive psychological profile across five primary dimensions.</b>
        </p>
      </div>

      {/* Progress */}
      <div className="progress-card">
        <span>Assessment Progress</span>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <span className="remaining">30 Questions Remaining</span>
      </div>

      {/* Questions */}
      <QuestionBlock
        title="Openness to Experience"
        color="#3B82F6"
        questions={["I have a vivid imagination.",
            "I enjoy trying new things.",
            "I have a rich vocabulary.",
            "I spend time reflecting on ideas.",
            "I am not interested in abstract ideas. (R),",
            "I avoid philosophical discussions. (R)."
        ]}

      />

      <QuestionBlock
        title="Conscientiousness"
        color="#D97706"
        questions={["I am always prepared.",
            "I pay attention to details.",
            "I get tasks done right away.",
            "I follow a schedule.",
            "I leave my belongings around. (R)",
            "I make a mess of things. (R)"
        ]}
      />

      <QuestionBlock
        title="Extraversion"
        color="#0D9488"
        questions={["I feel comfortable around people.",
            "I start conversations.",
            "I enjoy being the center of attention.",
            "I am outgoing and sociable.",
            "I don't talk a lot. (R)",
            "I keep in the background. (R)"
        ]}
      />

      <QuestionBlock
        title="Agreeableness"
        color="#10B981"
        questions={["I sympathize with others' feelings.",
            "I am interetsed in people's problems.",
            "I have a soft heart.",
            "I am helpful and unselfish.",
            "I insult people. (R)",
            "I am not really interested in others. (R)"
        ]}
      />

      <QuestionBlock
        title="Neuroticism"
        color="#EF4444"
        questions={["I get stressed out easily.",
            "I worry about things.",
            "I feel anxious frequently.",
            "I get upset easily.",
            "I am relaxed most of the time. (R)",
            "I seldom feel blue. (R)"
        ]}
      />

      {/* Submit */}
      <div className="submit-section">
        <button className="submit-btn" onClick={() => navigate("/result")}>Submit Assessment</button>
        <p>
          By submitting, you agree to our privacy policy regarding personality data analysis.
        </p>
      </div>

    </div>
  );
};

export default Question;