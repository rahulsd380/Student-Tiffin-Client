import { useEffect, useState } from "react";
import axios from "axios";
import SubscriptionsCard from "../../../components/SubscriptionsPageComponents/SubscriptionsCard/SubscriptionsCard";
import SubscriptionCardLoader from "../../../components/Loaders/SubscriptionCardLoader/SubscriptionCardLoader";
import NoRecentOrder from "../../../components/RecentOrdersPageComponents/NoRecentOrder/NoRecentOrder";

export type TSubscription = {
  _id: string;
  name: string;
  productId: string;
  user: string;
  total: number;
  paymentType: "ONLINE" | "COD";
  duration: "MONTHLY" | "WEEKLY" | "DAILY";
  startDate: string;
  endDate: string;
  totalMeals: number;
  mealType: "MEAT" | "VEG";
  isPaid: boolean;
  status: "PENDING" | "APPROVED" | "EXPIRED";
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const SubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState<TSubscription[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch subscription data using Axios
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get("https://student-tiffin-backend.vercel.app/api/v1/subscription/me", {
          withCredentials: true,
        });
        setSubscriptions(response.data.subscriptions);
      } catch (err) {
        setError("Error fetching subscriptions");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-8 mt-8">
        <SubscriptionCardLoader/>
        <SubscriptionCardLoader/>
      </div>
    );
  }

  if (error) {
    return <p>Something went wring!!</p>
  }

  return (
    <div className="flex flex-col gap-8 mt-8">
      {
      subscriptions?.length > 0 ?
      subscriptions.map((subscription: TSubscription) => (
        <SubscriptionsCard
          key={subscription?._id}
          variant={
            subscription?.status === "APPROVED"
              ? "Active"
              : subscription?.status === "PENDING"
              ? "Pending"
              : "Expired"
          }
          {...subscription}
        />
      ))
      :
      <NoRecentOrder message="No Subscription Purchased"/>
    
    }
    </div>
  );
};

export default SubscriptionPage;
