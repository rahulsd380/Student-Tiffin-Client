import { toast } from "sonner";
import { useModal } from "../../context/ModalContext";
// import axiosInstance from "../../utils/axiosInstance";
import Input2 from "../Shared/Input/Input2";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { useLoginMutation } from "../../redux/Features/Auth/authApi";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/Features/Auth/authSlice";
import axios from "axios";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { setOpenModal, setModalType } = useModal();
  const handleOpenForgotPasswordModal = () => {
    setModalType("forgotPassword");
    setOpenModal(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const [login, { isLoading: isLoginIn }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<FormValues> = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "https://student-tiffin-backend.vercel.app/api/v1/auth/login",
        loginData,
        {
          withCredentials: true,
        }
      );

      const user = response.data.user;

      // Display success message
      toast.success("Logged in successfully.");

      // Set the user in Redux state
      dispatch(setUser({ user }));

      // Close modal and navigate to home
      setOpenModal(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password!");
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

        {/* <button
          type="submit"
          className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
        >
          {isLoginIn ? "Login in..." : "Login"}
        </button> */}

        <button
          type="submit"
          className="px-6 py-3 text-white bg-[#DE3C4B] rounded-xl font-semibold w-full"
        >
          Login
        </button>
      </form>

      <div className="flex justify-center mt-8">
        <div className="text-[#DE3C4B] font-Poppins text-sm font-normal">
          New to Student Tiffin?{" "}
          <button
            onClick={() => setModalType("signup")}
            className=" font-medium"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
