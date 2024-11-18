import NoRecentOrder from "../../../components/RecentOrdersPageComponents/NoRecentOrder/NoRecentOrder";
import RecentOrderCard from "../../../components/RecentOrdersPageComponents/RecentOrderCard/RecentOrderCard";


const RecentOrders = () => {
    return (
        <div className="mt-8">
            <NoRecentOrder/>
            <RecentOrderCard/>
        </div>
    );
};

export default RecentOrders;