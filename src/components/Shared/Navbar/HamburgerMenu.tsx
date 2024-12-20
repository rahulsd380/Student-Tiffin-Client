import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ICONS } from "../../../assets";
import { navLinks } from "./navlinks";
import { useModal } from "../../../context/ModalContext";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../redux/Features/Auth/authSlice";

export type TUser = {
  userId: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
  _id?: string;
};
const HamburgerMenu = () => {
  const user = useSelector(useCurrentUser) as TUser | null;
  const location = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const closestDropdown = target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  const { setOpenModal, setModalType } = useModal();

  const handleOpenLogin = () => {
    setModalType("login");
    setOpenModal(true);
    setIsHamburgerOpen(false);
  };

  const handleOpenSignup = () => {
    setModalType("signup");
    setOpenModal(true);
    setIsHamburgerOpen(false);
  };

  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <img
        onClick={toggleHamburgerMenu}
        src={ICONS.menu}
        alt="menu-icon"
        className="size-6 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`py-6 fixed inset-y-0 right-0 z-50 bg-white w-[330px] overflow-y-auto h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-[3px]">
          {navLinks.map((link, index) => (
            <Link
              onClick={toggleHamburgerMenu}
              key={index}
              to={link.path}
              className={`leading-5 bg-white px-5 py-4 ${
                location.pathname === link.path
                  ? "text-[#DE3C4B] font-medium"
                  : "text-[#424B54] font-normal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {
          !user &&
          <div className="flex flex-col gap-5 px-5">
          <button
            onClick={handleOpenLogin}
            className="px-6 py-3 rounded-xl border border-[#DE3C4B] text-[#DE3C4B] font-semibold"
          >
            Sign In
          </button>

          <button
            onClick={handleOpenSignup}
            className="px-6 py-3 text-white bg-primary-gradient rounded-xl font-semibold border border-[#DE3C4B]"
          >
            Sign Up
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default HamburgerMenu;
