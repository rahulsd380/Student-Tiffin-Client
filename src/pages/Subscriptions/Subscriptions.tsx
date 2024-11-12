import HeadingContainer from "../../components/Shared/HeadingContainer/HeadingContainer";
import SubscriptionPlans from "./../../components/HomePageComponents/SubscriptionPlans/SubscriptionPlans";

const Subscriptions = () => {
  return (
    <div className="w-full">
      <HeadingContainer title={"Subscription PLANS"} />
      <div className="py-[96px] md:py-[128px]">
        <SubscriptionPlans isHeadingVisible={false} />
      </div>
    </div>
  );
};

export default Subscriptions;
