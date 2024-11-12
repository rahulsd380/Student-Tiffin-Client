import HeadingContainer from "../../components/Shared/HeadingContainer/HeadingContainer";
import SubscriptionPlans from './../../components/HomePageComponents/SubscriptionPlans/SubscriptionPlans';


const Subscriptions = () => {
    return (
        <div className="w-full">
            <HeadingContainer title={"Subscription PLANS"}/>
            <SubscriptionPlans isHeadingVisible={false}/>
        </div>
    );
};

export default Subscriptions;