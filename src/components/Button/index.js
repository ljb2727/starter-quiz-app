import React from 'react';
//import styles from "./Button.module.css"
// components/Button/index.js
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    width:100%;
`

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
    width: 100%;
    transition: all 0.1s;
    font-size: ${(props) => (props.fontSize === "big" ? "32px" : "16px")};
    background-color: ${(props) => props.theme.primaryColor100};
    &:active{
        background-color: ${(props) => props.theme.primaryColor80};
    }
    
`

const Button = ({to, onClick, children}) => (
    to ? (
        <StyledLink to={to}>
            <StyledButton fontSize="" onClick={onClick}>{children}</StyledButton>
        </StyledLink>
    ) : (
        <StyledButton fontSize="" onClick={onClick}>{children}</StyledButton>
    )
);

export default Button;

