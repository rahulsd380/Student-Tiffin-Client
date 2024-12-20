import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input2 from "../../components/Shared/Input/Input2";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";

type TFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  pin: string;
  country: string;
};

const Profile = () => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { data } = useGetMeQuery({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TFormValues>();
  
  useEffect(() => {
    if (data?.data) {
      setValue("firstName", data.data.firstName || "");
      setValue("lastName", data.data.lastName || "");
      setValue("email", data.data.email || "");
      setValue("phone", data.data.phone || "");
      setValue("street", data.data.address.street || "");
      setValue("city", data.data.address.city || "");
      setValue("pin", data.data.address.pin || "");
      setValue("country", data.data.address.country || "");
    }
  }, [data, setValue]);

  const handleUpdateProfile = async (formData: TFormValues) => {
    const profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: {
        street: formData.street,
        city: formData.city,
        pin: formData.pin,
        country: formData.country,
      },
    };

    try {
      await updateProfile(profileData).unwrap();
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="mt-8">
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="flex flex-col gap-5 md:gap-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Input2
            label="First Name"
            name="firstName"
            placeholder="e.g., John Doe"
            validation={{ required: "Enter your first name" }}
            register={register}
            error={errors.firstName}
          />
          <Input2
            label="Last Name"
            name="lastName"
            placeholder="e.g., John Doe"
            validation={{ required: "Enter your last name" }}
            register={register}
            error={errors.lastName}
          />
          <Input2
            label="Email ID"
            name="email"
            placeholder="john@doe.com"
            validation={{ required: "Enter your email" }}
            register={register}
            error={errors.email}
          />
          <Input2
            label="Mobile Number"
            name="phone"
            placeholder="123456789"
            validation={{ required: "Enter your mobile number" }}
            register={register}
            error={errors.phone}
          />
          <Input2
            label="Street Address"
            name="street"
            placeholder="e.g., New york"
            validation={{ required: "Street address is required" }}
            register={register}
            error={errors.street}
          />
          <Input2
            label="Country"
            name="country"
            placeholder="e.g., India"
            validation={{ required: "Enter your country name" }}
            register={register}
            error={errors.country}
          />
          <Input2
            label="City"
            name="city"
            placeholder="e.g., Mumbai"
            validation={{ required: "Enter your city name" }}
            register={register}
            error={errors.city}
          />
          <Input2
            label="PIN Code"
            name="pin"
            placeholder="e.g., 234143"
            validation={{ required: "Enter your area pin code" }}
            register={register}
            error={errors.pin}
          />
        </div>

        <hr className="border-b border-[#E6E6E6]" />

        <div className="flex items-center gap-[14px] justify-end">
          <button className="bg-[#8D9095] text-white font-Poppins font-medium leading-5 px-5 py-3 rounded-xl">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#DE3C4B] text-white font-Poppins font-medium leading-5 px-5 py-3 rounded-xl"
          >
            {isLoading ? "Updating Profile..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
