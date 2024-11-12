import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Home from "../pages/Home/Home";
import Subscriptions from "../pages/Subscriptions/Subscriptions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
]);
