import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Shared/Input/Input";

const Profile = () => {
  const methods = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });
  const {
    handleSubmit,
    // register,
    // formState: { errors },
  } = methods;

  const handleUpdateProfile = () => {
    console.log("object");
  }
  return (
    <div className="mt-8">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleUpdateProfile)} className="flex flex-col gap-5 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <Input
          label="First Name"
          name="from_name"
          placeholder="e.g., John Doe"
          validation={{
            required: "First Name is required",
          }}
        />
        <Input
          label="Last Name"
          name="from_name"
          placeholder="e.g., John Doe"
          validation={{
            required: "Last Name is required",
          }}
        />
        <Input
          label="Email ID"
          name="email"
          placeholder="john@doe.com"
          validation={{
            required: "Email ID is required",
          }}
        />
        <Input
          label="Mobile Number"
          name="mobileNumber"
          placeholder="123456789"
          validation={{
            required: "Mobile Number is required",
          }}
        />
        <Input
          label="Street Address"
          name="address"
          placeholder="e.g., John Doe"
          validation={{
            required: "Street Address is required",
          }}
        />
        <Input
          label="Country"
          name="country"
          placeholder="e.g., John Doe"
          validation={{
            required: "Country is required",
          }}
        />
        <Input
          label="City"
          name="city"
          placeholder="e.g., John Doe"
          validation={{
            required: "City is required",
          }}
        />
        <Input
          label="Pin Code"
          name="pin"
          placeholder="e.g., John Doe"
          validation={{
            required: "Pin Code is required",
          }}
        />
        </div>

        <hr className="border-b border-[#E6E6E6]"/>

        <div className="flex items-center gap-[14px] justify-end">
            <button className="bg-[#8D9095] text-white font-Poppins font-medium leading-5 px-5 py-3 rounded-xl">
                Cancel
            </button>
            <button className="bg-[#DE3C4B] text-white font-Poppins font-medium leading-5 px-5 py-3 rounded-xl">
                Save
            </button>
        </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Profile;
