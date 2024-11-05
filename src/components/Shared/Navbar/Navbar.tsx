import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import { ICONS } from "../../../assets";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "./navlinks";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  const dropdownLinks = [
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
      label: "Subscription",
      path: "/",
      icon: ICONS.subscription,
    },
  ];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="bg-white py-4 border-b border-[#E6E6E6]">
      <Container>
        <div className="font-Poppins flex items-center justify-between">
          <h1 className="font-semibold leading-5">Student Tiffin</h1>

          {/* Navlinks */}
          <div className="flex items-center gap-11 relative">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`leading-5 ${
                  location.pathname === link.path
                    ? "text-[#DE3C4B] font-medium"
                    : "text-[#424B54] font-normal"
                }`}
              >
                {link.label}
              </a>
            ))}
            <img
              onClick={() => setOpen(!open)}
              src={ICONS.user}
              alt=""
              className="size-6 cursor-pointer"
            />

            {/* Dropdown */}
            <div
              ref={dropDownRef}
              className={`absolute p-2 top-12 right-0 w-[277px] rounded-2xl bg-white border border-[#E6E6E6] transition-opacity duration-300 ${
                open
                  ? "opacity-100 visible duration-500"
                  : "opacity-0 invisible duration-150"
              }`}
            >
              <div className="flex flex-col gap-1">
                {dropdownLinks.map((item, idx) => (
                  <Link
                    to={item.path}
                    style={{
                      transform: `translateY(${open ? 0 : (idx + 1) * 10}px)`,
                    }}
                    key={idx}
                    className="p-[10px] leading-5 text-[#424B54] transition-all duration-300 flex items-center gap-[6px]"
                  >
                    <img src={item.icon} alt="" className="size-5" />
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* HR */}
              <hr className="border border-[#E6E6E6] h-[1px] mt-2" />

              {/* Sign Out button with animation */}
              <button
                className={`p-[10px] leading-5 text-[#49515D] mt-2 transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
