import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ FIXED
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomeComponent from "./components/HomeComponent";
import ContactUsComponent from "./components/ContactUsComponent"; // ✅ Add this if missing
import ErrorComponent from "./components/ErrorComponent";
import CountryDetailsComponent from "./components/CountryDetailsComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <HomeComponent /> },
      {
        path: "/contact",
        element: <ContactUsComponent />,
      },
      {
        path: "/:country",
        element: <CountryDetailsComponent />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
