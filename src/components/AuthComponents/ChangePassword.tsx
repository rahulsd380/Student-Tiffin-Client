import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";

type TFormValues = {
  email: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 pb-6">
      <Input2
        label="New Password"
        name="newPassword"
        placeholder="password"
        validation={{ required: "Enter your new password" }}
        register={register}
        error={errors.email}
      />
      <Input2
        label="Confirm New Password"
        name="confirmNewPassword"
        placeholder="password"
        validation={{ required: "Re-enter your password" }}
        register={register}
        error={errors.email}
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
