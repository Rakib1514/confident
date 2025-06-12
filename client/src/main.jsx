import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { store } from "./App/Store.js";
import "./index.css";
import theme from "./mui/theme.js";
import { router } from "./routes/router.jsx";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
