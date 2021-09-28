import React, { useState } from "react";
import styled from "styled-components";
import {
  lightPrimaryColor,
  primaryColor,
  secondaryColor,
} from "../data/constants/constants";
import NextLink from "next/link";
import { Link } from "@material-ui/core";
import Button from "./Button";

const Navbar = () => {
  const [userInfo, setUserInfo] = useState("");
  return (
    <NavbarContainer>
      <Container>
        <Logo>
          <NextLink href="/" passHref>
            <Link>
              <h2>Quizee Time</h2>
            </Link>
          </NextLink>
        </Logo>

        <RightContainer>
          {userInfo ? <p>Hello! Jhon </p> : null}
          {userInfo ? (
            <svg
              width="30"
              height="30"
              className="menu"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7188 6.5625C6.5625 6.5625 6.5625 6.9525 6.5625 11.7188V11.7656C6.5625 13.8413 6.5625 15.3413 7.07063 15.975C7.5675 16.59 9.04313 16.875 11.7188 16.875C14.3944 16.875 15.87 16.5881 16.3669 15.9731C16.875 15.3413 16.875 13.8412 16.875 11.7638C16.875 6.9525 16.875 6.5625 11.7188 6.5625ZM11.7188 19.6875C8.5575 19.6875 6.18562 19.3556 4.8825 17.7375C3.75 16.3331 3.75 14.4169 3.75 11.7656L5.15625 11.7188H3.75C3.75 6.3375 4.08938 3.75 11.7188 3.75C19.3481 3.75 19.6875 6.3375 19.6875 11.7188C19.6875 14.415 19.6875 16.3331 18.555 17.7375C17.2519 19.3556 14.88 19.6875 11.7188 19.6875Z"
                fill="#00C2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.3438 6.5625C27.1875 6.5625 27.1875 6.9525 27.1875 11.7188V11.7656C27.1875 13.8413 27.1875 15.3413 27.6956 15.975C28.1925 16.59 29.6681 16.875 32.3438 16.875C35.0194 16.875 36.495 16.5881 36.9919 15.9731C37.5 15.3413 37.5 13.8412 37.5 11.7638C37.5 6.9525 37.5 6.5625 32.3438 6.5625ZM32.3438 19.6875C29.1825 19.6875 26.8106 19.3556 25.5075 17.7375C24.375 16.3331 24.375 14.4169 24.375 11.7656L25.7812 11.7188H24.375C24.375 6.3375 24.7144 3.75 32.3438 3.75C39.9731 3.75 40.3125 6.3375 40.3125 11.7188C40.3125 14.415 40.3125 16.3331 39.18 17.7375C37.8769 19.3556 35.505 19.6875 32.3438 19.6875Z"
                fill="#00C2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7188 27.1875C6.5625 27.1875 6.5625 27.5775 6.5625 32.3438V32.3906C6.5625 34.4663 6.5625 35.9663 7.07063 36.6C7.5675 37.215 9.04313 37.5 11.7188 37.5C14.3944 37.5 15.87 37.2131 16.3669 36.5981C16.875 35.9663 16.875 34.4662 16.875 32.3888C16.875 27.5775 16.875 27.1875 11.7188 27.1875ZM11.7188 40.3125C8.5575 40.3125 6.18562 39.9806 4.8825 38.3625C3.75 36.9581 3.75 35.0419 3.75 32.3906L5.15625 32.3438H3.75C3.75 26.9625 4.08938 24.375 11.7188 24.375C19.3481 24.375 19.6875 26.9625 19.6875 32.3438C19.6875 35.04 19.6875 36.9581 18.555 38.3625C17.2519 39.9806 14.88 40.3125 11.7188 40.3125Z"
                fill="#00C2FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.3438 27.1875C27.1875 27.1875 27.1875 27.5775 27.1875 32.3438V32.3906C27.1875 34.4663 27.1875 35.9663 27.6956 36.6C28.1925 37.215 29.6681 37.5 32.3438 37.5C35.0194 37.5 36.495 37.2131 36.9919 36.5981C37.5 35.9663 37.5 34.4662 37.5 32.3888C37.5 27.5775 37.5 27.1875 32.3438 27.1875ZM32.3438 40.3125C29.1825 40.3125 26.8106 39.9806 25.5075 38.3625C24.375 36.9581 24.375 35.0419 24.375 32.3906L25.7812 32.3438H24.375C24.375 26.9625 24.7144 24.375 32.3438 24.375C39.9731 24.375 40.3125 26.9625 40.3125 32.3438C40.3125 35.04 40.3125 36.9581 39.18 38.3625C37.8769 39.9806 35.505 40.3125 32.3438 40.3125Z"
                fill="#00C2FF"
              />
            </svg>
          ) : (
            <Button label="Login" />
          )}
        </RightContainer>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100vw;
  padding: 0px 50px;
  background-color: ${primaryColor};
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom: 3px solid ${secondaryColor};
  position: absolute;
  top: 0;

  box-shadow: 0 2px 20px ${secondaryColor};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  a {
    text-decoration: none;
    color: ${secondaryColor};
  }

  a:hover {
    text-decoration: none;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-right: 20px;
    color: ${lightPrimaryColor};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 500;
  }

  .menu {
    cursor: pointer;
    transition: transform 0.5s;

    :hover {
      transform: rotate(45deg);
    }
  }
`;
