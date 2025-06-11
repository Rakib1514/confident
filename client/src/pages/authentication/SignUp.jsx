import React from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Sign Up
      </Typography>

      {/* First and Last Name */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            {...register("firstName", { required: "First name is required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Last Name" {...register("lastName")} />
        </Grid>
      </Grid>

      {/* Email */}
      <Box mt={2}>
        <TextField
          fullWidth
          label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Box>

      {/* Password */}
      <Box mt={2}>
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
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        
      >
        Sign Up
      </Button>
    </Box>
  );
}
