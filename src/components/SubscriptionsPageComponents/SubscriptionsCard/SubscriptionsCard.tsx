import { Link } from "react-router-dom";

const SubscriptionsCard = ({ variant, name, duration, endDate }: { variant: string }) => {
  return (
    <div className="font-Poppins flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between bg-white px-6 py-5 border border-[#D4D7DB] rounded-xl">
      <div>
        <h1 className="text-[#424B54] text-lg font-medium leading-6">
          {name} ({duration})
        </h1>
        <p className="text-[#6E7883] leading-5">Expires on {endDate}</p>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`${
            variant === "Active" ? "bg-[#DCFED6]" : variant === "Pending" ? "bg-yellow-400/50" : "bg-[#f5ced1]"
          }  rounded-lg px-3 py-2 text-[#24461F] font-medium leading-5 flex items-center justify-center`}
        >
          {
            variant === "Active"
             ? "Active"
              : variant === "Pending"
             ? "Pending"
              : "Expired"
          }
        </div>
        {variant === "Expired" && (
          <Link
            to={"/"}
            className="underline text-[#DE3C4B] font-semibold leading-5"
          >
            Renew
          </Link>
        )}
      </div>
    </div>
  );
};

export default SubscriptionsCard;
