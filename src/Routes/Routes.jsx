import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Temp1 from "../Pages/Temp1";
import Temp2 from "../Pages/Temp2";
import MainPage from "../Pages/MainPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Temp1 />,
      },
      {
        path: "temp2",
        element: <Temp2 />,
      },
      {
        path: "mainPage",
        element: <MainPage />
      },
    ],
  },
]);
