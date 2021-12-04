import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  lightPrimaryColor,
  primaryColor2,
  secondaryColor,
} from "../data/constants/constants";
import Button from "./../components/Button";
import { Store } from "./../utils/Store";
import NextLink from "next/link";
import ErrorCard from "../components/Error/ErrorCard";
import CircularLoader from "../components/Loader/CircularLoader";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorOccur, setIsErrorOccur] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { redirect } = router.query;

  // check user for existance
  useEffect(() => {
    if (userInfo) {
      setIsLoading(true);

      setTimeout(() => {
        router.replace("/dashboard");
      }, 5000);
    }
  }, [userInfo, router]);

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));

      //if user logined then push to dashboard
      router.push(redirect || "/dashboard");
    } catch (err) {
      setIsErrorOccur(!isErrorOccur);
      setErrorMessage("Invalid Email or Password");
      console.log("Invalid Email or Password");
    }
  };

  return (
    <FormContainer>
      {errorMessage && isErrorOccur ? (
        <ErrorCard isError={isErrorOccur} message={errorMessage} />
      ) : null}
      {isLoading ? (
        <CircularLoader />
      ) : (
        <form>
          <h1 className="login">Login</h1>
          <List>
            <ListItem>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <label htmlFor="password">password</label>
              <br />
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <Center>
                <Button
                  width="100%"
                  onClick={loginUser}
                  padding="15px 100px"
                  type="submit"
                  label="Login Now"
                />

                <ListItem>
                  <p className="register_link">
                    Do not have an account?
                    <NextLink href="/register">
                      <a> Register now</a>
                    </NextLink>
                  </p>
                </ListItem>
              </Center>
            </ListItem>
          </List>
        </form>
      )}
    </FormContainer>
  );
};

export default LoginScreen;

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${primaryColor2};
  position: relative;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    @media (min-width: 468px) {
      width: 40%;
    }

    h1.login {
      padding: 0px 30px;
      color: ${secondaryColor};
    }
  }
`;

const List = styled.div`
  padding: 30px;
`;
const ListItem = styled.div`
  width: 100%;
  position: relative;

  label {
    color: ${secondaryColor};
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 15px 20px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 10px 0px;
    font-size: 18px;
    background-color: ${lightPrimaryColor};
  }

  p.register_link {
    color: #fff;
    font-size: 1.1em;

    a {
      color: ${secondaryColor};
    }
  }
`;

const Center = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
`;
