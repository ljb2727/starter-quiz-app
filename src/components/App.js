// app.js
import React,{useState} from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme"

import "../App.css";
import {QUIZZES} from "../constants"
import Button from "./Button"
function App() {
    const [currentNo, setCurrentNo] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [score, setScore] = useState(0)
    const handleClick = (isCorrect) => {
      if(isCorrect) {
        setScore((score)=>score+1)
      }
      if(currentNo === QUIZZES.length-1){
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
        <ThemeProvider theme={theme}>
          <div className="container">
            {showResult ? (
              <div className="app">
                <h1>퀴즈 끝</h1>
                <p>{`${score} / ${QUIZZES.length}`}</p>
                <h2>{Math.floor((score / QUIZZES.length) * 100)}</h2>
                <button className="answer" onClick={reStart}>re start</button>
              </div>
            ) : (
              <div className="app">
                  <div className="question-section">
                      <h1 className="question-header">
                          <span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
                      </h1>
                      <div className="question-text">{QUIZZES[currentNo].question}</div>
          
                  </div>
                  <div className="answer-section">
                      {QUIZZES[currentNo].answers.map((answer,i) => (
                          <Button key={i} text={answer.text} onClick={() => handleClick(answer.isCorrect)}/>
                      ))}
                  </div>
              </div>
              )
            }
          </div>
        </ThemeProvider>
    );
}

export default App;