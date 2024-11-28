
import { SubmitHandler, useForm } from 'react-hook-form';
import Input2 from '../Shared/Input/Input2';

interface FormValues {
    email: string;
    mobileNumber : string;
    password: string;
    confirmPassword: string;
  }
const Signup = () => {
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
        <Input2
          label="Mobile Number"
          name="mobileNumber"
          placeholder="Enter Mobile Number"
          validation={{ required: "Enter your mobile number" }}
          register={register}
          error={errors.mobileNumber}
        />
          <Input2
            label="Password"
            name="password"
            placeholder="Must be at least 6 Characters"
            validation={{ required: "Enter your password" }}
            register={register}
            error={errors.password}
          />
          <Input2
            label="Password"
            name="confirmPassword"
            placeholder="Must be at least 6 Characters"
            validation={{ required: "Re-type your password" }}
            register={register}
            error={errors.confirmPassword}
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
          Get OTP
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