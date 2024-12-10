import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import { useModal } from "../../context/ModalContext";
import { toast } from "sonner";
import { useForgotPasswordMutation } from "../../redux/Features/Auth/authApi";

type TFormValues = {
  email: string;
};

const ForgotPassword = () => {
  const { setOpenModal, setModalType } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [forgotPassword, {isLoading}] = useForgotPasswordMutation();

  const handleForgotPassword: SubmitHandler<TFormValues> = async (data) => {
    try {
      const forgotPasswordData = {
        email: data.email,
      };
      localStorage.setItem("forgotPasswordEmail", data.email);

      await forgotPassword(forgotPasswordData).unwrap();
      toast.success("Please check your email");
      setModalType("forgotPasswordSentEmail");
      setOpenModal(true);
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
        type="submit"
        className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
      >
        {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <p>Loading</p>
              {/* Loader */}
              <div className="size-7 flex gap-1 items-center justify-center">
                <div className="size-[6px] animate-[bounce_.6s_linear_.2s_infinite] bg-white rounded-full"></div>
                <div className="size-[6px] animate-[bounce_.6s_linear_.3s_infinite] bg-white rounded-full"></div>
                <div className="size-[6px] animate-[bounce_.6s_linear_.4s_infinite] bg-white rounded-full"></div>
              </div>
            </div>
          ) : (
            "Send Confirmation Email"
          )}
        
      </button>
    </form>
  );
};

export default ForgotPassword;
