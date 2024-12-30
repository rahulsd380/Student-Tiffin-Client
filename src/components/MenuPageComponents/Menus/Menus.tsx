import { IMAGES } from "../../../assets";
import { useGetAllMenusQuery } from "../../../redux/Features/Menus/menuApi";
import Container from "../../Shared/Container/Container";
import MenuCard from "../MenuCard/MenuCard";

export type TMenu = {
    _id: string;
    name: string;
    ingredients: string[];
    description: string;
    price: number;
    availability: boolean;
    image: {
      fileId: string;
      name: string;
      url: string;
      thumbnailUrl: string;
      _id: string;
    };
    __v: number;
  };
  

const Menus = () => {
    const {data} = useGetAllMenusQuery({});
    console.log(data);
    const menus = [
        {
            img : IMAGES.tawaRoti,
            name:"Tawa Roti",
            menuType: "VEG"
        },
        {
            img : IMAGES.rice,
            name:"Rice",
            menuType: "VEG"
        },
        {
            img : IMAGES.dal,
            name:"Dal",
            menuType: "VEG"
        },
        {
            img : IMAGES.sesonalVeg,
            name:"Seasonal Veg",
            menuType: "VEG"
        },
        {
            img : IMAGES.salad,
            name:"Salad",
            menuType: "VEG"
        },
        {
            img : IMAGES.chcikenCurry,
            name:"Chicken Curry",
            menuType: "MEAT"
        },
        {
            img : IMAGES.lambCurry,
            name:"Lamb Curry",
            menuType: "MEAT"
        },
    ]
    return (
        <Container>
            <div className="px-5 md:px-10 xl:px-0 py-[64px] md:py-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px]">
                {
                    menus.map((menu, index) => 
                        <MenuCard key={index} menu={menu}/>
                    )
                }
            </div>
            {/* <div className="px-5 md:px-10 xl:px-0 py-[64px] md:py-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px]">
                {
                    data?.products?.map((menu:TMenu) => 
                        <MenuCard key={menu?._id} menu={menu}/>
                    )
                }
            </div> */}
        </Container>
    );
};

export default Menus;