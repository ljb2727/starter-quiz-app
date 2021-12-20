// pages/Result/index.js

import React from "react";
import styled from "styled-components";
import RESULT from "./result";
import { SocialButtonGroup } from "components";

const SectionTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 56px;
    text-align: center;
`;

const ResultTitle = styled.div`
    font-size: 24px;
    margin-bottom: 56px;
    text-align: center;
`;

const Image = styled.img`
    display:block
`

const ResultSection = ({ cCode }) => (
    <>
        <SectionTitle>당신은 혹시?</SectionTitle>
        <Image src={RESULT[cCode].src}/>
        <ResultTitle>{RESULT[cCode].title}</ResultTitle>
        <SocialButtonGroup></SocialButtonGroup>
    </>
);
export default ResultSection;