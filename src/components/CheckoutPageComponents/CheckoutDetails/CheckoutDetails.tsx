import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";

const CheckoutDetails = ({heading}:{heading:string}) => {
  return (
    <div className="bg-[#293241] rounded-t-none md:rounded-t-xl p-6 font-Poppins flex flex-col gap-5">
      {/* Heading */}
      <div className="flex items-center gap-[6px]">
        <Link to={"/"}>
        <img
          src={ICONS.leftArrowWhite}
          alt="leftArrowWhite"
          className="size-5"
        />
        </Link>
        <h1 className="font-bold leading-5 text-white">{heading}</h1>
      </div>

      <hr className="border border-[#ffffff26] border-dashed"/>

      {/* Chosen product card */}
      <div className="flex items-center justify-between border-b border-[#ffffff26] pb-5 border-dashed">
        <div>
          <h1 className="text-white font-medium leading-5">
            Vegetarian Meal (Monthly)
          </h1>
          <p className="text-[#ffffffbf] leading-5 mt-1">Expires on 24-10-2024</p>
        </div>

        <h1 className="text-white font-medium leading-5">€32</h1>
      </div>

    {/* Subtotal */}
      <div className="flex items-center justify-between border-b border-[#ffffff26] pb-5 border-dashed">
        <h1 className="text-white font-medium leading-5">Subtotal</h1>
        <h1 className="text-white font-medium leading-5">€32</h1>
      </div>

    {/* Discount */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-medium leading-5">Discount</h1>
        <h1 className="text-[#5CFC6A] font-medium leading-5">37.5%</h1>
      </div>

      <hr className="border border-[#ffffff26] border-dashed"/>

       {/* Total Amount */}
       <div className="flex items-center justify-between">
        <h1 className="text-white font-medium leading-5">Total Amount</h1>
        <div className="flex items-center gap-3">
            <div className="text-white font-medium text-[13px] leading-[18px] px-3 py-1 bg-[#ffffff1a] border border-[#ffffff1a] rounded-3xl">
            You Save €12 
            </div>
        <h1 className="text-white text-xl font-semibold leading-6">€32</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
