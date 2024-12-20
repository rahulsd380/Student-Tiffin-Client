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
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentSuccessPage from "../pages/PaymentSuccess/PaymentSuccessPage";
import { ICONS } from "../assets";
import ProtectedRoute from "./ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-summary",
        element: (
          <ProtectedRoute>
            <OrderSummary />
          </ProtectedRoute>
        ),
      },
      // After ONLINE payment it will show
      {
        path: "/success",
        element: (
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        ),
      },
      // After COD payment it will show
      {
        path: "/payment-success",
        element: (
          <ProtectedRoute>
            <PaymentSuccessPage
              icon={ICONS.orderConfirmed}
              title="Order Confirmed!!"
              description1="Congratulations!! We have received your order."
              description2="Thanks for subscribing to the plan! Your order will be processed, and we will reach out to you shortly."
            />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/setting",
    element: (
      <ProtectedRoute>
        <SettingLayout />
      </ProtectedRoute>
    ),
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
