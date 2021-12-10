// App.js
import React, { useState } from "react";
import { QUIZZES } from "../constants";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Container from "./Container";
import AnswerGroup from "./AnswerGroup";
import QuestionSection from "./QuestionSection";
import ResultSection from "./ResultSection";
import "../App.css";

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

    const convertedScore = Math.floor((score / QUIZZES.length) * 100)

    return (
        <ThemeProvider theme={theme}>
          {showResult ? (
              <Container>
                <ResultSection convertedScore={convertedScore} reStart={reStart}/>
              </Container>
            ) : (
              <Container>
                <QuestionSection currentNo={currentNo}/>
                <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
              </Container>
              )
            }
        </ThemeProvider>
    );
}

export default App;