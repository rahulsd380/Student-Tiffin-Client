import { useFormContext, RegisterOptions } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  validation?: RegisterOptions;
  type?: string;
}

const Input: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  validation,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[#6E7883] font-Poppins leading-5">
        {label}
        <span className="text-[#DE3C4B]">*</span>
      </label>
      <input
        type={type}
        id={name}
        className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
          errors[name] ? "border-[#DE3C4B]" : "border-[#6e78831f]"
        } focus:outline-none`}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className="text-[#DE3C4B] text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Input;
