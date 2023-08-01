import { useState } from "react";
import "./App.css";
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Who is Father of football?",
    options: ["Messi", "Ronaldo", "Karim", "Mbappe"],
    answer: "Ronaldo",
  },
  {
    question: "Who is Fastest in Running?",
    options: ["Vincent van Gogh", "Myself", "Haseeb", "Osama"],
    answer: "Myself",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (seletedAnswer) => {
    if (seletedAnswer === quizData[currentQuestion].answer) {
      setScore((prevScore) => {
        return prevScore + 1;
      });
    }
    setSelectedOption(seletedAnswer);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prevcurrentQuestion) => {
        return prevcurrentQuestion + 1;
      });
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      <div className="quiz-app">
        <div className="quiz-app__control">
          {showResult ? (
            <div className="result-container">
              <h2>Quiz Result</h2>
              <p>
                you Score {score} out of {quizData.length}
              </p>
              <button className="btn" onClick={restartQuiz}>
                Restart Quiz
              </button>
            </div>
          ) : (
            <div className="question-container">
              <h2>Question:{currentQuestion + 1}</h2>
              <p>{quizData[currentQuestion].question}</p>
              <div className="options-container">
                {quizData[currentQuestion].options.map((option, index) => {
                  return (
                    <button
                      className={selectedOption === option ? "active" : "btn"}
                      onClick={() => handleAnswerClick(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
