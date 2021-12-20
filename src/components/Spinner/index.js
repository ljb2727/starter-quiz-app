import { useContext } from "react";
import { ThemeContext } from "styled-components";

import ScaleLoader from "react-spinners/ScaleLoader"
import Styled from "styled-components";

const Flex = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Spinner = () => {
    const themeContext = useContext(ThemeContext)
    const color = themeContext.primaryColor100
    return (
        <Flex>
            <ScaleLoader 
                height="16px"
                width="10px"
                radius="8px"
                color={color}
            />
        </Flex>
    )
};

export default Spinner;