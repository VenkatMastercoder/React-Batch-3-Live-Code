import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AppLayout from "../layout/AppLayout"; // Normal Import
import { Suspense, lazy } from "react";

// Lazy Loading
const Home = lazy(() => import("../pages/Home"));
const Offer = lazy(() => import("../component/Offer/Offer"));
const Contact = lazy(() => import("../component/Contact/Contact"));
const Banner = lazy(() => import("../component/Banner/Banner")); // Dynamic Import

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Parent
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Offer />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/banner",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Banner />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;
