const Badge = ({ variant }: { variant: string }) => {
  return (
    <div
      className={`${
        variant === "Non Veg" ? "bg-[#FF9BA4]" : "bg-[#CFFFD3]"
      } px-4 py-[6px] rounded-[100px] text-[#030] text-sm font-medium tracking-tighter leading-8 flex items-center justify-center w-fit`}
    >
      {variant === "Non Veg" ? "Non Veg" : "Pure Veg"}
    </div>
  );
};

export default Badge;
