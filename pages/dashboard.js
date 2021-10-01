import { Select, MenuItem, FormControl, Grid } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import CustomTemplate from "../components/CustomTemplate";
import MainPanel from "../components/MainPanel";
import { lightPrimaryColor, primaryColor } from "../data/constants/constants";
import Image from "next/image";

const Dashboard = () => {
  const [course, setCourse] = useState(0);

  const handleChange = (e) => {
    setCourse(e.target.value);
  };
  return (
    <CustomTemplate>
      <MainContainer>
        <Div>
          <FormControl>
            <Select
              className="custom_select"
              value={course}
              label="Course"
              onChange={handleChange}
            >
              <MenuItem value={0} disabled>
                {" "}
                <em>Select Course </em>
              </MenuItem>
              <MenuItem value={1}>C</MenuItem>
              <MenuItem value={2}>C++</MenuItem>
              <MenuItem value={3}>Java</MenuItem>
              <MenuItem value={4}>Python</MenuItem>
            </Select>
          </FormControl>
        </Div>

        <MainPanelContainer>
          <MainPanel>
            <Center>
              <Image
                src="/assets/selecting.svg"
                alt="selecting"
                width={300}
                height={300}
              />
              <div>
                <h3>Please select course to continue</h3>
              </div>
            </Center>
          </MainPanel>
        </MainPanelContainer>
      </MainContainer>
    </CustomTemplate>
  );
};

export default Dashboard;

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
