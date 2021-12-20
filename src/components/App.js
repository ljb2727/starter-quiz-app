// App.js
import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "globalStyle"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Quiz, Landing, Result, Loading } from "pages";
import Navigation from "components/Navigation"
import {QUIZZES} from "../constants"
import {Helmet, HelmetProvider} from "react-helmet-async"
import favicon from "assets/favicon.ico";


function App() {
    const [score, setScore] = useState(0);
    
    const convertedScore = Math.floor((score / QUIZZES.length) * 100);
    
    return (
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
                <title>title</title>
                <link rel="icon" href={favicon} />
            </Helmet>
          </HelmetProvider>
          <GlobalStyle/>
          <Router>
            <Navigation/>
            <Routes>
              <Route path="/" exact element={<Landing/>}/>
              <Route path="/quiz" element={<Quiz setScore={setScore}/>}/>
              <Route path="/result/:cCode" element={<Result convertedScore={convertedScore} setScore={setScore}/>}/>
              <Route path="/loading" element={<Loading convertedScore={convertedScore}/>} />
            </Routes>
          </Router>
          
        </ThemeProvider>
    );
}

export default App;