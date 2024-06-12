import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Affiliate from "./pages/Affiliate";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Slider from "./Slider";
import Body from "./pages/Body";
// import App from "./App";
import Caro from "./Caro";
import Blog from "./pages/Blog";
// import Carousel from "./carousel.components";

export default function App() {
  function PageLayout() {
    return (
      <div className="overflow-hidden">
        <Home />
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Caro />
              <Body />
            </>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />
        },
      ],
    },
    {
      path: "*",
      element: <div>Error: Page Not Found</div>,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={pageRoutes}></RouterProvider>
    </div>
  );
}
