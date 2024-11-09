import { FormProvider, useForm } from "react-hook-form";
import Input from "../Input/Input";


type FormValues = {
    fullName: string;
    email: string;
    mobileNumber: string;
    message: string;
  };

const ContactUsForm = () => {
    const methods = useForm<FormValues>({
        defaultValues: {
          fullName: "",
          email: "",
          mobileNumber: "",
          message: "",
        },
      });
    
      const { handleSubmit, register, formState: { errors } } = methods;
    
      const onSubmit = (data: FormValues) => {
        console.log(data);
      };
      
    return (
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="e.g., John Doe"
            validation={{
              required: "Full Name is required",
            }}
          />
          <Input
            label="Email"
            name="email"
            placeholder="eg., johndoe@site.com"
            validation={{
              required: "Email is required",
            }}
          />
          <Input
            label="Mobile Number"
            name="mobileNumber"
            placeholder="eg., +1 234 567 890"
            validation={{
              required: "Mobile Number is required",
            }}
          />

{/* Custom Message Textarea */}
<div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[#6E7883] font-Poppins leading-5">
            Message
            <span className="text-[#DE3C4B]">*</span>
          </label>
          <textarea
          rows={6}
            id="message"
            className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
              errors.message ? "border-[#DE3C4B]" : "border-[#6e78831f]"
            } focus:outline-none`}
            placeholder="Write message here..."
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-[#DE3C4B] text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-end bg-white border-t border-[#43ff641f]">
        <button
            type="submit"
            className="px-8 py-4 text-white bg-primary-gradient shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6"
          >
            Submit
          </button>
        </div>


        </form>
        </FormProvider>
    );
};

export default ContactUsForm;