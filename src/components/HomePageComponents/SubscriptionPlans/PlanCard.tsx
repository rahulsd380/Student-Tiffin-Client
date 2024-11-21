/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ICONS } from "../../../assets";
import Badge from "../../Shared/Badge/Badge";
import Modal from "../../Shared/Modal/Modal";
import ContactUsForm from "../../Shared/ContactUsForm/ContactUsForm";

const PlanCard = ({
  data,
  isDeliverySelected,
}: {
  data: any;
  isDeliverySelected: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("24 Meals");

  // Find the selected meal's pricing details if meals exist
  const selectedMealData = data.meals?.find(
    (meal: any) => meal.mealsQuantity === selectedMeal
  );

  // Function to get adjusted price based on delivery selection
  const getAdjustedPrice = () => {
    if (data.meals) {
      return isDeliverySelected
        ? selectedMealData?.collectionPrice
        : selectedMealData?.deliveryPrice
    }
    return isDeliverySelected ? data.collectionPrice : data.deliveryPrice;
  };

  return (
    <div className="bg-white w-full border border-[#0000001a] rounded-3xl font-Poppins py-5 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 px-6">
        <div className="flex justify-between w-full">
          <h1 className="text-[#030] text-2xl font-semibold leading-8">
            {data.name}
          </h1>

          <div className="flex items-center gap-4">
            {data.meals && (
              <div className="bg-[#F9F9F9] border border-[#a5b3c140] rounded-[100px] hidden md:block">
                {data.meals.map((meal: any, index: number) => (
                  <button
                    onClick={() => setSelectedMeal(meal.mealsQuantity)}
                    key={index}
                    className={`py-[6px] px-[10px] font-Poppins font-medium leading-5 border-[#0000001a] border-none rounded-full ${
                      selectedMeal === meal.mealsQuantity
                        ? "bg-[#E9EBED] text-[#293241]"
                        : "bg-[#F9F9F9] text-[#8D9095]"
                    }`}
                  >
                    {meal.mealsQuantity}
                  </button>
                ))}
              </div>
            )}
            <Badge variant={data.foodCategory} />
          </div>
        </div>

        {data.meals && (
          <div className="bg-[#F9F9F9] border border-[#a5b3c140] rounded-[100px] block md:hidden">
            {data.meals.map((meal: any, index: number) => (
              <button
                onClick={() => setSelectedMeal(meal.mealsQuantity)}
                key={index}
                className={`py-[6px] px-[10px] font-Poppins font-medium leading-5 border-[#0000001a] border-none rounded-full ${
                  selectedMeal === meal.mealsQuantity
                    ? "bg-[#E9EBED] text-[#293241]"
                    : "bg-[#F9F9F9] text-[#8D9095]"
                }`}
              >
                {meal.mealsQuantity}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border border-[#0000001a] h-[1px] my-5" />

      <div className="flex flex-col gap-[18px] px-6">
        {data.madeOf.map((item: string, index: number) => (
          <div key={index} className="flex items-center gap-[10px]">
            <img src={ICONS.tickMark} alt="tick-mark" className="size-7" />
            <p className="text-[#49515D] text-xl leading-6">{item}</p>
          </div>
        ))}
      </div>

      <hr className="border border-[#0000001a] h-[1px] my-5" />

      <div className="px-6">
        <h1 className="text-[#49515D] text-xl font-semibold leading-6">
          Availability
        </h1>

        <div className="mt-3 flex flex-col gap-[10px]">
          {data?.availability ? (
            data.availability.map((availability: string, index: number) => (
              <div key={index} className="flex items-center gap-1">
                <img src={ICONS.pointer} alt="pointer" className="size-8" />
                <p className="text-[#49515D] text-xl leading-6 font-Poppins">
                  {availability}
                </p>
              </div>
            ))
          ) : selectedMealData?.availability ? (
            selectedMealData.availability.map(
              (availability: string, index: number) => (
                <div key={index} className="flex items-center gap-1">
                  <img src={ICONS.pointer} alt="pointer" className="size-8" />
                  <p className="text-[#49515D] text-xl leading-6 font-Poppins">
                    {availability}
                  </p>
                </div>
              )
            )
          ) : (
            <p className="text-[#8D9095] text-xl font-Poppins">
              No availability information
            </p>
          )}
        </div>
      </div>

      <hr className="border border-[#0000001a] h-[1px] my-5" />

      <div className="flex items-center justify-between px-6">
        <div>
          <div className="flex items-center gap-3">
            <p className="text-[#49515D] text-[28px] leading-6 font-semibold">
              €{getAdjustedPrice()}
            </p>
          </div>
          <p className="text-[#8D9095] text-xl leading-6">
            {data.plan === "Weekly"
              ? "per week"
              : data.plan === "Daily"
              ? "per meal"
              : "per month"}
          </p>
        </div>

        <button
        onClick={() => setOpenModal(true)}
          className={`${
            data.foodCategory === "Meat" ? "bg-[#DE3C4B]" : "bg-[#21CC00]"
          } p-4 size-[56px] rounded-full flex items-center justify-center`}
        >
          <img src={ICONS.rightArrowWhite} alt="arrow" />
        </button>
      </div>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        classNames={"h-[578px] overflow-y-auto p-4 md:p-8"}
      >
        {/* Form */}
        <ContactUsForm/>
      </Modal>
    </div>
  );
};

export default PlanCard;
