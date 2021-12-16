import {Container, Spinner} from "components";
import styled from "styled-components";

const Title = styled.h1`
    font-size:24px;
    margin:8px;
    display: flex;
    justify-content: center;

`;

const Loading = ()=> {
    return (
        <Container>
            <Title>loading</Title>
            <Spinner></Spinner>
        </Container>
    )
}

export default Loading;
