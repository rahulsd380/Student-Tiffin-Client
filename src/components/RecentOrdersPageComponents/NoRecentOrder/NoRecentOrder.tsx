import { ICONS } from "../../../assets";

const NoRecentOrder = ({message} : {message:string}) => {
  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <img src={ICONS.orders} alt="orders-icon" className="size-[128px]" />
      <p className="text-[#8D9095] font-Poppins text-2xl leading-8">
        {message}
      </p>
    </div>
  );
};

export default NoRecentOrder;
