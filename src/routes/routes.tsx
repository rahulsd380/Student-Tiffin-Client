import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Home from "../pages/Home/Home";
import Subscriptions from "../pages/Subscriptions/Subscriptions";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import Menu from "../pages/Menu/Menu";
import MenuDetails from "../pages/MenuDetails/MenuDetails";
import SettingLayout from "../layouts/SettingLayout/SettingLayout";
import Profile from "../pages/Profile/Profile";
import RecentOrders from "../pages/Settings/RecentOrders/RecentOrders";
import SubscriptionPage from "../pages/Settings/SubscriptionPage/SubscriptionPage";
import Checkout from "../pages/Checkout/Checkout";
import OrderSummary from "../pages/OrderSummary/OrderSummary";

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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menu-details/:id",
        element: <MenuDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-summary",
        element: <OrderSummary />,
      },
    ],
  },
  {
    path: "/setting",
    element: <SettingLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "recent-orders",
        element: <RecentOrders />,
      },
      {
        path: "subscriptions",
        element: <SubscriptionPage />,
      },
    ],
  },
]);
