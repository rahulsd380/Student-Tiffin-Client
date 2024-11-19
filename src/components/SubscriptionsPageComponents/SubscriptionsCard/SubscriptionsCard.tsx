import { Link } from "react-router-dom";

const SubscriptionsCard = ({ variant }: { variant: string }) => {
  return (
    <div className="font-Poppins flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between bg-white px-6 py-5 border border-[#D4D7DB] rounded-xl">
      <div>
        <h1 className="text-[#424B54] text-lg font-medium leading-6">
          Vegetarian Meal (Monthly)
        </h1>
        <p className="text-[#6E7883] leading-5">Expires on 24-10-2024</p>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`${
            variant === "Active" ? "bg-[#DCFED6]" : "bg-[#f5ced1]"
          }  rounded-lg px-3 py-2 text-[#24461F] font-medium leading-5 flex items-center justify-center`}
        >
          Active
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
