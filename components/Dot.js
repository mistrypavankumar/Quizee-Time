import React from "react";
import styled from "styled-components";
import { secondaryColor } from "../data/constants/constants";

const Dot = ({
  dot1top,
  dot1bottom,
  dot1right,
  dot1left,
  dot1display,
  dot2top,
  dot2bottom,
  dot2right,
  dot2left,
  dot2display,
}) => {
  return (
    <DotDesign
      dot1top={dot1top}
      dot1left={dot1left}
      dot1right={dot1right}
      dot1bottom={dot1bottom}
      dot1display={dot1display}
      dot2top={dot2top}
      dot2left={dot2left}
      dot2right={dot2right}
      dot2bottom={dot2bottom}
      dot2display={dot2display}
    ></DotDesign>
  );
};

export default Dot;

const DotDesign = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;

  ::after {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${secondaryColor};
    position: absolute;
    left: ${({ dot1left }) => (dot1left ? dot1left : null)};
    top: ${({ dot1top }) => (dot1top ? dot1top : null)};
    right: ${({ dot1right }) => (dot1right ? dot1right : null)};
    bottom: ${({ dot1bottom }) => (dot1bottom ? dot1bottom : null)};

    display: ${({ dot1display }) => (dot1display ? "none" : dot1display)};
    opacity: 0.5;
    border-radius: 100%;
    transform: translateX(50%);
  }

  ::before {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${secondaryColor};
    position: absolute;

    left: ${({ dot2left }) => (dot2left ? dot2left : null)};
    top: ${({ dot2top }) => (dot2top ? dot2top : null)};
    right: ${({ dot2right }) => (dot2right ? dot2right : null)};
    bottom: ${({ dot2bottom }) => (dot2bottom ? dot2bottom : null)};

    display: ${({ dot2display }) => (dot2display ? "none" : null)};
    opacity: 0.8;
    border-radius: 100%;
    transform: translateX(50%);
  }
`;
