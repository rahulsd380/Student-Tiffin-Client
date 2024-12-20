import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigationLinks } from "./navigationLinks";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Features/Auth/authSlice";
import { toast } from "sonner";

const SettingNavigationBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://student-tiffin-backend.vercel.app/api/v1/auth/logout"
      );

      if (response.ok) {
        dispatch(logout());
        toast.success("Logged out successfully.");
        navigate("/");
      } else {
        throw new Error("Logout failed");
      }
    } catch (err) {
      toast.error("Failed to log out. Please try again.");
    }
  };
  return (
    <div className="p-2 w-full md:w-[463px] lg:w-[277px] rounded-2xl bg-white h-fit">
      <div className="flex flex-row lg:flex-col w-full overflow-x-auto">
        {navigationLinks.map((item, idx: number) => (
          <Link
            to={item.path}
            key={idx}
            className={`${
              location.pathname === item.path ? "bg-[#F9F9F9]" : "bg-white"
            } p-[10px] leading-5 text-[#424B54] transition-all duration-300 flex items-center gap-[6px] rounded-lg w-fit md:w-full whitespace-nowrap`}
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
        onClick={handleLogout}
        className={`hidden lg:block p-[10px] leading-5 text-[#49515D] mt-2 transition-all duration-300`}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SettingNavigationBar;
