import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { userSignIn } from "../../features/auth/authThunks";

const SignIn = () => {
  const dispatch = useDispatch();

  const { error, isLoading, user } = useSelector((state) => state.auth);

  console.log("ERROR", error);
  console.log("USERRRRRRRRRR", user)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    dispatch(userSignIn(values));
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen w-10/12 mx-auto mt-6">
      <div className="border order-2 lg:order-1">side animation or photo</div>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="border border-red-500 p-4 space-y-4 order-1 lg:order-2"
      >
        <div className="font-bitter font-semibold text-3xl mb-6">
          <span>Sign in</span>
        </div>

        <div>
          <TextField
            label="Email"
            fullWidth
            {...register("email", {
              required: "Please provide email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>

        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register("password", {
            required: "Provide your password",
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          loading={isLoading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>

        <div className="h-6 mt-4">
          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
        <div className="text-sm underline text-secondary">
          <Link to={"/sign-up"}>Don't have an account? Sign-up!</Link>
        </div>
      </Box>
    </div>
  );
};

export default SignIn;
