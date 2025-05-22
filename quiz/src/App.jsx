import Home from "./Pages/Home"
import Quiz from "./Pages/Quiz"
import Result from "./Components/Result"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/question/:id" element={<Quiz />} />
        <Route path="/quiz/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App