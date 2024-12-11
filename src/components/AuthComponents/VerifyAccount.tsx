import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import { useModal } from "../../context/ModalContext";
import { toast } from "sonner";
import { useVerifyAccountMutation } from "../../redux/Features/Auth/authApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICONS } from "../../assets";

type TFormValues = {
  otp: string;
};

const VerifyAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const { setOpenModal, setModalType } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [verifyAccount] = useVerifyAccountMutation();

  useEffect(() => {
    // Retrieve email from localStorage
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  const handleVerifyAccount: SubmitHandler<TFormValues> = async (data) => {
    try {
      const verifyAccountData = {
        email: email,
        otp: data.otp,
      };
      await verifyAccount(verifyAccountData).unwrap();
      toast.success("Account created successfully");
      localStorage.removeItem("email");
      setOpenModal(false);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div>
      <div className="text-[#4A4A5A] font-Poppins text-lg text-center flex flex-col gap-1 items-center justify-center">
        <p className="text-[#4A4A5A] font-Poppins text-lg text-center">
          OTP Has been sent to
        </p>
        <button
          onClick={() => setModalType("signup")}
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

      <form
        onSubmit={handleSubmit(handleVerifyAccount)}
        className="flex flex-col gap-5 mt-9"
      >
        <Input2
          label="Enter the OTP to verify"
          name="otp"
          type="number"
          placeholder="Enter 6 Digit OTP"
          validation={{ required: "Enter the OTP" }}
          register={register}
          error={errors.otp}
        />

        <button
          type="submit"
          className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
        >
          Verify OTP
        </button>
      </form>
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => setModalType("signup")}
          className="text-[#DE3C4B] font-Poppins text-sm font-normal"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyAccount;
