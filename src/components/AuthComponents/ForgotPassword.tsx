import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import { useModal } from "../../context/ModalContext";

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

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
