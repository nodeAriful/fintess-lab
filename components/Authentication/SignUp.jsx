import { useMutation } from "@apollo/client";
// import { useMutation } from "@apollo/react-hooks";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { REG_USER } from "../Apollo/mutation";
import {
  AuthHeader,
  AuthHeading,
  AuthTitle,
  ErrorMessage,
  Input,
  InputBox,
  Label,
} from "../Styles/Auth";
import { ButtonMaster } from "../Styles/reusable";

const Signup = ({ handleLogin }) => {
  const { register: reg, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const { cart } = useStoreState((state) => state.cart);
  const authAction = useStoreActions((state) => state.auth.authStore);

  const [register, { data, loading, error }] = useMutation(REG_USER);

  const onSubmit = (userData) => {
    register({
      variables: {
        username: userData.username,
        password: userData.password,
        email: userData.email,
      },
    });

    if (!error && data) {
      authAction(data?.register);
      toast(
        "Successfully your account has been created. Your user name is " +
          data?.register.user.username
      );
      if (cart.length > 0) {
        router.push("/cart");
      } else {
        router.push("/products");
      }
    }
    router.push("/products");
  };

  return (
    <Card
      sx={{
        my: 5,
        padding: 2,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthHeader>
        <AuthHeading variant="h4" component={"h4"}>
          Sign Up and Start Shopping
        </AuthHeading>
        <AuthTitle variant="title" component={"body2"}>
          Or{" "}
          <Button sx={{ color: "red" }} onClick={handleLogin}>
            Login
          </Button>
        </AuthTitle>
      </AuthHeader>
      <CardContent>
        <InputBox>
          <Label>Username</Label>
          <Input type="text" {...reg("username", { required: true })} />
          {errors.username && <ErrorMessage>Username is Required</ErrorMessage>}
        </InputBox>

        <InputBox>
          <Label>Email</Label>
          <Input
            {...reg("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <Label>Password</Label>
          <Input
            {...reg("password", {
              required: "required",
              minLength: {
                value: 8,
                message: "min length is 8",
              },
            })}
            type="password"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            {...reg("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <ErrorMessage variant="body2">
              {errors.confirmPassword?.message}
            </ErrorMessage>
          )}
        </InputBox>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <ButtonMaster sx={{ width: "100%" }} type="submit">
          Sign Up
        </ButtonMaster>
      </CardActions>
    </Card>
  );
};

export default Signup;
