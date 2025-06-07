import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomeSection from "./Components/HomeSection/HomeSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./Components/Layout/Layout.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: "true", element: <HomeSection /> },
        { path: "/about", element: <AboutSection /> },
        { path: "/portfolio", element: <PortfolioSection /> },
        { path: "/contact", element: <ContactSection /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
