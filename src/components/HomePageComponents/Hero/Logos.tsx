import Marquee from "react-fast-marquee";
import { ICONS } from "../../../assets";

const Logos = () => {
  const companyNames = [
    "Authentic Flavors",
    "Homestyle Meals",
    "Fresh Cuisine",
    "Meal Delivery",
    "Cookie",
    "Indian Cuisine",
  ];

  return (
    <div className="bg-[#E28413] py-3 font-Poppins">
      <Marquee>
        <div className="flex items-center gap-[22px]">
          {companyNames.map((name, index) => (
            <div className="flex items-center gap-[22px]">
              <img src={ICONS.star} alt="star-icon" className="size-8" />
              <h1
                key={index}
                className="text-white text-[40px] leading-[56px] uppercase"
              >
                {name}
              </h1>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Logos;
