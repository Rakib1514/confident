import axios from "axios";
import { setError, setIsLoading, setUser } from "./authSlice";

export const userSignIn = (email, password) => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const res = await axios.post("/auth/sign-in", { email, password });
    dispatch(setUser(res.data.user));
  } catch (error) {
    dispatch(setError(error) || "Sign in failed");
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const userSignUp = (user) => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const res = await axios.post("/auth/sign-up", user);
    console.log(res.data.message);
  } catch (error) {
    dispatch(setError(error?.response?.data?.error) || "sign up failed");
  } finally {
    dispatch(setIsLoading(false));
  }
};
