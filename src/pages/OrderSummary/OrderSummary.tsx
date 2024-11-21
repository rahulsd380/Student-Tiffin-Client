import CheckoutDetails from "../../components/CheckoutPageComponents/CheckoutDetails/CheckoutDetails";
import OrderDetails from "../../components/OrderSummaryPageComponents/OrderDetails/OrderDetails";


const OrderSummary = () => {
    return (
        <div className="bg-[#F4F8FA] flex items-center justify-center py-[34px]">
           <div className="bg-white rounded-b-none md:rounded-b-xl w-full md:w-[509px] mx-auto">
           <CheckoutDetails heading="Order Summary"/>
           <OrderDetails/>
           </div>
        </div>
    );
};

export default OrderSummary;