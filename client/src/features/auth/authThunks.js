import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userSignUp = createAsyncThunk(
  "auth/signup",
  async (newUserData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/sign-up", newUserData);
      if (res.data.success) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "/auth/sign-in",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/sign-in", credentials);
      if (!res.data.success) {
        throw new Error("Sign in failed. something went wrong");
      }
      

      console.log(res.data);
      return res.data.user
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
