import { Link, useLocation } from "react-router-dom";
import { navigationLinks } from "./navigationLinks";

const SettingNavigationBar = () => {
  const location = useLocation();
  return (
    <div className="p-2 w-full md:w-[463px] lg:w-[277px] rounded-2xl bg-white h-fit">
      <div className="flex flex-row lg:flex-col gap-1 w-full overflow-x-auto">
        {navigationLinks.map((item, idx: number) => (
          <Link
            to={item.path}
            key={idx}
            className={`${
              location.pathname === item.path ? "bg-[#F9F9F9]" : "bg-white"
            } p-[10px] leading-5 text-[#424B54] transition-all duration-300 flex items-center gap-[6px] rounded-lg w-full`}
          >
            <img src={item.icon} alt="" className="size-5" />
            {item.label}
          </Link>
        ))}
      </div>

      {/* HR */}
      <hr className="hidden lg:block border border-[#E6E6E6] h-[1px] mt-2" />

      {/* Sign Out button with animation */}
      <button
        className={`hidden lg:block p-[10px] leading-5 text-[#49515D] mt-2 transition-all duration-300`}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SettingNavigationBar;
