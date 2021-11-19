import React, { useContext } from "react";
import styled from "styled-components";
import { lightPrimaryColor, secondaryColor } from "../data/constants/constants";
import AnimatedButton from "./AnimatedButton";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";

const Banner = () => {
  const router = useRouter();

  const { state } = useContext(Store);
  const { userInfo } = state;

  const handleOnClick = () => {
    if (userInfo) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <Container>
      <p>Welcome to </p>
      <h1>Quizee</h1>
      <h2>Time</h2>
      <Desc>
        Let’s have fun together and improve our skills. Bring your skills into
        the real world by applying your skills what you learnt.
      </Desc>
      <Btn>
        <AnimatedButton onClick={handleOnClick} label="Let's Start Now" />
      </Btn>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: auto;
  /* background-color: blue; */
  z-index: 10;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  p,
  h1,
  h2 {
    font-style: italic;
  }

  p {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: ${lightPrimaryColor};
    font-style: italic;
    font-size: 1.2rem;
    letter-spacing: 0.15rem;
    font-weight: 400;
    text-transform: uppercase;

    @media (min-width: 640px) {
      left: 6%;
      top: 15%;
    }
  }

  h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    color: ${secondaryColor};
    font-size: 6rem;

    @media (min-width: 640px) {
      font-size: 10rem;
      top: 0%;
      left: 10%;
      transform: translateX(0%);
    }
  }

  h2 {
    position: absolute;
    top: 32%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    color: ${lightPrimaryColor};
    font-size: 6rem;

    @media (min-width: 640px) {
      font-size: 10rem;
      top: 18%;
      right: 10%;
      transform: translateX(0%);
    }
  }
`;

const Desc = styled.h4`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  color: ${lightPrimaryColor};
  font-style: italic;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  font-weight: 400;
  /* background-color: red; */
  width: 90%;
  line-height: 20px;
  text-align: center;

  @media (min-width: 640px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 15%;
    width: 70%;
    font-size: 0.9rem;
  }
`;

const Btn = styled.div`
  position: absolute;
  bottom: 18%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  text-align: center;

  @media (min-width: 640px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 7%;
    width: 70%;
    font-size: 0.9rem;
  }
`;
