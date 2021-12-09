import React from 'react';
//import styles from "./Button.module.css"
// components/Button/index.js
import styled from "styled-components";

const StyledButton = styled.button`
    color: #ffffff;
    background-color: var(--gray);
    border-radius: 5px;
    border: 0px;
    height: 56px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    outline: none;
    font-weight: 700;
    font-size: ${(props) => (props.fontSize === "big" ? "32px" : "16px")};
    background-color: ${(props) => props.theme.primaryColor100};
    &:hover{
        background-color: ${(props) => props.theme.primaryColor80};
    }
    
`

const Button = (props) => (
    <StyledButton fontSize="" onClick={props.onClick}>{props.text}</StyledButton>
);

export default Button;

