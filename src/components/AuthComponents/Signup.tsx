import { SubmitHandler, useForm } from "react-hook-form";
import Input2 from "../Shared/Input/Input2";
import { toast } from "sonner";
import { useModal } from "../../context/ModalContext";
import { useSignupMutation } from "../../redux/Features/Auth/authApi";

interface FormValues {
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}
const Signup = () => {
  const { setModalType } = useModal();
  const [signup, { isLoading }] = useSignupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleSignup: SubmitHandler<FormValues> = async (data) => {
    try {
      const signupData = {
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirm_password: data.confirm_password,
      };

      localStorage.setItem("email", data.email);

      const response = await signup(signupData).unwrap();
      console.log(response.data);
      toast.success(`OTP sent to ${signupData.email}`);
      setModalType("verifyAccount");
      // toast.success("Account Created Successfully.");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSignup)}
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
        <Input2
          label="Mobile Number"
          name="phone"
          placeholder="Enter Mobile Number"
          validation={{ required: "Enter your mobile number" }}
          register={register}
          error={errors.phone}
        />
        <Input2
          label="Password"
          name="password"
          type="password"
          placeholder="Must be at least 6 Characters"
          validation={{ required: "Enter your password" }}
          register={register}
          error={errors.password}
        />
        <Input2
          label="Password"
          name="confirm_password"
          type="password"
          placeholder="Must be at least 6 Characters"
          validation={{ required: "Re-type your password" }}
          register={register}
          error={errors.confirm_password}
        />

        <div>
          <button className="text-[#DE3C4B] font-Poppins text-xs">
            By signing up, you agree to our Terms and Conditions.
          </button>
        </div>

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
            "Get OTP"
          )}
        </button>
      </form>

      <div className="flex justify-center mt-8">
        <div className="text-[#DE3C4B] font-Poppins text-sm font-normal">
          Already registered? <button className=" font-medium">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
