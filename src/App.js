// app.js
import React,{useState} from "react";
import "./App.css";

function App() {
    const [currentNo, setCurrentNo] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [score, setScore] = useState(0)
    const quizzes = [{
          id: 1,
          question: "일론 머스크의 우주 탐사 기업 이름은?",
          answers: [
            { text: "스페이스 엑스", isCorrect: true },
            { text: "테슬라", isCorrect: false },
            { text: "보링 컴퍼니", isCorrect: false },
            { text: "솔라시티", isCorrect: false },
          ],
      },
      {
          id: 2,
          question: "일론 머스크의 고향은 어디일까요?",
          answers: [
            { text: "남아프리카 공화국 프리토리아", isCorrect: true },
            { text: "미국 캘리포니아", isCorrect: false },
            { text: "캐나다 벤쿠버", isCorrect: false },
            { text: "호주 시드니", isCorrect: false },
          ],
      },
      {
          id: 3,
          question: "일론 머스크가 창업한 페이팔 전신 기업의 이름은?",
          answers: [
            { text: "X.com", isCorrect: true },
            { text: "Zip2 Corporation", isCorrect: false },
            { text: "Alpha Exploration co.", isCorrect: false },
            { text: "Everything CO.", isCorrect: false },
          ],
      }
    ]

    
    const handleClick = (isCorrect) => {
      if(isCorrect) {
        setScore((score)=>score+1)
      }
      if(currentNo === quizzes.length-1){
        setShowResult(true)
      }else{
        setCurrentNo((currentNo) => currentNo+1)
        
      }
    };

    const reStart = ()=> {
      setShowResult(false)
      setCurrentNo(0)
      setScore(0)
    }

    return (
        <div className="container">
          {showResult ? (
            <div className="app">
              <h1>퀴즈 끝</h1>
              <p>{`${score} / ${quizzes.length}`}</p>
              <h2>{Math.floor((score / quizzes.length) * 100)}</h2>
              <button onClick={reStart}>re start</button>
            </div>
          ) : (
            <div className="app">
                <div className="question-section">
                    <h1 className="question-header">
                        <span>{quizzes[currentNo].id}</span>/{quizzes.length}
                    </h1>
                    <div className="question-text">{quizzes[currentNo].question}</div>
                </div>
                <div className="answer-section">
                    {quizzes[currentNo].answers.map((answer,i) => (
                        <button key={i} value={answer.text} onClick={()=>handleClick(answer.isCorrect)}>
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
            )
          }
        </div>
    );
}

export default App;