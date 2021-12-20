import { useEffect } from "react";
import styled from "styled-components";
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton,TwitterIcon,
} from "react-share"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useScript } from "hooks";
import kakaoLogo from "assets/kakao.png";


const GridContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    margin-bottom:5px ;
`
const URLShareButton = styled.button`
    width:48px;
    height:48px;
    color:white;
    border-radius: 4px;
    cursor:pointer;
    border:0px;
    background-color:${(props) => props.theme.primaryColor100};
    &:hover{
        background-color:${(props) => props.theme.primaryColor80};            
    }
`

const KakaoShareButton = styled.a`
    cursor: pointer;
`;

const KakaoIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

const SocialButtonGroup = () => {
    const currentUrl = window.location.href;
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    // kakao sdk 초기화하기
    // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init("6fc7d15bc589bea7ff317f7b5ba43043");
            }
        }
    }, [status]);
    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    };
    
    return (
        <GridContainer>
            <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={48} round={false} borderRadius={4}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
                <TwitterIcon size={48} round={false} borderRadius={4}></TwitterIcon>
            </TwitterShareButton>
            <CopyToClipboard text={currentUrl}>
                <URLShareButton>url</URLShareButton>
            </CopyToClipboard>
            <KakaoShareButton onClick={handleKakaoButton}>
            <KakaoIcon src={kakaoLogo}></KakaoIcon>
            </KakaoShareButton>
        </GridContainer>
    )
}

export default SocialButtonGroup;