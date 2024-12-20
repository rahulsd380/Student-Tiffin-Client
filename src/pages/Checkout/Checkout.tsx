import { useEffect, useState } from "react";
import CheckoutDetails from "../../components/CheckoutPageComponents/CheckoutDetails/CheckoutDetails";
import CheckoutForm from "../../components/CheckoutPageComponents/CheckoutForm/CheckoutForm";
import { TSelectedPlanData } from "../../components/HomePageComponents/SubscriptionPlans/PlanCard";

const Checkout = () => {
  const [product, setProduct] = useState<TSelectedPlanData | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedPlan");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  const [selectedPlanType, setSelectedPlanType] = useState("Daily");
  const [selectedOption, setSelectedOption] = useState<
  "pickup" | "delivery" | "subscribePlan"
>("subscribePlan");

useEffect(() => {
  if (product?.plan === "Daily") {
    setSelectedOption("pickup");
  } else {
    setSelectedOption("subscribePlan");
  }
}, [product]);


const [expiredIn, setExpiredIn] = useState<string>("");
useEffect(() => {
  const calculateExpiration = () => {
    const today = new Date();
    const expirationDate = new Date(today);

    if (product?.plan === "Daily") {
      expirationDate.setDate(today.getDate()); // today
    } else if (product?.plan === "Weekly") {
      expirationDate.setDate(today.getDate() + 7); // 7 days from today
    } else if (product?.plan === "Monthly") {
      expirationDate.setMonth(today.getMonth() + 1); // 1 month from today
    }
    const formattedDate = expirationDate.toLocaleDateString();
    setExpiredIn(formattedDate);
  };

  calculateExpiration();
}, [product?.plan]);

  return (
    <div className="bg-[#F4F8FA] flex items-center justify-center py-[34px]">
      <div className="bg-white rounded-b-none md:rounded-b-xl w-full md:w-[530px] mx-auto">
        <CheckoutDetails
          heading="Checkout"
          product={product}
          selectedOption={selectedOption}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          expiredIn={expiredIn}
        />
        <CheckoutForm
          selectedPlanType={selectedPlanType}
          setSelectedPlanType={setSelectedPlanType}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          product={product}
          totalPrice={totalPrice}
          expiredIn={expiredIn}
        />
      </div>
    </div>
  );
};

export default Checkout;
