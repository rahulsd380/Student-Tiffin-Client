import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import { navLinks } from "./navlinks";
import HamburgerMenu from "./HamburgerMenu";
import Dropdown from "./Dropdown";
import { IMAGES } from "../../../assets";
import AuthModal from "../Modals/AuthModal";
import { useModal } from "../../../context/ModalContext";
import { useUser } from "../../../context/UserContext";

const Navbar = () => {
  const { user } = useUser();
  const location = useLocation();
  const { setOpenModal, setModalType } = useModal();

  const handleOpenLogin = () => {
    setModalType("login");
    setOpenModal(true);
  };

  const handleOpenSignup = () => {
    setModalType("signup");
    setOpenModal(true);
  };

  return (
    <div className="bg-white px-5 md:px-10 xl:px-0 py-4 border-b border-[#E6E6E6]">
      <Container>
        <div className="font-Poppins flex items-center justify-between">
          <Link to={"/"}>
            <img
              src={IMAGES.studentTiffin}
              alt="student-tiffin"
              className="w-24"
            />
          </Link>

          {/* Navlinks */}
          <div className="flex items-center gap-5 md:gap-8 xl:gap-11 relative">
            <div className="hidden md:flex items-center gap-8 xl:gap-11">
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
            </div>
            {user ? (
              <Dropdown />
            ) : (
              <div className="hidden lg:flex items-center gap-5">
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
            )}

            <HamburgerMenu />
          </div>
        </div>
          
          {/* For login */}
        <AuthModal/>
      </Container>
    </div>
  );
};

export default Navbar;
