import React from "react";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../data/constants/constants";

const DotAnimation = () => {
  return (
    <Div>
      <Circle1></Circle1>
      <Circle2></Circle2>
    </Div>
  );
};

export default DotAnimation;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0%;
  top: 30%;
  transform: translateX(50%);
`;
const Circle1 = styled.div`
  width: 320px;
  height: 320px;
  border: 35px dotted ${secondaryColor};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate 15000ms linear infinite alternate;
  position: absolute;
  @media (min-width: 640px) {
    width: 320px;
    height: 320px;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  } ;
`;

const Circle2 = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  height: 13rem;
  width: 13rem;
  background-color: ${primaryColor};
  border-radius: 100%;
`;

const Circle3 = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px dotted ${secondaryColor};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate3 1s infinite alternate;
  position: absolute;
  @keyframes rotate3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2) rotate(20deg);
    }
  } ;
`;

const Circle4 = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px dotted ${secondaryColor};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate4 1s infinite alternate;
  position: absolute;
  @keyframes rotate4 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3) rotate(-20deg);
    }
  } ;
`;
