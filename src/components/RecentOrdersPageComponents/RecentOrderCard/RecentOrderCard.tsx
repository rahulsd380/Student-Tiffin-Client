type TRecentOrders = {
    _id: string;
    name: string;
    duration: string;
    isPaid: boolean;
    variant: "Paid" | "Not Paid";
  };

const RecentOrderCard: React.FC<Partial<TRecentOrders>> = ({
  _id,
  name,
  duration,
  isPaid,
  variant,
}) => {
  return (
    <div className="font-Poppins flex items-center justify-between">
      <div>
        <div className="flex items-center gap-[6px]">
          <h1 className="text-[#424B54] text-lg font-medium leading-6">
            Order #{_id}
          </h1>
          <div className="bg-[#DCFED6] border border-[#C9EBC3] rounded-[100px] px-2 py-1 text-[#24461F] font-medium leading-5 flex md:hidden items-center justify-center">
            Paid
          </div>
        </div>
        <p className="text-[#6E7883] leading-5">
          {name} - {duration} Subscription
        </p>
      </div>

      <div
        className={`${
          variant === "Paid"
            ? "bg-[#DCFED6] border border-[#C9EBC3]"
            : "bg-[#f5ced1]"
        }  rounded-[100px] px-[18px] py-2 text-[#24461F] font-medium leading-5 hidden md:flex items-center justify-center`}
      >
        {isPaid ? "Paid" : "Not Paid"}
      </div>
    </div>
  );
};

export default RecentOrderCard;
