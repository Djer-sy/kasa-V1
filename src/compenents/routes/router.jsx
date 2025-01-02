import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../../pages/Home";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";
import About from "../../pages/about/About.jsx";


const HeaderFooterLayout = ()=> {
  return(
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
    path:"",
    element:<HeaderFooterLayout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/location/:id",
        element: <h1>appartement</h1>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "*",
        element: <h1>404 not found</h1>
      },
    ]
  }
 ]);