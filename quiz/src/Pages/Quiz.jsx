// import { useParams, useNavigate } from 'react-router-dom'
// import questions from "../Data/questions"
// import { useState, useEffect } from 'react'

// export default function Quiz() {
//   const navigate = useNavigate()
//   const { id } = useParams()
//   const questionIndex = parseInt(id) - 1;

//   let currentQuestionNumber = parseInt(id)
//   let totalQuestions = questions.length
//   const progressPercentage = (currentQuestionNumber / totalQuestions) * 100


//   const [selectedOption, setSelectedOption] = useState("")
//   const [score, setScore] = useState(() => {
//     const stored = localStorage.getItem("score")
//     return stored ? JSON.parse(stored) : 0
//   })

//   const question = questions[questionIndex]

//   useEffect(() => {
//     if (!question) {
//       navigate("/quiz/result")
//     }
//   }, [question])

//   const handleSubmit = () => {
//     if (selectedOption === question.correctAnswer) {
//       const newScore = score + 1
//       setScore(newScore)
//       localStorage.setItem("score", newScore)
//     }
//     const nextId = parseInt(id) + 1
//     navigate(`/quiz/question/${nextId}`)

//   }
//   if (!question) return null
  
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
//       <div className="p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-700">
//             Question {currentQuestionNumber} of {totalQuestions}
//           </h2>
//         </div>

//         {/* Progress bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
//           <div
//             className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h3>

//           <div className="space-y-3">
//             {question.options.map((option, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelectedOption(option)}
//                 className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedOption === option
//                   ? "border-blue-500 bg-blue-50"
//                   : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
//                   }`}
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedOption === option ? "border-blue-500 bg-blue-500" : "border-gray-400"
//                       }`}
//                   >
//                     {selectedOption === option && <div className="w-2 h-2 rounded-full bg-white"></div>}
//                   </div>
//                   <span className="text-gray-700">{option}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={handleSubmit}
//             disabled={!selectedOption}
//             className={`py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${selectedOption
//               ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }`}
//           >
//             {currentQuestionNumber === totalQuestions ? "Finish Quiz" : "Next Question"}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useParams, useNavigate } from 'react-router-dom'
import questions from "../Data/questions"
import { useState, useEffect } from 'react'

export default function Quiz() {
  const navigate = useNavigate()
  const { id } = useParams()
  const questionIndex = parseInt(id) - 1;

  let currentQuestionNumber = parseInt(id)
  let totalQuestions = questions.length
  const progressPercentage = (currentQuestionNumber / totalQuestions) * 100

  const [selectedOption, setSelectedOption] = useState("")
  const [score, setScore] = useState(() => {
    const stored = localStorage.getItem("score")
    return stored ? JSON.parse(stored) : 0
  })

  const question = questions[questionIndex]

  useEffect(() => {
    if (!question) {
      navigate("/quiz/result")
    }
  }, [question])

  const handleSubmit = () => {
    if (selectedOption === question.correctAnswer) {
      const newScore = score + 1
      setScore(newScore)
      localStorage.setItem("score", newScore)
    }
    const nextId = parseInt(id) + 1
    navigate(`/quiz/question/${nextId}`)
  }
  if (!question) return null
  
  return (
    <div className="min-h-screen bg-[#273549] flex items-center justify-center p-4">
      <div className=" bg-[#0f172a] rounded-xl shadow-md overflow-hidden transition-all duration-300 w-full max-w-xl">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-200">
              Question {currentQuestionNumber} of {totalQuestions}
            </h2>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">{question.question}</h3>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedOption === option
                      ? "border-blue-500 bg-blue-700 text-white"
                      : "border-gray-600 hover:border-blue-400 hover:bg-[#334155] text-gray-300"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                        selectedOption === option ? "border-blue-500 bg-blue-500" : "border-gray-500"
                      }`}
                    >
                      {selectedOption === option && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                selectedOption
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              {currentQuestionNumber === totalQuestions ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
