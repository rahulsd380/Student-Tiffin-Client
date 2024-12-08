import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "sonner";

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

  const handleChangePassword: SubmitHandler<TFormValues> = async (data) => {
    try {
      const changePasswordData = {
        password: data.password,
        confirmPassword: data.confirmPassword,
      };

      const response = await axiosInstance.post('/auth/reset-password/:token', changePasswordData);
      console.log(response.data);
      toast.success("Password reset successfully.");
    } catch (error) {
      toast.error("Something went wrong! Please try again.")
    }
  };

  return (
    <form onSubmit={handleSubmit(handleChangePassword)} className="flex flex-col gap-5 pb-6">
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
