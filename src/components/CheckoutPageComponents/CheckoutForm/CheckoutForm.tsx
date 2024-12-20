import { Dispatch, SetStateAction, useState } from "react";
import { IMAGES } from "../../../assets";
import {
  collectionPoints,
  deliveryPoints,
} from "../../HomePageComponents/SubscriptionPlans/subscription.mockData";
import { TSelectedPlanData } from "../../HomePageComponents/SubscriptionPlans/PlanCard";
import { useMakePaymentMutation } from "../../../redux/Features/Payment/paymentApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type TCheckoutFormProps = {
  selectedPlanType: string;
  setSelectedPlanType: (selectedPlanType: string) => void;
  selectedOption: string;
  setSelectedOption: Dispatch<
    SetStateAction<"pickup" | "delivery" | "subscribePlan">
  >;
  product: TSelectedPlanData | null;
  totalPrice: number;
  expiredIn: string;
};
const CheckoutForm: React.FC<TCheckoutFormProps> = ({
  selectedPlanType,
  setSelectedPlanType,
  selectedOption,
  setSelectedOption,
  product,
  totalPrice,
  expiredIn,
}) => {
  const [selectedPickupOption, setSelectedPickupOption] = useState("");
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
  console.log(selectedPickupOption);
  const navigate = useNavigate();
  const [makePayment, { isLoading }] = useMakePaymentMutation();
  console.log(product);
  const planTypes = ["Daily", "Weekly", "Monthly"];

  const [paymentMode, setPaymentMode] = useState<"cod" | "online">("cod");

  const handleMakePayment = async () => {
    try {
      const paymentData = {
        name: product?.name,
        productId: product?.productId,
        total: totalPrice,
        paymentType:
          product?.plan === "Monthly"
            ? "ONLINE"
            : product?.plan === "Weekly"
            ? "ONLINE"
            : paymentMode === "cod"
            ? "COD"
            : "ONLINE",
        duration:
          product?.plan === "Monthly"
            ? "MONTHLY"
            : product?.plan === "Weekly"
            ? "WEEKLY"
            : "DAILY",
        pickUpLocation:
          selectedPlanType === "pickup"
            ? selectedPickupOption
            : selectedPlanType === "delivery"
            ? selectedDeliveryOption
            : "",
        startDate: new Date(),
        endDate: expiredIn,
        totalMeals:
          product?.plan === "Monthly"
            ? product?.selectedMeal
            : product?.plan === "Weekly"
            ? product?.selectedMeal
            : 0,
        mealType: product?.foodCategory?.toUpperCase(),
      };

      const response = await makePayment(paymentData).unwrap();
      if (response?.success && response?.url) {
        const url = response?.url;
        window.location.href = url;
      } else {
        toast.success("Subscription confirmed successfully.");
        navigate("/payment-success");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 flex flex-col gap-8">
      {/* Radio Inputs IPickup, delivery, subscribe) */}
      <div className="flex flex-wrap gap-5">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="pickup-delivery"
            value="pickup"
            checked={selectedOption === "pickup"}
            onChange={() => setSelectedOption("pickup")}
            disabled={product?.plan === "Weekly" || product?.plan === "Monthly"}
            className="appearance-none size-4 border-2 border-[#6E7883] rounded-full checked:border-[#DE3C4B] checked:ring-2 checked:ring-[#DE3C4B] checked:ring-offset-2 checked:bg-[#DE3C4B]"
          />
          <span
            className={`text-[16px] leading-5 ${
              selectedOption === "pickup" ? "text-[#424B54]" : "text-[#6E7883]"
            }`}
          >
            Pick Up / Dine-In
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="delivery"
            value="delivery"
            checked={selectedOption === "delivery"}
            onChange={() => setSelectedOption("delivery")}
            disabled={product?.plan === "Weekly" || product?.plan === "Monthly"}
            className="appearance-none size-4 border-2 border-[#6E7883] rounded-full checked:border-[#DE3C4B] checked:ring-2 checked:ring-[#DE3C4B] checked:ring-offset-2 checked:bg-[#DE3C4B]"
          />
          <span
            className={`text-[16px] leading-5 ${
              selectedOption === "delivery"
                ? "text-[#424B54]"
                : "text-[#6E7883]"
            }`}
          >
            Delivery (Extra €50)
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="subscribePlan"
            value="subscribePlan"
            checked={selectedOption === "subscribePlan"}
            onChange={() => setSelectedOption("subscribePlan")}
            disabled={product?.plan === "Daily"}
            className="appearance-none size-4 border-2 border-[#6E7883] rounded-full checked:border-[#DE3C4B] checked:ring-2 checked:ring-[#DE3C4B] checked:ring-offset-2 checked:bg-[#DE3C4B]"
          />
          <span
            className={`text-[16px] leading-5 ${
              selectedOption === "subscribePlan"
                ? "text-[#424B54]"
                : "text-[#6E7883]"
            }`}
          >
            Subscribe Plan
          </span>
        </label>
      </div>

      {/* Dropdown for Pickup or Delivery */}
      {selectedOption === "pickup" && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="pickupOption"
            className="text-[#6E7883] font-Poppins leading-5"
          >
            Pickup option <span className="text-[#DE3C4B]">*</span>
          </label>
          <select
            value={selectedPickupOption}
            onChange={(e) => setSelectedPickupOption(e.target.value)}
            name="pickupOption"
            id="pickupOption"
            className="bg-[#6e788305] px-[18px] py-[14px] rounded-lg border border-[#6e78831f] focus:outline-none"
          >
            <option value="" selected disabled>
              Select a pickup option
            </option>
            {collectionPoints.map((point, index) => (
              <option key={index} value={point}>
                {point}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedOption === "delivery" && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="deliveryOption"
            className="text-[#6E7883] font-Poppins leading-5"
          >
            Delivery option <span className="text-[#DE3C4B]">*</span>
          </label>
          <select
            value={selectedDeliveryOption}
            onChange={(e) => setSelectedDeliveryOption(e.target.value)}
            name="deliveryOption"
            id="deliveryOption"
            className="bg-[#6e788305] px-[18px] py-[14px] rounded-lg border border-[#6e78831f] focus:outline-none"
          >
            <option value="" selected disabled>
              Select a delivery option
            </option>
            {deliveryPoints.map((point, index) => (
              <option key={index} value={point}>
                {point}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedOption === "subscribePlan" && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="deliveryOption"
            className="text-[#6E7883] font-Poppins leading-5"
          >
            Choose plan type <span className="text-[#DE3C4B]">*</span>
          </label>
          <select
            name="subscribePlan"
            id="subscribePlan"
            value={product?.plan}
            onChange={(e) => setSelectedPlanType(e.target.value)}
            disabled={product?.plan === "Monthly" || product?.plan === "Weekly"}
            className="bg-[#6e788305] px-[18px] py-[14px] rounded-lg border border-[#6e78831f] focus:outline-none"
          >
            <option value="" selected disabled>
              Select a plan type
            </option>
            {planTypes.map((plan, index) => (
              <option key={index} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Date Picker */}
      {selectedOption === "subscribePlan" && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="startDate"
            className="text-[#6E7883] font-Poppins leading-5"
          >
            Choose your subscription start date
            <span className="text-[#DE3C4B]">*</span>
          </label>
          <input
            placeholder="Select a Date"
            type="date"
            name="startDate"
            id="startDate"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="bg-[#6e788305] px-[18px] py-[14px] rounded-lg border border-[#6e78831f] focus:outline-none"
          />
        </div>
      )}

      {/* Payment mode */}
      <div className="flex gap-5">
        {/* Cash on Delivery Option */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMode"
            value="cod"
            checked={paymentMode === "cod"}
            onChange={() => setPaymentMode("cod")}
            disabled={product?.plan === "Weekly" || product?.plan === "Monthly"}
            className={`appearance-none size-4 border-2 rounded-full ${
              product?.plan === "Weekly" || product?.plan === "Monthly"
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer border-[#6E7883] checked:border-[#DE3C4B] checked:ring-2 checked:ring-[#DE3C4B] checked:ring-offset-2 checked:bg-[#DE3C4B]"
            }`}
          />
          <span
            className={`text-[16px] leading-5 ${
              paymentMode === "cod" ? "text-[#424B54]" : "text-[#6E7883]"
            } ${
              product?.plan === "Weekly" || product?.plan === "Monthly"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Cash on Delivery
          </span>
        </label>

        {/* Online Payment Option */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMode"
            value="online"
            checked={
              paymentMode === "online" ||
              product?.plan === "Monthly" ||
              product?.plan === "Weekly"
            }
            onChange={() => setPaymentMode("online")}
            className="appearance-none size-4 border-2 border-[#6E7883] rounded-full checked:border-[#DE3C4B] checked:ring-2 checked:ring-[#DE3C4B] checked:ring-offset-2 checked:bg-[#DE3C4B]"
          />
          <span
            className={`text-[16px] leading-5 ${
              paymentMode === "online" ? "text-[#424B54]" : "text-[#6E7883]"
            }`}
          >
            Online
          </span>
        </label>
      </div>

      {/* Payment Button */}
      <button
        onClick={handleMakePayment}
        className="p-5 text-white bg-[#DE3C4B] rounded-xl text-lg leading-6 font-semibold"
      >
        {isLoading ? "Please wait..." : `Proceed to Pay €${totalPrice}`}
      </button>

      {/* Payment Methods */}
      <img
        src={IMAGES.paymentMethods}
        alt="paymentMethods"
        className="w-[307px] mx-auto"
      />
    </div>
  );
};

export default CheckoutForm;

// {
// 	"isPaid": true,
// 	"status":"APPROVED"
// }
