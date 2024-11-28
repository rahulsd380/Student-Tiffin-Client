import { ICONS } from "../../../assets";
import { useModal } from "../../../context/ModalContext";
import ChangePassword from "../../AuthComponents/ChangePassword";
import ForgotPassword from "../../AuthComponents/ForgotPassword";
import ForgotPasswordSentEmail from "../../AuthComponents/forgotPasswordSentEmail";
import Login from "../../AuthComponents/Login";
import Signup from "../../AuthComponents/Signup";

const AuthModal = () => {
  const { openModal, setOpenModal, modalType } = useModal();

  const renderModalContent = () => {
    switch (modalType) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
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
        } w-[90%] md:w-[70%] lg:w-[529px] overflow-y-auto bg-[#ffffff] rounded-2xl ${modalType === "forgotPassword" || modalType === "forgotPasswordSentEmail" ? "px-12 py-12" : "px-6 py-6"} transition-all duration-300 ${modalType === "login" ? "h-fit" : modalType === "signup" ? "h-[480px] xl:h-[550px] 2xl:h-[700px]" : modalType === "forgotPassword" ? "h-fit" : modalType === "forgotPasswordSentEmail" ? "h-[252px]" : "h-fit"}`}
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
