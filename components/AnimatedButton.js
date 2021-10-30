import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  borderRadius,
  primaryColor,
  secondaryColor,
} from "../data/constants/constants";

const AnimatedButton = ({ label, onClick, bgColor, padding }) => {
  return (
    <BtnContainer onClick={onClick} bgColor={bgColor} padding={padding}>
      {label}
    </BtnContainer>
  );
};

export default AnimatedButton;

const toggle = keyframes`
  from{
    transform: scale(1)
  }
  to{
    transform: scale(1.1);
  }
`;

const animate = css`
  animation: ${toggle} 500ms ease-in-out infinite alternate;
`;
const BtnContainer = styled.a`
  padding: ${({ padding }) => (padding ? padding : "10px 25px")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : secondaryColor)};
  border: none;
  border-radius: ${borderRadius};
  color: ${({ textColor }) => (textColor ? textColor : primaryColor)};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: ${borderRadius};
    z-index: -1;
    transition: all 0.3s;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : secondaryColor)};
  }

  :hover::after {
    transform: scaleX(1.3) scaleY(1.6);
    opacity: 0;
  }

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }

  :active {
    transform: translateY(-2px);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5);
  }

  /* ${animate} */
`;
