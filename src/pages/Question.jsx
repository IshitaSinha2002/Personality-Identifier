import React, { useState } from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";

/* ---------------- Question Block ---------------- */

const QuestionBlock = ({ title, color, questions, answers, setAnswers }) => {
  return (
    <div className="trait-section">
      <div className="trait-header">
        <div className="trait-bar" style={{ background: color }}></div>
        <h2>{title}</h2>
      </div>

      <div className="question-card" style={{ borderTop: `3px solid ${color}` }}>
        
        {questions.map((q, index) => {
          const key = `${title}-${index}`;

          return (
            <div key={index} className="single-question">

              <p className="question-text">{q}</p>

              <div className="scale-row">
                <span className="scale-label">STRONGLY DISAGREE</span>

                <div className="circles">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className={`circle ${answers[key] === num ? "selected" : ""}`}
                      onClick={() => {
                        if (answers[key] === num) {
                          const updated = { ...answers };
                          delete updated[key];
                          setAnswers(updated);
                        } else {
                          setAnswers({ ...answers, [key]: num });
                        }
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                <span className="scale-label">STRONGLY AGREE</span>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

/* ---------------- Main Page ---------------- */

const Question = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const totalQuestions = 30;
  const answeredCount = Object.keys(answers).length;
  const remaining = totalQuestions - answeredCount;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  /* ---------------- SUBMIT HANDLER ---------------- */

  const handleSubmit = async () => {
    let payload = {};

    // Map answers → ext1...ext30 (temporary mapping)
    Object.keys(answers).forEach((key, index) => {
      payload[`ext${index + 1}`] = answers[key] || 3;
    });

    // Ensure all 50 features exist
    const allFeatures = [
      ...Array.from({ length: 10 }, (_, i) => `ext${i + 1}`),
      ...Array.from({ length: 10 }, (_, i) => `agr${i + 1}`),
      ...Array.from({ length: 10 }, (_, i) => `csn${i + 1}`),
      ...Array.from({ length: 10 }, (_, i) => `est${i + 1}`),
      ...Array.from({ length: 10 }, (_, i) => `opn${i + 1}`)
    ];

    allFeatures.forEach(f => {
      if (!(f in payload)) payload[f] = 3;
    });

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      navigate("/result", { state: data });

    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <div className="question-page">

      {/* Header */}
      <div className="header">
        <p className="header-text">
          <b>
            Please answer all 30 questions honestly. Your data is used to generate a
            comprehensive psychological profile across five primary dimensions.
          </b>
        </p>
      </div>

      {/* Progress */}
      <div className="progress-card">
        <span>Assessment Progress</span>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>

        <span className="remaining">{remaining} Questions Remaining</span>
      </div>

      {/* Questions */}

      <QuestionBlock
        title="Openness to Experience"
        color="#3B82F6"
        questions={[
          "I have a vivid imagination.",
          "I enjoy trying new things.",
          "I have a rich vocabulary.",
          "I spend time reflecting on ideas.",
          "I am not interested in abstract ideas. (R)",
          "I avoid philosophical discussions. (R)"
        ]}
        answers={answers}
        setAnswers={setAnswers}
      />

      <QuestionBlock
        title="Conscientiousness"
        color="#D97706"
        questions={[
          "I am always prepared.",
          "I pay attention to details.",
          "I get tasks done right away.",
          "I follow a schedule.",
          "I leave my belongings around. (R)",
          "I make a mess of things. (R)"
        ]}
        answers={answers}
        setAnswers={setAnswers}
      />

      <QuestionBlock
        title="Extraversion"
        color="#0D9488"
        questions={[
          "I feel comfortable around people.",
          "I start conversations.",
          "I enjoy being the center of attention.",
          "I am outgoing and sociable.",
          "I don't talk a lot. (R)",
          "I keep in the background. (R)"
        ]}
        answers={answers}
        setAnswers={setAnswers}
      />

      <QuestionBlock
        title="Agreeableness"
        color="#10B981"
        questions={[
          "I sympathize with others' feelings.",
          "I am interested in people's problems.",
          "I have a soft heart.",
          "I am helpful and unselfish.",
          "I insult people. (R)",
          "I am not really interested in others. (R)"
        ]}
        answers={answers}
        setAnswers={setAnswers}
      />

      <QuestionBlock
        title="Neuroticism"
        color="#EF4444"
        questions={[
          "I get stressed out easily.",
          "I worry about things.",
          "I feel anxious frequently.",
          "I get upset easily.",
          "I am relaxed most of the time. (R)",
          "I seldom feel blue. (R)"
        ]}
        answers={answers}
        setAnswers={setAnswers}
      />

      {/* Submit */}
      <div className="submit-section">
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={answeredCount !== totalQuestions}
        >
          Submit Assessment
        </button>
      </div>

    </div>
  );
};

export default Question;