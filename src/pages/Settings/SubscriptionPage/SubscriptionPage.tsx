import SubscriptionsCard from "../../../components/SubscriptionsPageComponents/SubscriptionsCard/SubscriptionsCard";

const SubscriptionPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <SubscriptionsCard variant="Active"/>
            <SubscriptionsCard variant="Expired"/>
        </div>
    );
};

export default SubscriptionPage;