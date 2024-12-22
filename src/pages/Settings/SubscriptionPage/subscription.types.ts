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