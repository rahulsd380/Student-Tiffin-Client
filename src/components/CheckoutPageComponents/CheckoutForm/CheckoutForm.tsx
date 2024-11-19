import React, { useState } from "react";
import { IMAGES } from "../../../assets";
import {
  collectionPoints,
  deliveryPoints,
} from "../../HomePageComponents/SubscriptionPlans/subscription.mockData";

const CheckoutForm = () => {
  const [selectedOption, setSelectedOption] = useState<"pickup" | "delivery">(
    "pickup"
  );

  return (
    <div className="p-5 flex flex-col gap-8">
      {/* Radio Inputs */}
      <div className="flex gap-5">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="pickup-delivery"
            value="pickup"
            checked={selectedOption === "pickup"}
            onChange={() => setSelectedOption("pickup")}
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

      {/* Date Picker */}
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
          className="bg-[#6e788305] px-[18px] py-[14px] rounded-lg border border-[#6e78831f] focus:outline-none"
        />
      </div>

      {/* Payment Button */}
      <button className="p-5 text-white bg-[#DE3C4B] rounded-xl text-lg leading-6 font-semibold">
        Proceed to Pay €20
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
