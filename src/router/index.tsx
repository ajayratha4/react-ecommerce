/* eslint-disable react/react-in-jsx-scope */

import LoginContainer from "common/LoginContainer";
import { RouteObject } from "react-router-dom";
import About from "screen/About";
import NotFound from "screen/Error/NotFound";
import ForgotPassword from "screen/ForgotPassword";
import Home from "screen/Home";
import Login from "screen/Login";
import Profile from "screen/Profile";
import Signup from "screen/Signup";
import PrivateRoute from "./PrivateRoute";

export const routesConfig: RouteObject[] = [
  {
    element: <NotFound />,
    path: "*",
  },

  {
    element: <LoginContainer />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];
