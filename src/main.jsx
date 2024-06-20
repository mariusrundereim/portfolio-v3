import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Supports weights 100-900
import "@fontsource-variable/dm-sans";
import SpecificPage from "./pages/SpecificPage/index.jsx";
import ErrorPage from "./pages/ErrorPage/index.jsx";
import Layout from "./components/Layout/index.jsx";
// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/project/:slug",
    element: (
      <Layout>
        <SpecificPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
