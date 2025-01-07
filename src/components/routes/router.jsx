import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../../pages/Home";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";
import About from "../../pages/about/About.jsx";
import Location from "../../pages/location/ApartmentPage.jsx";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/location/:id",
        element: <Location />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <h1>404 not found</h1>,
      },
    ],
  },
]);
