import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const ResultTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
`;

const Score = styled.p`
    font-size: 30px;
    margin: 40px;
    text-align: center;
    color: ${(props) => props.theme.primaryColor100};
`;

const ResultSection = ({ convertedScore,reStart }) => (
    <>
        <ResultTitle>당신의 점수는?</ResultTitle>
        <Score>{convertedScore}</Score>
    </>
);
export default ResultSection;