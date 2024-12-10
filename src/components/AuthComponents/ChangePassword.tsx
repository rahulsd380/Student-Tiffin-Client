import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import { toast } from "sonner";
import { useResetPasswordMutation } from "../../redux/Features/Auth/authApi";

type TFormValues = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [resetPassword] = useResetPasswordMutation();
  const token = "";

  const handleChangePassword: SubmitHandler<TFormValues> = async (data) => {
    try {
      const resetPasswordData = {
        password: data.password,
        confirmPassword: data.confirmPassword,
      };

      const response = await resetPassword({
        resetPasswordData,
        token,
      }).unwrap();
      console.log(response.data);
      toast.success("Password reset successfully.");
      localStorage.removeItem("forgotPasswordEmail");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangePassword)}
      className="flex flex-col gap-5 pb-6"
    >
      <Input2
        label="New Password"
        name="password"
        placeholder="password"
        validation={{ required: "Enter your new password" }}
        register={register}
        error={errors.password}
      />
      <Input2
        label="Confirm New Password"
        name="confirmPassword"
        placeholder="password"
        validation={{ required: "Re-enter your password" }}
        register={register}
        error={errors.confirmPassword}
      />

      <button
        type="submit"
        className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
