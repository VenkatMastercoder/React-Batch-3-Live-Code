/* eslint-disable react/prop-types */
import "./index.css";
import ReactDOM from "react-dom/client";
import appRouter from "./routes/routes";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
