

const RecentOrderCard = () => {
    return (
        <div className="font-Poppins flex items-center justify-between">
            <div>
            <h1 className="text-[#424B54] text-lg font-medium leading-6">Order #5913</h1>
            <p className="text-[#6E7883] leading-5">Vegetarian Meal - Monthly Subscription</p>
            </div>

            <div className="bg-[#DCFED6] border border-[#C9EBC3] rounded-[100px] px-[18px] py-2 text-[#24461F] font-medium leading-5 flex items-center justify-center">
            Paid
            </div>
        </div>
    );
};

export default RecentOrderCard;