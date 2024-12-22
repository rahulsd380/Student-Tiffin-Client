import { useEffect, useState } from "react";
import NoRecentOrder from "../../../components/RecentOrdersPageComponents/NoRecentOrder/NoRecentOrder";
import { TSubscription } from "../SubscriptionPage/subscription.types";
import axios from "axios";
import SubscriptionCardLoader from "../../../components/Loaders/SubscriptionCardLoader/SubscriptionCardLoader";
import RecentOrderCard from "../../../components/RecentOrdersPageComponents/RecentOrderCard/RecentOrderCard";

const RecentOrders = () => {
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

  const recentOrders = subscriptions?.filter((subscription) => subscription.duration === "DAILY");

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
     recentOrders?.length > 0 ?
     recentOrders.map((subscription: TSubscription) => (
       <RecentOrderCard
         key={subscription?._id}
         variant={
           subscription?.isPaid
             ? "Paid"
             : "Not Paid"
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

export default RecentOrders;
