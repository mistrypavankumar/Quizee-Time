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
const BtnContainer = styled.button`
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

  :hover {
    transform: scale(1.06);
    opacity: 0.9;
  }

  ${animate}
`;
