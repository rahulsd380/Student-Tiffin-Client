import { Link } from "react-router-dom";

const OrderDetails = () => {
  const details = [
    {
      title: "Order ID",
      value: "#12632983",
    },
    {
      title: "Date of Order",
      value: "h24 Apr 2024, 10AMghgh",
    },
    {
      title: "Delivery Type",
      value: "Pickup / Dine-In",
    },
    {
      title: "Pickup Option",
      value: "Pickup / Dine-In",
    },
    {
      title: "Subscription Start Date",
      value: "24 Apr 2024",
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
      {
        details.map(detail => 
            <div key={detail.title} className="flex items-center justify-between">
        <h1 className="text-[#5f6570] font-Poppins leading-5">{detail.title}</h1>
        <h1 className="text-[#293241] font-Poppins leading-5">{detail.value}</h1>
      </div>
        )
      }
      </div>

      <hr className="border border-[#eeeff0]"/>

      <Link to={"/"} className="p-5 text-white bg-[#DE3C4B] rounded-xl text-lg leading-6 font-semibold text-center">
      Back to Home
      </Link>
    </div>
  );
};

export default OrderDetails;
