import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../Data/questions";
import { Trophy, RefreshCw } from "lucide-react"

export default function Result() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem("score")) || 0;
    setScore(storedScore);
    localStorage.removeItem("score");
  }, []);
  
  const percentage = Math.round((score / questions.length) * 100);

  let message = "";
  let messageColor = "";

  if (percentage >= 80) {
    message = "Excellent! You're a React expert!";
    messageColor = "text-green-400";
  } else if (percentage >= 60) {
    message = "Good job! You know React well!";
    messageColor = "text-blue-400";
  } else if (percentage >= 40) {
    message = "Not bad! Keep learning React!";
    messageColor = "text-yellow-400";
  } else {
    message = "Keep practicing to improve your React knowledge!";
    messageColor = "text-red-400";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e293b]">
      <div className="bg-[#0f172a] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg max-w-md w-full">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h1>

          <p className={`text-xl font-semibold mb-6 ${messageColor}`}>{message}</p>

          <div className="mb-8">
            <div className="text-5xl font-bold text-blue-400 mb-2">
              {score} / {questions.length}
            </div>
            <p className="text-gray-300">You scored {percentage}%</p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <RefreshCw className="w-5 h-5" />
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
