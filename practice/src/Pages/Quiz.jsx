import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import questions from "../data/questions";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = parseInt(id) - 1;

  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(() => {
    const stored = localStorage.getItem("score");
    return stored ? JSON.parse(stored) : 0;
  });

  const question = questions[questionIndex];

  useEffect(() => {
    if (!question) {
      navigate("/quiz/result");
    }
  }, [question]);

  const handleSubmit = () => {
    if (selectedOption === question.answer) {
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem("score", newScore);
    }

    const nextId = parseInt(id) + 1;
    navigate(`/quiz/question/${nextId}`);
  };

  if (!question) return null;

  return (
    <div>
      <h2>Question {id}</h2>
      <p>{question.question}</p>
      {question.options.map((opt) => (
        <div key={opt}>
          <label>
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selectedOption === opt}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {opt}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit} disabled={!selectedOption}>
        Submit
      </button>
    </div>
  );
};

export default Quiz;
