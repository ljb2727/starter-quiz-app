import {useState, useEffect} from 'react';
import {Container, Spinner} from "components";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
    font-size:24px;
    margin:8px;
    display: flex;
    justify-content: center;
`;

const getCCode = (score) => {
    let cCode;
    if (score > 75) {
        cCode = "elon";
    } else if (score > 50) {
        cCode = "kimbal";
    } else if (score > 25) {
        cCode = "bezos";
    } else {
        cCode = "timemachine";
    }
    return cCode;
};

const Loading = ({convertedScore})=> {
    const [title, setTitle] = useState("결과 진행중");
    const cCode = getCCode(convertedScore);
    let navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setTitle((title)=>{
                return title+"."
            });
        },700);
        return () => clearTimeout(timer);
    })
    useEffect(()=>{
        setTimeout(()=> navigate(`/result/${cCode}`),2000)
    },[navigate,cCode])

    return (
        <Container>
            <Title>{title}</Title>
            <Spinner></Spinner>
        </Container>
    )
}

export default Loading;
