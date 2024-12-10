import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ICONS } from "../../../assets";
import { useModal } from "../../../context/ModalContext";
import ChangePassword from "../../AuthComponents/ChangePassword";
import ForgotPassword from "../../AuthComponents/ForgotPassword";
import Login from "../../AuthComponents/Login";
import Signup from "../../AuthComponents/Signup";
import ForgotPasswordSentEmail from "../../AuthComponents/ForgotPasswordSentEmail";
import VerifyAccount from "../../AuthComponents/VerifyAccount";

const AuthModal = () => {
  const { openModal, setOpenModal, modalType, setModalType } = useModal();
  const location = useLocation();

  // Parse the query parameters to control modal visibility
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const openModalQuery = queryParams.get("openModal");
    const modalTypeQuery = queryParams.get("modalType");

    if (openModalQuery === "true" && modalTypeQuery) {
      setOpenModal(true);
      setModalType(modalTypeQuery as "login" | "signup" | "verifyAccount" | "forgotPassword" | "changePassword" | "forgotPasswordSentEmail");
    } else {
      setOpenModal(false);
    }
  }, [location.search, setOpenModal, setModalType]);

  const renderModalContent = () => {
    switch (modalType) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      case "verifyAccount":
        return <VerifyAccount />;
      case "forgotPassword":
        return <ForgotPassword />;
      case "changePassword":
        return <ChangePassword />;
      case "forgotPasswordSentEmail":
        return <ForgotPasswordSentEmail />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${
        openModal ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          openModal ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] md:w-[70%] lg:w-[529px] overflow-y-auto bg-[#ffffff] rounded-2xl ${
          modalType === "forgotPassword" ||
          modalType === "forgotPasswordSentEmail"
            ? "px-12 py-12"
            : "px-6 py-6"
        } transition-all duration-300 ${
          modalType === "login"
            ? "h-fit"
            : modalType === "signup"
            ? "h-[480px] xl:h-[550px] 2xl:h-[700px]"
            : modalType === "forgotPassword"
            ? "h-fit"
            : modalType === "forgotPasswordSentEmail"
            ? "h-[252px]"
            : "h-fit"
        }`}
      >
        <div className="flex justify-end w-full">
          <img
            onClick={() => setOpenModal(false)}
            src={ICONS.close}
            alt="close-icon"
            className="size-6 cursor-pointer"
          />
        </div>
        <h1 className="text-[#303D5C] font-Poppins text-xl sm:text-[28px] font-bold text-center mb-8">
          {modalType === "login" && "Login to Student Tiffin"}
          {modalType === "signup" && "Sign Up to Student Tiffin"}
          {modalType === "verifyAccount" && "Verify Your Email"}
          {modalType === "forgotPassword" && "Forgot Password"}
          {modalType === "changePassword" && "Change Password"}
          {modalType === "forgotPasswordSentEmail" && "Forgot Password?"}
        </h1>
        {renderModalContent()}
      </div>
    </div>
  );
};

export default AuthModal;
