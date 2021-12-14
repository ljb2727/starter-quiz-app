// App.js
import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../globalStyle"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Quiz from "../pages/Quiz"
import Landing from "../pages/Landing"
import Navigation from "./Navigation"
import Result from "../pages/Result"

function App() {
    const [score, setScore] = useState(0);
    return (
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Router>
            <Navigation/>
            <Routes>
              <Route path="/" exact element={<Landing/>}/>
              <Route path="/quiz" element={<Quiz setScore={setScore}/>}/>
              <Route path="/result" element={<Result score={score} setScore={setScore}/>}/>
            </Routes>
          </Router>
          
        </ThemeProvider>
    );
}

export default App;