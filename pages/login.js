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

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { redirect } = router.query;

  // check user for existance
  useEffect(() => {
    if (userInfo) {
      router.replace("/dashboard");
    }
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      console.log(data);

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));

      //if user logined then push to dashboard
      router.push(redirect || "/dashboard");
    } catch (err) {
      console.log("Invalid Email or Password");
    }
  };

  return (
    <FormContainer>
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
                onClick={loginUser}
                padding="15px 100px"
                type="submit"
                label="Login"
              />
            </Center>
          </ListItem>
        </List>
      </form>
    </FormContainer>
  );
};

export default LoginScreen;

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${primaryColor2};
  position: relative;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    width: 500px;
    margin: 0 auto;

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
`;

const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
`;
