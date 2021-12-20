import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import { useParams } from "react-router";

const Result = ({convertedScore, setScore}) => {
    const { cCode } = useParams();
    console.log(cCode);
    
    return (
        <Container>
            <ResultSection cCode={cCode}></ResultSection>
            <Button onClick={()=> setScore(0) } to="/">다시 하기</Button>
        </Container>
    )
};

export default Result;