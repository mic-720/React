import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

const Result = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem("score")) || 0;
    setScore(storedScore);
    localStorage.removeItem("score");
  }, []);

  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>Your Score: {score} / {questions.length}</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Result;
