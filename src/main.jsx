import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Supports weights 100-900
import "@fontsource-variable/dm-sans";
import SpecificPage from "./pages/SpecificPage/index.jsx";
import ErrorPage from "./pages/ErrorPage/index.jsx";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/project/:slug",
    element: <SpecificPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
