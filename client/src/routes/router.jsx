import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import App from "../App/App";
import SignUp from "../pages/authentication/SignUp";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "/sign-up",
            Component: SignUp,
          },
        ],
      },
    ],
  },
]);
