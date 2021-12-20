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

import elon from "assets/test.jpg";

function App() {
    const [score, setScore] = useState(0);
    
    const convertedScore = Math.floor((score / QUIZZES.length) * 100);

    const currentUrl = document.location.href;
    return (
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
                <title>title</title>{/* URL 정보 */}
                <meta property="og:url" content={currentUrl} />
                {/* title 정보 */}
                <meta property="og:title" content="일론 머스크 지수 테스트하기" />
                {/* 페이지 상세 정보 */}
                <meta
                    property="og:description"
                    content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
                />
                {/* 페이지 대표 이미지 정보 */}
                <meta property="og:image" content={elon} />

                {/* 트위터 메타 정보 */}
                <meta name="twitter:title" content="일론 머스크 지수 테스트하기" />
                <meta name="twitter:description" content="나는 일론 머스크에 대해서 얼마나 알고 있을까?" />
                <meta name="twitter:image" content={elon} />
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