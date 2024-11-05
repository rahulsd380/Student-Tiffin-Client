/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import Badge from "../../Shared/Badge/Badge";

const PlanCard = ({ data }:{data:any}) => {
  return (
    <div className="bg-white border border-[#0000001a] rounded-3xl font-Poppins py-5">
      <div className="flex items-center justify-between px-6">
        <h1 className="text-[#030] text-2xl font-semibold leading-8">
          {data.name}
        </h1>
        <Badge variant={data.foodCategory} />
      </div>

      <hr className="border border-[#0000001a] h-[1px] my-5" />

      <div className="flex flex-col gap-[18px] px-6">
        {data.madeOf.map((item: string, index: number) => (
          <div key={index} className="flex items-center gap-[10px]">
            <img src={ICONS.tickMark} alt="tick-mark" className="size-7" />
            <p className="text-[#49515D] text-xl leading-6">{item}</p>
          </div>
        ))}
      </div>

      <hr className="border border-[#0000001a] h-[1px] my-5" />
      <div className="flex items-center justify-between px-6">
        <div>
          <div className="flex items-center gap-3">
            <p className="text-[#49515D] text-[28px] leading-6 font-semibold">
              {data.discountedPrice}
            </p>
            <p className="text-[#8D9095] text-xl leading-6">
              {data.priceBefore}
            </p>
          </div>
          <p className="text-[#8D9095] text-xl leading-6">
            {data.plan === "Weekly"
              ? "per week"
              : data.plan === "Daily"
              ? "per day"
              : "per month"}
          </p>
        </div>

        <button
          className={`${
            data.foodCategory === "Non Veg" ? "bg-[#DE3C4B]" : "bg-[#21CC00]"
          } p-4 size-[56px] rounded-full flex items-center justify-center`}
        >
          <img src={ICONS.rightArrowWhite} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
