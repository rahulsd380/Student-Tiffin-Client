/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Link } from "react-router-dom";
// import { ICONS } from "../../../assets";

// type TMenu = {
//  menu : {
//   _id: string;
//   name: string;
//   ingredients: string[];
//   description: string;
//   price: number;
//   availability: boolean;
//   image: {
//     fileId: string;
//     name: string;
//     url: string;
//     thumbnailUrl: string;
//     _id: string;
//   };
//   __v: number;
//  }
// };

// const MenuCard: React.FC<TMenu> = ({ menu }) => {
//   return (
//     <div className="flex flex-col rounded-2xl max-w-[352px] max-h-[200px] font-Poppins relative">
//       <div className={`${menu.menuType === "VEG" ? "bg-[#CFFFD3]" : "bg-[#FF9BA4]"}  rounded-md p-1 text-[#030] text-xs uppercase absolute top-3 left-3`}>
//         {/* {menu.menuType} */}
//         veg
//       </div>
//       <div className="bg-[#FFEBEC] flex items-center justify-center rounded-t-2xl p-3">
//         <img
//           src={menu?.image?.thumbnailUrl}
//           alt={menu?.image?.name}
//           className=" rounded-xl size-[150px]"
//         />
//       </div>
//       <Link
//         to={`/menu-details/${menu?._id}`}
//         className="flex items-center justify-center gap-[10px] bg-[#DE3C4B] text-white font-Poppins text-xl leading-7 text-center rounded-b-2xl py-2 "
//       >
//         {menu.name}
//         <img src={ICONS.arrowOutward} alt="arrow-icon" className=" size-6" />
//       </Link>
//     </div>
//   );
// };

// export default MenuCard;

import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";

const MenuCard = ({ menu }: { menu: any }) => {
  return (
    <div className="flex flex-col rounded-2xl max-w-[352px] max-h-[200px] font-Poppins relative">
      <div
        className={`${
          menu.menuType === "VEG" ? "bg-[#CFFFD3]" : "bg-[#FF9BA4]"
        }  rounded-md p-1 text-[#030] text-xs uppercase absolute top-3 left-3`}
      >
        {/* {menu.menuType} */}
        {
          menu.menuType === "VEG" ?
          "VEG"
          :
          "NON VEG (100% Halal)"
        }
      </div>
      <div className="bg-[#FFEBEC] flex items-center justify-center rounded-t-2xl p-3">
        <img
          src={menu?.img}
          alt={menu?.image?.name}
          className=" rounded-xl size-[150px]"
        />
      </div>
      <Link
        to={`/menu-details/${menu?._id}`}
        className="flex items-center justify-center gap-[10px] bg-[#DE3C4B] text-white font-Poppins text-xl leading-7 text-center rounded-b-2xl py-2 "
      >
        {menu.name}
        <img src={ICONS.arrowOutward} alt="arrow-icon" className=" size-6" />
      </Link>
    </div>
  );
};

export default MenuCard;
