import styled from "styled-components";
import Banner from "../components/Banner";
import Dot from "../components/Dot";
import DotAnimation from "../components/DotAnimation";
import { primaryColor2, secondaryColor } from "../data/constants/constants";

export default function Home() {
  return (
    <Wrapper>
      <BottomLeftCircle />
      <DotAnimation />
      <Dot dot1left="2%" dot1top="35%" dot2left="7%" dot2top="55%" />
      <Dot dot1left="25%" dot1bottom="5%" dot2left="30%" dot2top="55%" />
      <Dot dot1right="10%" dot1bottom="5%" dot2display="false" />
      <MainContainer>
        <Banner />
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const BottomLeftCircle = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;

  ::after {
    content: "";
    height: 12rem;
    width: 12rem;
    background-color: ${secondaryColor};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.9;
    border-top-right-radius: 100%;
  }
`;

const MainContainer = styled.div`
  background-color: ${primaryColor2};
  height: 100vh;
  width: 100%;
`;
