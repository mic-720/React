import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz/question/1");
  };

  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;
