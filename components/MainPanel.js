import React from "react";
import styled from "styled-components";

const MainPanel = ({ children }) => {
  return <PanelContainer>{children}</PanelContainer>;
};

export default MainPanel;

const PanelContainer = styled.div`
  width: 100%;
  height: 70vh;
  background: linear-gradient(
    to right bottom,
    rgba(210, 243, 254, 1),
    rgba(210, 243, 254, 0.7)
  );
  position: absolute;
  z-index: 10;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  backdrop-filter: blur(1.5);

  @media (min-width: 640px) {
    width: 70%;
  }
`;
