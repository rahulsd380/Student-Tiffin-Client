import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import { useEffect, useState } from "react";
import { TSelectedPlanData } from "../../HomePageComponents/SubscriptionPlans/PlanCard";

type TCheckoutDetailsProps = {
  heading: string;
  product?: TSelectedPlanData| null;
  selectedOption?:string;
  totalPrice?:number;
  setTotalPrice?: (totalPrice: number) => void;
};
const CheckoutDetails: React.FC<TCheckoutDetailsProps> = ({
  heading,
  product,
  selectedOption,
  totalPrice,
  setTotalPrice,
  expiredIn
}) => {
  // const [expiredIn, setExpiredIn] = useState<string>("");

  

  useEffect(() => {
    if (setTotalPrice) {
      if (selectedOption === "delivery") {
        setTotalPrice((product?.price || 0) + 50);
      } else {
        setTotalPrice(product?.price || 0);
      }
    }
  }, [selectedOption, product?.price, setTotalPrice]);
  

  // useEffect(() => {
  //   const calculateExpiration = () => {
  //     const today = new Date();
  //     const expirationDate = new Date(today);

  //     if (product?.plan === "Daily") {
  //       expirationDate.setDate(today.getDate()); // today
  //     } else if (product?.plan === "Weekly") {
  //       expirationDate.setDate(today.getDate() + 7); // 7 days from today
  //     } else if (product?.plan === "Monthly") {
  //       expirationDate.setMonth(today.getMonth() + 1); // 1 month from today
  //     }
  //     const formattedDate = expirationDate.toLocaleDateString();
  //     setExpiredIn(formattedDate);
  //   };

  //   calculateExpiration();
  // }, [product?.plan]);

  // const [planPrice, setPlanPrice] = useState(0);

  // useEffect(() => {
  //   // Calculate plan price
  //   if (product?.plan === "Daily" || product?.plan === "Weekly") {
  //     if(product.deliveryType === "delivery"){
  //       setPlanPrice(product?.deliveryPrice);
  //     } else{
  //       setPlanPrice(product?.collectionPrice);
  //     }
  //   } else if (product?.plan === "Monthly" && product?.meals?.length > 0) {
  //     if (product.deliveryType === "delivery") {
  //       const totalDeliveryPrice = product.meals.map(meal => meal.deliveryPrice);
  //       setPlanPrice(totalDeliveryPrice);
  //     } else {
  //       const totalCollectionPrice = product.meals.map(meal => meal.collectionPrice);
  //       console.log(totalCollectionPrice);
  //       setPlanPrice(totalCollectionPrice);
  //     }
  //   }
  // }, [product]);

  // console.log(planPrice);





  return (
    <div className="bg-[#293241] rounded-t-none md:rounded-t-xl p-6 font-Poppins flex flex-col gap-5">
      {/* Heading */}
      <div className="flex items-center gap-[6px]">
        <Link to={"/"}>
          <img
            src={ICONS.leftArrowWhite}
            alt="leftArrowWhite"
            className="size-5"
          />
        </Link>
        <h1 className="font-bold leading-5 text-white">{heading}</h1>
      </div>

      <hr className="border border-[#ffffff26] border-dashed" />

      {/* Chosen product card */}
      <div className="flex items-center justify-between border-b border-[#ffffff26] pb-5 border-dashed">
        <div>
          <h1 className="text-white font-medium leading-5">
            {product?.name} ({product?.plan})
          </h1>
          <p className="text-[#ffffffbf] leading-5 mt-1">
            Expires on {expiredIn}
          </p>
        </div>

        <h1 className="text-white font-medium leading-5">
          €{product?.price}
          {/* {selectedOption === "pickup"
            ? product?.collectionPrice && product?.collectionPrice
            : product?.deliveryPrice && product?.deliveryPrice} */}
        </h1>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between border-b border-[#ffffff26] pb-5 border-dashed">
        <h1 className="text-white font-medium leading-5">Subtotal</h1>
        <h1 className="text-white font-medium leading-5">
        €{product?.price}
        </h1>
      </div>

      {/* Discount */}
      {/* <div className="flex items-center justify-between">
        <h1 className="text-white font-medium leading-5">Discount</h1>
        <h1 className="text-[#5CFC6A] font-medium leading-5">37.5%</h1>
      </div> */}

      {/* <hr className="border border-[#ffffff26] border-dashed"/> */}

      {/* Total Amount */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-medium leading-5">Total Amount</h1>
        <div className="flex items-center gap-3">
          {/* You save */}
          {/* <div className="text-white font-medium text-[13px] leading-[18px] px-3 py-1 bg-[#ffffff1a] border border-[#ffffff1a] rounded-3xl">
            You Save €12 
            </div> */}
          <h1 className="text-white text-xl font-semibold leading-6">
          €{totalPrice
            }
          
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
