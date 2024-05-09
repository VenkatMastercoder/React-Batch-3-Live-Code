import { createBrowserRouter } from "react-router-dom";
import Banner from "../component/Banner/Banner";
import Offer from "../component/Offer/Offer";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Contact from "../component/Contact/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Parent
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/banner",
        element: <Banner />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter