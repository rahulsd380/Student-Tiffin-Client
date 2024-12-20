import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaymentSuccessPage from "./PaymentSuccessPage";
import { ICONS } from "../../assets";

const PaymentSuccess = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const session_id = queryParams.get("session_id");
  console.log(session_id)

  useEffect(() => {
    const confirmSubscription = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://student-tiffin-backend.vercel.app/api/v1/subscription/confirm-subscription",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId: session_id }),
          }
        );

        console.log(response);

        if (response.ok) {
          setIsSuccess(true);
        } else {
          throw new Error("Failed to confirm subscription");
        }
      } catch (error) {
        console.error("Error:", error);
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (session_id) {
      confirmSubscription();
    }
  }, [session_id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg font-medium text-gray-700">Processing payment...</p>
        <div className="loader mt-4"></div> {/* Add your loading spinner here */}
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-600">Payment Failed</h1>
        <p className="mt-2 text-gray-600">
          We could not confirm your payment. Please try again later.
        </p>
        <Link
          to="/"
          className="mt-4 bg-gray-600 px-4 py-2 text-white rounded-lg transition duration-300 w-fit"
        >
          Go To Home
        </Link>
      </div>
    );
  }

  return (
    <PaymentSuccessPage icon={ICONS.paymentSuccess} title="Payment Successful!!" description1="Congratulations!! Your payment was successful." description2="Thanks for subscribing to the plan! Your order will be processed, and we will reach out to you shortly." />
  );
};

export default PaymentSuccess;
