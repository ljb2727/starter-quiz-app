// components/AnswerGroup/index.js
import React from "react";
import styled from "styled-components";
// QUIZZES를 사용하기 위해 import 해왔습니다.
import { QUIZZES } from "../../constants";
import Button from "../Button";

// answer-section에 해당하는 스타일을 가져옴
const AnswerGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

// 비구조 할당으로 currentNo, handleClick 꺼내기
const AnswerGroup = ({ currentNo, handleClick }) => (
    <AnswerGroupWrapper>
        {QUIZZES[currentNo].answers.map((answer,i) => (
            <Button
                key={i}
                text={answer.text}
                onClick={() => handleClick(answer.isCorrect)}
            ></Button>
        ))}
    </AnswerGroupWrapper>
);
export default AnswerGroup;