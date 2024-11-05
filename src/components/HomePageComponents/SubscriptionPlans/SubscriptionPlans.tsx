import { useState } from "react";
import Container from "../../Shared/Container/Container";
import PlanCard from "./PlanCard";

const SubscriptionPlans = () => {
  const [planMode, setPlanMode] = useState("Daily");
  const planModeButtons = ["Daily", "Weekly", "Monthly"];

  const weeklyData = [
    {
      name: "Vegeterian Meal (weekly)",
      foodCategory: "Veg",
      madeOf: ["1 Daal", "2 Rice", "4 Tawa Chapathi", "1 Seasonal Veg"],
      discountedPrice: "€20",
      priceBefore: "€36",
      plan: "Weekly",
    },
    {
      name: "Vegeterian Meal (weekly)",
      foodCategory: "Non Veg",
      madeOf: ["1 Daal", "2 Rice", "4 Tawa Chapathi", "1 Seasonal Veg"],
      discountedPrice: "€20",
      priceBefore: "€36",
      plan: "Weekly",
    },
  ];

  const monthlyData = [
    {
      name: "Vegeterian Meal (monthly)",
      foodCategory: "Veg",
      madeOf: ["1 Daal", "2 Rice", "4 Tawa Chapathi", "1 Seasonal Veg"],
      discountedPrice: "€20",
      priceBefore: "€36",
      plan: "Weekly",
    },
    {
      name: "Vegeterian Meal (monthly)",
      foodCategory: "Non Veg",
      madeOf: ["1 Daal", "2 Rice", "4 Tawa Chapathi", "1 Seasonal Veg"],
      discountedPrice: "€20",
      priceBefore: "€36",
      plan: "Monthly",
    },
  ];

  const dailyData = [
    {
      name: "Vegeterian Meal (daily)",
      foodCategory: "Veg",
      madeOf: ["1 Daal", "2 Rice", "4 Tawa Chapathi", "1 Seasonal Veg"],
      discountedPrice: "€20",
      priceBefore: "€36",
      plan: "Daily",
    },
    {
      name: "Vegeterian Meal (daily)",
      foodCategory: "Veg",
      madeOf: ["1 Daal", "2 Rice", "4 Tawa Chapathi", "1 Seasonal Veg"],
      discountedPrice: "€20",
      priceBefore: "€36",
      plan: "Daily",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-12 py-[128px]">
        <h1 className="text-[#DE3C4B] text-[96px] font-extrabold leading-[110px] uppercase text-center">
          Subscription Plans
        </h1>

        {/* Tab buttons */}
        <div className="bg-[#E9EBED] rounded-[10px] p-1 flex items-center gap-4 w-fit mx-auto">
          {planModeButtons.map((mode, index) => (
            <button
              onClick={() => setPlanMode(mode)}
              key={index}
              className={`${
                planMode === mode ? "bg-white text-[#424B54]" : "text-[#6E7883]"
              } font-medium leading-5 tracking-tighter px-6 py-2 rounded-lg`}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {planMode === "Daily"
            ? dailyData.map((data) => <PlanCard data={data} />)
            : planMode === "Weekly"
            ? weeklyData.map((data) => <PlanCard data={data} />)
            : monthlyData.map((data) => <PlanCard data={data} />)}
        </div>

        {/* Plan cards */}
      </div>
    </Container>
  );
};

export default SubscriptionPlans;
