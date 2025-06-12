import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

        <Button type="submit" fullWidth variant="contained">
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
