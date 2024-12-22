import { useEffect, useState } from "react";
import axios from "axios";
import SubscriptionsCard from "../../../components/SubscriptionsPageComponents/SubscriptionsCard/SubscriptionsCard";
import SubscriptionCardLoader from "../../../components/Loaders/SubscriptionCardLoader/SubscriptionCardLoader";
import NoRecentOrder from "../../../components/RecentOrdersPageComponents/NoRecentOrder/NoRecentOrder";
import { TSubscription } from "./subscription.types";



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

  const subscriptionData = subscriptions.filter(subscription => subscription?.duration !== "DAILY")

  if (loading) {
    return (
      <div className="flex flex-col gap-8 mt-8">
        <SubscriptionCardLoader/>
        <SubscriptionCardLoader/>
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong!!</p>
  }

  return (
    <div className="flex flex-col gap-8 mt-8">
      {
      subscriptionData?.length > 0 ?
      subscriptionData.map((subscription: TSubscription) => (
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
