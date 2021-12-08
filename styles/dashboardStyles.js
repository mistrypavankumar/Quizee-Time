import styled from "styled-components";
import {
  lightPrimaryColor,
  primaryColor,
  primaryColor2,
} from "../data/constants/constants";

const MainContent = styled.div`
  padding: 0px 30px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 640px) {
    padding: 0px 100px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 2.5em;
      color: ${primaryColor};
      text-align: center;

      @media (min-width: 468px) {
        font-size: 3em;
      }
    }

    h2 {
      font-size: 1.8em;
      color: ${primaryColor2};

      @media (min-width: 468px) {
        font-size: 2em;
      }
    }
  }
  .centerBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p.question {
    font-size: 1.5rem;
    color: ${primaryColor};
    font-weight: 500;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      line-height: 2.5;

      input[type="radio"] {
        margin-right: 1rem;
        -moz-appearance: radio !important;

        &::after {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 1.5rem;
          top: -0.2rem;
          left: -0.1rem;
          position: relative;
          background-color: #d1d3d1;
          content: "";
          display: inline-block;
          visibility: visible;
          border: 0.2rem solid white;
          cursor: pointer;
        }
        &:checked:after {
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 1.8rem;
          top: -0.2rem;
          left: -0.1rem;
          position: relative;
          background-color: ${primaryColor};
          content: "";
          display: inline-block;
          visibility: visible;
          border: 0.2rem solid white;
        }
      }
    }
  }

  .btnContainer {
    padding: 20px 0px 0px 0px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const MainContainer = styled.div`
  /* background-color: white; */
  height: 100vh;
  width: 90%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 10;
`;

const Div = styled.div`
  position: absolute;
  top: 15%;

  .custom_select {
    width: 7rem;
    padding: 0.2rem;
    background: ${lightPrimaryColor};
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const MainPanelContainer = styled.div``;
const Center = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  div {
    margin-left: 1rem;

    h3 {
      color: ${primaryColor};
    }
  }
`;

export { MainContainer, MainContent, Div, MainPanelContainer, Center };
