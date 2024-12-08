import { toast } from "sonner";
import { useModal } from "../../context/ModalContext";
import axiosInstance from "../../utils/axiosInstance";
import Input2 from "../Shared/Input/Input2";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { setOpenModal, setModalType } = useModal();
  const { setUser } = useUser();
  const handleOpenForgotPasswordModal = () => {
    setModalType("forgotPassword");
    setOpenModal(true);
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleLogin: SubmitHandler<FormValues> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };

      const response = await axiosInstance.post("/auth/login", loginData);
      console.log(response.data);
      toast.success("Welcome back!");
      setUser(response.data.user)
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-5"
      >
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
            type="password"
            placeholder="Must be at least 6 Characters"
            validation={{ required: "Enter your password" }}
            register={register}
            error={errors.password}
          />

          <div className="flex justify-end mt-[6px]">
            <div
              onClick={handleOpenForgotPasswordModal}
              className="text-[#DE3C4B] font-Poppins text-sm font-medium cursor-pointer"
            >
              Forgot Password?
            </div>
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
