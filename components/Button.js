import React from "react";
import styled from "styled-components";
import {
  borderRadius,
  primaryColor,
  secondaryColor,
} from "../data/constants/constants";

const Button = ({ label, bgColor }) => {
  return <BtnContainer bgColor={bgColor}>{label}</BtnContainer>;
};

export default Button;

const BtnContainer = styled.button`
  padding: 10px 20px;
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
`;
