import { ICONS } from "../../../assets";

export const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About", path: "/about" },
    { label: "Subscriptions", path: "/subscriptions" },
    { label: "Contact", path: "/contact-us" },
  ];

  export const dropdownLinks = [
    {
      label: "Profile",
      path: "/",
      icon: ICONS.user,
    },
    {
      label: "Recent Orders",
      path: "/",
      icon: ICONS.recentOrders,
    },
    {
      label: "Subscriptions",
      path: "/subscriptions",
      icon: ICONS.subscription,
    },
  ];