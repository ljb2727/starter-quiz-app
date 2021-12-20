// pages/Quiz/index.js
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import QuestionSection from "../../components/QuestionSection";
import { QUIZZES } from "../../constants";


const Quiz = ({setScore}) => {
    const [currentNo, setCurrentNo] = useState(0);
    const navigate = useNavigate();

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setScore((score) => score + 1);
        }
        // 마지막 퀴즈인지 체크하기
        if (currentNo === QUIZZES.length - 1) {
            //페이지 이동
            navigate("/loading")
        } else {
            setCurrentNo((currentNo) => currentNo + 1);
        }
    };

    return (
        <Container>
            <QuestionSection currentNo={currentNo} />
            <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
        </Container>
    );
};
export default Quiz;