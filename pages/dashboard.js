import { Select, MenuItem, FormControl, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import CustomTemplate from "../components/CustomTemplate";
import MainPanel from "../components/MainPanel";
import { lightPrimaryColor, primaryColor } from "../data/constants/constants";
import Image from "next/image";
import db from "./../utils/db";
import QuizQuestion from "../models/QuizQuestion";
import { Store } from "../utils/Store";
import Button from "./../components/Button";

const Dashboard = (props) => {
  const quizQuestions = props;
  const quizData = quizQuestions.quizQuestions;
  const { state, dispatch } = useContext(Store);

  const [course, setCourse] = useState(0);
  console.log(course);
  console.log(typeof quizData[course].category);
  console.log(quizData[course].question);

  const [questionNumber, setQuestionNumber] = useState(0);

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  const handleNextButton = () => {
    if (questionNumber <= quizData.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleSubmitButton = () => {
    // submit button functionality
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
            {course === Number(quizData[course].category) ? (
              <MainContent>
                <p className="question">{quizData[questionNumber].question}</p>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans1"
                      className="answer"
                    />
                    <label htmlFor="ans1" id="option1">
                      {" "}
                      {quizData[questionNumber].option1}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans2"
                      className="answer"
                    />
                    <label htmlFor="ans1" id="option2">
                      {" "}
                      {quizData[questionNumber].option2}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans3"
                      className="answer"
                    />
                    <label htmlFor="ans1" id="option3">
                      {" "}
                      {quizData[questionNumber].option3}{" "}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans4"
                      className="answer"
                    />
                    <label htmlFor="ans1" id="option4">
                      {" "}
                      {quizData[questionNumber].option4}
                    </label>
                  </li>
                </ul>
                <div className="btnContainer">
                  {questionNumber === quizData.length - 1 ? (
                    <Button
                      label="Submit"
                      bgColor={primaryColor}
                      textColor={lightPrimaryColor}
                      padding="12px 40px"
                      onClick={handleSubmitButton}
                    />
                  ) : (
                    <Button
                      label="Next"
                      bgColor={primaryColor}
                      textColor={lightPrimaryColor}
                      padding="12px 40px"
                      onClick={handleNextButton}
                    />
                  )}
                </div>
              </MainContent>
            ) : (
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
            )}
          </MainPanel>
        </MainPanelContainer>
      </MainContainer>
    </CustomTemplate>
  );
};

export default Dashboard;

const MainContent = styled.div`
  padding: 0px 100px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

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
    position: absolute;
    bottom: 10%;
    right: 10%;
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

// Fetching the data from server
export async function getServerSideProps() {
  await db.connect();
  const quizQuestions = await QuizQuestion.find({}).lean();
  await db.disconnect();

  return {
    props: {
      quizQuestions: quizQuestions.map(db.convertDocToObj),
    },
  };
}
