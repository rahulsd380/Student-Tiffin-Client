import { useState } from "react";
import Container from "../../Shared/Container/Container";
import Modal from "../../Shared/Modal/Modal";
import Input from "../../Shared/Input/Input";
import { FormProvider, useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

const BringingComfort = () => {
  const [openModal, setOpenModal] = useState(false);
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
    <div className="bg-[#FBF5F3] py-[64px] xl:py-[128px]">
      <Container>
        <div className="font-Poppins px-5 md:px-10 xl:px-0">
          <div className="px-6 py-3 rounded-[100px] border border-[#E28413] text-[#E28413] font-medium leading-5 uppercase tracking-tighter w-fit">
            Student Tiffin
          </div>
          <h1 className="text-[#293241] text-[36px] md:text-[44px] xl:text-[48px] font-bold leading-11 md:leading-[64px] tracking-tighter mt-6 max-w-[330px] md:max-w-[688px] xl:max-w-[752px]">
            Bringing the comfort of home to your table.
          </h1>

          <p className="text-[#424B54] text-lg md:text-2xl leading-6 md:leading-9 max-w-[310px] md:max-w-[688px] xl:max-w-[716px] mt-3">
            At Student Tiffin, we deliver authentic Indian meals made from
            family recipes. Enjoy healthy, delicious food without the hassle of
            cooking. We deliver because food and hunger don’t take a holiday 😉
            .
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className="px-8 py-4 text-white bg-primary-gradient shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6"
          >
            Choose Your Tiffin
          </button>
        </div>
      </Container>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        classNames={"w-full max-w-[688px] h-[578px] overflow-y-auto p-4 md:p-8"}
      >
        {/* Form */}
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
      </Modal>
    </div>
  );
};

export default BringingComfort;
