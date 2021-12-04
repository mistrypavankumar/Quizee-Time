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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CircularLoader from "../components/Loader/CircularLoader";

const SignUPScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorOccur, setIsErrorOccur] = useState(false);
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

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("confirm password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { handleSubmit, register, formState } = useForm(formOptions);
  const { errors } = formState;

  const registerUser = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      setIsErrorOccur(!isErrorOccur);
      setErrorMessage("Password must match");
      console.log("password must match");
      return;
    }

    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push(redirect || "/dashboard");
    } catch (err) {
      setIsErrorOccur(!isErrorOccur);
      setErrorMessage("please fill details properly.");
      console.log("please fill details properly.");
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
        <form onSubmit={handleSubmit(registerUser)}>
          <h1 className="login">Sign Up</h1>
          <List>
            <ListItem>
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                name="username"
                {...register("username")}
                autoComplete="off"
                value={name}
                placeholder="User Name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <p>{errors.username?.message}</p>
            </ListItem>
            <ListItem>
              <label htmlFor="email">Email</label>
              <br />
              <input
                {...register("email")}
                type="email"
                name="email"
                autoComplete="off"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>{errors.username?.message}</p>
            </ListItem>
            <ListItem>
              <label htmlFor="password">password</label>
              <br />
              <input
                required
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <label htmlFor="cpassword">Confirm password</label>
              <br />
              <input
                type="password"
                name="cpassword"
                autoComplete="off"
                value={cpassword}
                placeholder="Confirm Password"
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
            </ListItem>
            <ListItem>
              <Center>
                <Button
                  width="100%"
                  onClick={registerUser}
                  padding="15px 100px"
                  type="submit"
                  label="Register Now"
                />
                <ListItem>
                  <p className="register_link">
                    Already have an account?
                    <NextLink
                      href={`/login?redirect=${redirect || "/dashboard"}`}
                    >
                      <a> Login now</a>
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

export default SignUPScreen;

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${primaryColor2};
  position: relative;
  overflow: hidden;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    padding-bottom: 50px;

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
    padding: 10px 20px;
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
