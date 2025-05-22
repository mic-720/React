import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./Pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/question/:id" element={<Quiz />} />
        <Route path="/quiz/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
