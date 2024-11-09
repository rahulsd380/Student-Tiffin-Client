import { useEffect, useRef, useState } from "react";
import Container from "../../Shared/Container/Container";
import PlanCard from "./PlanCard";
import { ICONS } from "../../../assets";
import { dailyData, deliveryInfo, monthlyData, weeklyData } from "./subscription.mockData";

const SubscriptionPlans = () => {
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);
  const [isCollectionInfoOpen, setIsCollectionInfoOpen] = useState(false);
  const [isDeliverySelected, setIsDeliverySelected] = useState(false);
  const [planMode, setPlanMode] = useState("Daily");
  const planModeButtons = ["Daily", "Weekly", "Monthly (4 weeks)"];
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsCollectionInfoOpen(false);
        setIsDeliveryInfoOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

 

  return (
    <Container>
      <div className="flex flex-col gap-12 py-[96px] md:py-[128px] px-6 md:px-10 xl:px-0">
        <h1 className="text-[#DE3C4B] font-Rajdhani text-[46px] md:text-[96px] font-bold leading-[64px] md:leading-[110px] uppercase text-center">
          Subscription Plans
        </h1>

        <div className="flex items-center justify-center xl:justify-end">
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-[159px]">
            {/* Tab buttons */}
            <div className="bg-[#E9EBED] rounded-[10px] p-1 flex items-center gap-3 md:gap-4 w-fit mx-auto">
              {planModeButtons.map((mode, index) => (
                <button
                  onClick={() => setPlanMode(mode)}
                  key={index}
                  className={`${
                    planMode === mode
                      ? "bg-white text-[#424B54]"
                      : "text-[#6E7883]"
                  } font-medium leading-5 tracking-tighter px-3 md:px-6 py-2 rounded-lg`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 relative">
              <button
                onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
                className={`${!isDeliverySelected? "text-[#DE3C4B]" : "text-[#8D9095]"} font-Poppins font-medium leading-5 flex items-center gap-1`}
              >
                Delivery
                <img src={!isDeliverySelected ? ICONS.infoIconRed : ICONS.infoIconGray} alt="" className="size-4" />
              </button>
              {/* Dropdown for delivery */}
              <div
                ref={dropDownRef}
                className={`absolute p-5 top-12 -right-6 md:right-20 w-[340px] md:w-[392px] rounded-2xl bg-white border border-[#E6E6E6] transition-opacity duration-300 ${
                  isDeliveryInfoOpen
                    ? "opacity-100 visible duration-500"
                    : "opacity-0 invisible duration-150"
                }`}
              >
                <h1 className="text-[#293241] font-Poppins font-medium leading-5">
                  Collection Points
                </h1>
                <div className="flex flex-col gap-[10px] mt-5">
                  {deliveryInfo.map((info, idx) => (
                    <div
                      style={{
                        transform: `translateY(${
                          isDeliveryInfoOpen ? 0 : (idx + 1) * 10
                        }px)`,
                      }}
                      key={idx}
                      className="transition-all duration-300 flex items-center gap-[10px]"
                    >
                      <img
                        src={ICONS.tickMark}
                        alt="tick-mark"
                        className="size-5"
                      />
                      <p className="text-[#6E7883] leading-5">{info}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Toggle button */}
              <div
                className={`${
                  isDeliverySelected ? " bg-[#d2d2d3]" : "bg-[#E9EBED]"
                } w-[57px] h-[30px] px-[0.150rem] py-[0.160rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
                onClick={() => setIsDeliverySelected(!isDeliverySelected)}
              >
                <div
                  className={`${
                    isDeliverySelected ? "translate-x-[27px]" : "translate-x-[0px]"
                  } size-[23px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
                  style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                ></div>
              </div>

              {/* Button to see collection list */}
              <button
                onClick={() => setIsCollectionInfoOpen(!isCollectionInfoOpen)}
                className={`${isDeliverySelected? "text-[#DE3C4B]" : "text-[#8D9095]"} font-Poppins font-medium leading-5 flex items-center gap-1`}
              >
                Collection
                <img src={isDeliverySelected ? ICONS.infoIconRed : ICONS.infoIconGray} alt="" className="size-4" />
              </button>

              {/* Dropdown for collection */}
              <div
                ref={dropDownRef}
                className={`absolute p-5 top-12 -right-6 md:right-0 w-[340px] md:w-[392px] rounded-2xl bg-white border border-[#E6E6E6] transition-opacity duration-300 ${
                  isCollectionInfoOpen
                    ? "opacity-100 visible duration-500"
                    : "opacity-0 invisible duration-150"
                }`}
              >
                <h1 className="text-[#293241] font-Poppins font-medium leading-5">
                  Collection Points
                </h1>
                <div className="flex flex-col gap-[10px] mt-5">
                  {deliveryInfo.map((info, idx) => (
                    <div
                      style={{
                        transform: `translateY(${
                          isCollectionInfoOpen ? 0 : (idx + 1) * 10
                        }px)`,
                      }}
                      key={idx}
                      className="transition-all duration-300 flex items-center gap-[10px]"
                    >
                      <img
                        src={ICONS.tickMark}
                        alt="tick-mark"
                        className="size-5"
                      />
                      <p className="text-[#6E7883] leading-5">{info}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {planMode === "Daily"
            ? dailyData.map((data) => <PlanCard data={data} isDeliverySelected={isDeliverySelected} />)
            : planMode === "Weekly"
            ? weeklyData.map((data) => <PlanCard data={data} isDeliverySelected={isDeliverySelected} />)
            : monthlyData.map((data) => <PlanCard data={data} isDeliverySelected={isDeliverySelected} />)}
        </div>


        {/* Plan cards */}
      </div>
    </Container>
  );
};

export default SubscriptionPlans;
