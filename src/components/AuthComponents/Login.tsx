
import Input2 from "../Shared/Input/Input2";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input2
          label="Email"
          name="email"
          placeholder="john@doe.com"
          validation={{ required: "Enter your email" }}
          register={register}
          error={errors.email}
        />
        <div>
          <Input2
            label="Password"
            name="password"
            placeholder="Must be at least 6 Characters"
            validation={{ required: "Enter your password" }}
            register={register}
            error={errors.password}
          />

          <div className="flex justify-end mt-[6px]">
            <button className="text-[#DE3C4B] font-Poppins text-sm font-medium">
              Forgot Password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
        >
          Login
        </button>
      </form>

      <div className="flex justify-center mt-8">
        <div className="text-[#DE3C4B] font-Poppins text-sm font-normal">
          New to Career Hub? <button className=" font-medium">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
