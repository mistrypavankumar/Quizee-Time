import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Store } from "../utils/Store";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import styled from "styled-components";

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // for showing messges on top of the screen
  //   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { redirect } = router.query; // login?redirect=/dashboard
  const classes = useStyles();

  //check user for existance
  useEffect(() => {
    if (userInfo) {
      router.push("/dashboard");
    }
  }, []);

  const submitHandler = async ({ email, password }) => {
    //     closeSnackbar();

    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push(redirect || "/dashboard");
    } catch (err) {
      //   enqueueSnackbar(
      //     err.response.data ? err.response.data.message : err.message,
      //     {
      //       variant: "error",
      //     }
      //   );
      console.log(err);
    }
  };
  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Login</h2>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginScreen;

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
