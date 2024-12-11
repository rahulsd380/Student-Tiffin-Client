import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import { useModal } from "../../context/ModalContext";

const ForgotPasswordSentEmail = () => {
  const [email, setEmail] = useState<string | null>(null);

  const { setOpenModal, setModalType } = useModal();

  useEffect(() => {
    const storedEmail = localStorage.getItem("forgotPasswordEmail");
    setEmail(storedEmail);
  }, []);
  const handleOpenChangePassword = () => {
    setModalType("changePassword");
    setOpenModal(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-[#4A4A5A] font-Poppins text-lg text-center flex flex-col gap-1 items-center justify-center">
        <p className="text-[#4A4A5A] font-Poppins text-lg text-center">
          Confirmation Email Has been sent to
        </p>
        <button
          onClick={handleOpenChangePassword}
          className="flex items-center gap-1 font-medium underline"
        >
          {email}{" "}
          <img
            src={ICONS.pen}
            alt="pen-icon"
            className="size-[18px] cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordSentEmail;
