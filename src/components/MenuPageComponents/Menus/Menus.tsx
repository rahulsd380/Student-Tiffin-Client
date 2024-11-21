import { IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";
import MenuCard from "../MenuCard/MenuCard";


const Menus = () => {
    const menus = [
        {
            img : IMAGES.menu1,
            name:"Seasonal Veg"
        },
        {
            img : IMAGES.menu2,
            name:"Dal"
        },
        {
            img : IMAGES.menu3,
            name:"Rice"
        },
        {
            img : IMAGES.menu3,
            name:"Chicken"
        },
        {
            img : IMAGES.menu2,
            name:"Lamb"
        },
        {
            img : IMAGES.menu2,
            name:"Tawa Chapathi"
        },
    ]
    return (
        <Container>
            <div className="px-5 md:px-10 xl:px-0 py-[64px] md:py-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px]">
                {
                    menus.map((menu) => 
                        <MenuCard key={menu.name} menu={menu}/>
                    )
                }
            </div>
        </Container>
    );
};

export default Menus;