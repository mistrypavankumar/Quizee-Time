import React from "react";
import styled, { keyframes } from "styled-components";
import { secondaryColor } from "../../data/constants/constants";

const CircularLoader = () => {
  return <CircularDiv></CircularDiv>;
};

export default CircularLoader;

const rotate = keyframes`
    from{
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to{
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const CircularDiv = styled.div`
  width: 120px;
  height: 120px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  border: 10px solid ${secondaryColor};
  border-top-color: transparent;
  border-bottom-color: transparent;
  box-shadow: inset 0px 0px 20px #00c2ff, 0px 0px 20px #00c2ff;
  animation: ${rotate} 1s linear infinite;
`;
