import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TMenu = {
  menu: {
    img: string | any;
    name: string;
    menuType:string;
  };
};

const MenuCard: React.FC<TMenu> = ({ menu }) => {
  return (
    <div className="flex flex-col rounded-2xl max-w-[352px] max-h-[200px] font-Poppins relative">
      <div className={`${menu.menuType === "VEG" ? "bg-[#CFFFD3]" : "bg-[#FF9BA4]"}  rounded-md p-1 text-[#030] text-xs uppercase absolute top-3 left-3`}>
        {menu.menuType}
      </div>
      <div className="bg-[#FFEBEC] flex items-center justify-center rounded-t-2xl p-3">
        <img
          src={menu.img}
          alt="menu-img"
          className=" rounded-xl size-[150px]"
        />
      </div>
      <Link
        to={"/menu-details"}
        className="flex items-center justify-center gap-[10px] bg-[#DE3C4B] text-white font-Poppins text-xl leading-7 text-center rounded-b-2xl py-2 "
      >
        {menu.name}
        <img src={ICONS.arrowOutward} alt="arrow-icon" className=" size-6" />
      </Link>
    </div>
  );
};

export default MenuCard;
