import React from "react";

const SubscriptionCardLoader: React.FC = () => {
  return (
    <div className="font-Poppins flex flex-col md:flex-row gap-4 md:gap-0  justify-between bg-white px-6 py-5 border border-[#D4D7DB] rounded-xl">
      {/* Skeleton Loader */}
      <div className="flex flex-col gap-2 w-full">
        <div className="w-48 h-6 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="w-32 h-4 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
      <div className="w-28 h-10 bg-gray-300 animate-pulse rounded-md mt-2"></div>
    </div>
  );
};

export default SubscriptionCardLoader;
