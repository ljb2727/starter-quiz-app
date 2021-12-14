// Pages/Landing/index
import styled from "styled-components";
import cover from "assets/test.jpg";
import { Link } from "react-router-dom";
import { Container, Button } from "components";

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
    color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
    color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
    border-radius: 16px;
    opacity: 10%;
    margin-bottom: 16px;
    max-width: 100%;
    display: block;
`;

const Text = styled.p`
    font-size: 16px;
    margin-bottom: 24px;
`;

const Landing = () => (
    <Container>
        <Title>타이틀</Title>
        <SubTitle>서브 타이틀</SubTitle>
        <StyledImage src={cover} alt="cover"></StyledImage>
        <Text>
            텍스트 
        </Text>
        <Link to="/quiz">
            <Button text="df"></Button>
        </Link>
    </Container>
);

export default Landing;