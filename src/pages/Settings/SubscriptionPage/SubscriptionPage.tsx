import SubscriptionsCard from "../../../components/SubscriptionsPageComponents/SubscriptionsCard/SubscriptionsCard";
import { useGetMySubscriptionQuery } from "../../../redux/Features/Subscription/subscriptionApi";
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
  const { data } = useGetMySubscriptionQuery({});
  console.log(data);
  return (
    <div className="flex flex-col gap-8">
      {data?.subscriptions?.map((subscription: TSubscription) => (
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
      ))}
    </div>
  );
};

export default SubscriptionPage;
