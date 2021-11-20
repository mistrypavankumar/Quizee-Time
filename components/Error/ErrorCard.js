import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  lightPrimaryColor,
  primaryColor,
} from "../../data/constants/constants";

const ErrorCard = ({ message, errorMessage, successMessage, isError }) => {
  const [close, setClose] = useState(false);

  const closeCard = (e) => {
    setClose(!close);
  };

  console.log("close is --> " + close);
  return (
    <ErrorCardContainer
      errorMessage={errorMessage}
      successMessage={successMessage}
      isError={isError}
      close={close}
    >
      <MainContent>
        <Text>{message}</Text>
        <CloseMessage onClick={closeCard}>X</CloseMessage>
      </MainContent>
    </ErrorCardContainer>
  );
};

export default ErrorCard;

const ErrorCardContainer = styled.div`
  width: 400px;
  height: 10vh;
  margin: 0 auto;
  background-color: ${lightPrimaryColor};
  position: absolute;
  z-index: 999;
  left: 50%;
  top: 3%;
  border-radius: 10px;
  transition: all 0.5s linear;
  transform: translateX(-50%)
    ${({ isError }) => (isError ? "translateY(10%)" : null)};
  opacity: ${({ close }) => (close ? 0 : 1)};

  @media (min-width: 468px) {
    width: 500px;
    height: 10vh;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const Text = styled.h2`
  padding: 0px 10px;
  text-align: center;
  color: red;
`;

const CloseMessage = styled.h2`
  color: ${primaryColor};
  cursor: pointer;
`;
