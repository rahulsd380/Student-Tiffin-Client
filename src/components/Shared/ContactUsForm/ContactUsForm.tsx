import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input/Input";
import emailjs from "@emailjs/browser";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { toast } from "sonner";

// Define the form values type
type FormValues = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

type TProps = {
  classNames?: string;
  setOpenModal?: Dispatch<SetStateAction<boolean>>
};

const ContactUsForm: React.FC<TProps> = ({ classNames, setOpenModal }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  const { handleSubmit, register, formState: { errors } } = methods;

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail: SubmitHandler<FormValues> = () => {
    if (!form.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_8exd75k",
        "template_w5ucukg",
        form.current,
        "zVZ_vJ5DlHMffQppL"
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSent(true);
          toast("Thanks for your interest. We will contact you soon!", {
            style: {
              padding: "10px",
              borderRadius: "5px",
            },
            duration: 3000,
          });
          setTimeout(() => {
            setIsSent(false);
            setOpenModal && setOpenModal((prev) => !prev);
          }, 3000);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          toast.error("Failed! Try again.");
        }
      );
  };

  return (
    <FormProvider {...methods}>
      <form ref={form} onSubmit={handleSubmit(sendEmail)} className={`space-y-8 ${classNames}`}>
        <Input
          label="Full Name"
          name="from_name"
          placeholder="e.g., John Doe"
          validation={{
            required: "Full Name is required",
          }}
        />
        <Input
          label="Email"
          name="from_email"
          placeholder="e.g., johndoe@site.com"
          isOptional={true}
        />
        <Input
          label="Mobile Number"
          name="mobileNumber"
          placeholder="e.g., +1 234 567 890"
          validation={{
            required: "Mobile Number is required",
          }}
        />

        {/* Custom Message Textarea */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[#6E7883] font-Poppins leading-5">
            Message
          </label>
          <textarea
            rows={6}
            className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
              errors.message ? "border-[#DE3C4B]" : "border-[#6e78831f]"
            } focus:outline-none`}
            placeholder="Write message here..."
            {...register("message")}
          />
          {errors.message && (
            <p className="text-[#DE3C4B] text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end bg-white border-t border-[#43ff641f]">
          <button
            type="submit"
            className={`px-8 py-4 text-white ${
              isSent ? "bg-green-500" : "bg-primary-gradient"
            } shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : isSent ? "Sent" : "Submit"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactUsForm;
