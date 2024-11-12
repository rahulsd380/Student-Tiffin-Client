import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TMenu = {
  menu: {
    img: string | any;
    name: string;
  };
};

const MenuCard: React.FC<TMenu> = ({ menu }) => {
  return (
    <Link to={"/menu-details"} className="flex flex-col gap-4">
      <img
        src={menu.img}
        alt="menu-img"
        className="w-[352px] h-[200] rounded-xl"
      />
      <h1 className="text-[#424B54] font-Poppins text-xl leading-7">
        {menu.name}
      </h1>
    </Link>
  );
};

export default MenuCard;
