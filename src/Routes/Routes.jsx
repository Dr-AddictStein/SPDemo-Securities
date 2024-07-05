import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../Pages/MainPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
