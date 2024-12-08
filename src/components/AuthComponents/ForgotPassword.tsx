import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import { useModal } from "../../context/ModalContext";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "sonner";

type TFormValues = {
  email: string;
};

const ForgotPassword = () => {
  const { setOpenModal, setModalType } = useModal();
  const handleOpenForgotPasswordSent= () => {
    setModalType("forgotPasswordSentEmail");
    setOpenModal(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleForgotPassword: SubmitHandler<TFormValues> = async (data) => {
    try {
      const forgotPasswordData = {
        email: data.email,
      };

      await axiosInstance.post("/auth/forgot-password", forgotPasswordData);
      toast.success("Please check your email");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForgotPassword)} className="flex flex-col gap-5">
      <Input2
        label="Enter Registered Email ID"
        name="email"
        placeholder="john@doe.com"
        validation={{ required: "Enter your email" }}
        register={register}
        error={errors.email}
      />

      <button
      onClick={handleOpenForgotPasswordSent}
        type="submit"
        className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
      >
        Send Confirmation Email
      </button>
    </form>
  );
};

export default ForgotPassword;
