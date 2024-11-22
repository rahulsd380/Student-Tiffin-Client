export const weeklyData = [
    {
        name: "Veg Meal",
        foodCategory: "Veg",
        madeOf: ["Daal (1 bowl)", "Rice (1 bowl)", "4 Tawa Chapathi", "1 Seasonal Veg"],
        deliveryPrice: 85,  
        collectionPrice: 75,
        priceBefore: 36,
        plan: "Weekly",
        availability: ["Monday to Saturday (pick any 1 day off)", "5 meals a week"]
    },
    {
        name: "Meat Meal",
        foodCategory: "Meat",
        madeOf: ["Rice (1 bowl)", "4 Tawa Chapathi", "1 Seasonal Veg"],
        deliveryPrice: 90,
        collectionPrice: 80,
        priceBefore: 36,
        plan: "Weekly",
        availability: ["Monday to Saturday (pick any 1 day off)", "5 meals a week"]
    },
];

export const monthlyData = [
    {
        name: "Veg Meal",
        foodCategory: "Veg",
        madeOf: ["Daal (1 bowl)", "Rice (1 bowl)", "4 Tawa Chapathi", "1 Seasonal Veg"],
        plan: "Monthly",
        meals: [
            {
                mealsQuantity: "20 Meals",
                availability: ["Monday to Saturday (pick any 1 day off)", "5 meals a week"],
                deliveryPrice: 290,
                collectionPrice: 260,
                previousPrice: 400
            },
            {
                mealsQuantity: "24 Meals",
                availability: ["Monday to Saturday", "6 meals a week"],
                deliveryPrice: 330,
                collectionPrice: 290,
                previousPrice: 300
            },
        ],
    },
    {
        name: "Meat Meal",
        foodCategory: "Meat",
        madeOf: ["Rice (1 bowl)", "4 Tawa Chapathi", "1 Chicken or 1 Lamb"],
        plan: "Monthly",
        meals: [
            {
                mealsQuantity: "20 Meals",
                availability: ["Monday to Saturday (pick any 1 day off)", "5 meals a week"],
                deliveryPrice: 320,
                collectionPrice: 290,
                previousPrice: 450
            },
            {
                mealsQuantity: "24 Meals",
                availability: ["Monday to Saturday", "6 meals a week"],
                deliveryPrice: 365,
                collectionPrice: 325,
                previousPrice: 380
            },
        ],
    },
];

export const dailyData = [
    {
        name: "Veg Meal",
        foodCategory: "Veg",
        madeOf: ["Daal (1 bowl)", "Rice (1 bowl)", "4 Tawa Chapathi", "1 Seasonal Veg"],
        deliveryPrice: 16,
        collectionPrice: 16,
        priceBefore: 36,
        plan: "Daily",
        availability: ["Monday to Saturday", "6 meals a week"]
    },
    {
        name: "Meat Meal",
        foodCategory: "Meat",
        madeOf: ["Daal (1 bowl)", "Rice (1 bowl)", "4 Tawa Chapathi", "1 Chicken or 1 Lamb"],
        deliveryPrice: 17,
        collectionPrice: 17,
        priceBefore: 36,
        plan: "Daily",
        availability: ["Monday to Saturday", "6 meals a week"]
    },
];

export const deliveryPoints = [
    "Dublin City University",
    "Dublin Business School",
    "Griffith College Dublin",
    "University College Dublin",
    "Maynooth University",
    "Dublin 1",
    "Dublin 2",
    "Dublin 7",
    "Dublin 8",
];

export const collectionPoints = [
    
    "Spade Enterprise Centre, North King Street, Smithfield, Dublin 7"
];