import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../../features/auth/authThunks";

const SignUp = () => {
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.auth);

  console.log(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(userSignUp(data)).unwrap();
      console.log("Signup successful:", result);
      reset();
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen w-10/12 mx-auto">
      <div className="border order-2 lg:order-1">side animation or photo</div>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="border border-red-500 p-4 space-y-4 order-1 lg:order-2"
      >
        <div className="font-bitter font-semibold text-3xl mb-6">
          <span>Register an Account</span>
        </div>

        <div className="grid grid-cols-2 gap-4 ">
          <TextField
            label="First Name"
            {...register("firstName", { required: "Please add First Name" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField label="Last Name" {...register("lastName")} />
        </div>

        <div>
          <TextField
            label="Email"
            fullWidth
            {...register("email", {
              required: "Please add email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>

        <div>
          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*\d).+$/,
                message: "Password must contain at least one number",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>

        <Button loading={isLoading} type="submit" fullWidth variant="contained">
          Sign Up
        </Button>

        <div className="h-6 mt-4">
          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
      </Box>
    </div>
  );
};

export default SignUp;
