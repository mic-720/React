// import { ArrowRight } from "lucide-react"
// import { useNavigate } from 'react-router-dom'
// import questions from "../Data/questions"

// export default function Home() {
//   const navigate = useNavigate()
//   const startquiz = () => {
//     navigate("/quiz/question/1")
//   }
//   const totalQuestions = questions.length
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//         <div className="p-8">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Welcome to the React Quiz!
//           </h1>

//           <div className="mb-8 text-center text-gray-600">
//             <p className="mb-4">Test your knowledge of React with this quick quiz.</p>
//             <p>You'll be presented with {totalQuestions} questions about React fundamentals.</p>
//           </div>

//           <div className="flex justify-center">
//             <button
//               onClick={startquiz}
//               className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
//             >
//               Start Quiz
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import questions from "../Data/questions";

export default function Home() {
  const navigate = useNavigate();
  const startquiz = () => {
    navigate("/quiz/question/1");
  };
  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e293b]"> 
      <div className="bg-[#0f172a] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"> {/* Darker Card */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Welcome to the React Quiz!
          </h1>

          <div className="mb-8 text-center text-gray-300">
            <p className="mb-4">Test your knowledge of React with this quick quiz.</p>
            <p>You'll be presented with {totalQuestions} questions about React fundamentals.</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={startquiz}
              className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Start Quiz
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
