/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

type TPaymentSuccessPage = {
  icon: any;
  title: string;
  description1?: string;
  description2?: string;
};
const PaymentSuccessPage: React.FC<TPaymentSuccessPage> = ({
  icon,
  title,
  description1,
  description2,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-10">
      <img src={icon} alt="payment-success" className="w-[300px]" />
      <div className="text-center">
        <h1 className="font-Poppins text-2xl font-semibold text-green-600">
          {title}
        </h1>
        <p className=" text-gray-600 mt-1">{description1 && description1}</p>
        <p className="text-gray-500">{description2 && description2}</p>
      </div>
      <Link
        to={"/"}
        className="bg-[#DE3C4B] px-4 py-2 text-white rounded-lg transition duration-300 w-fit"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
