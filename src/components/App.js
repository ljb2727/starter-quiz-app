// App.js
import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "globalStyle"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Quiz, Landing, Result, Loading } from "pages";
import Navigation from "components/Navigation"

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
              <Route path="/loading" element={<Loading/>}/>
            </Routes>
          </Router>
          
        </ThemeProvider>
    );
}

export default App;