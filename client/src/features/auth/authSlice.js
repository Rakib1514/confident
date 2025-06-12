import { createSlice } from "@reduxjs/toolkit";
import { userSignUp, userSignIn } from "./authThunks";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = Boolean(action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //* Sign up
      .addCase(userSignUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(userSignIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setIsLoading, setUser, setError } = authSlice.actions;
export default authSlice.reducer;
