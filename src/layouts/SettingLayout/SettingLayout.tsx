import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import Container from "../../components/Shared/Container/Container";
import SettingNavigationBar from "../../components/SettingNavigationBar/SettingNavigationBar";
import { ICONS } from "../../assets";
import ScrollToTop from "../../hooks/scrollToTop";

const SettingLayout = () => {
  const location = useLocation();
  let title;
  let icon;
  // setting dynamic title and icon
  if (location.pathname === "/setting/profile") {
    title = "Profile";
    icon = ICONS.user;
  } else if (location.pathname === "/setting/recent-orders") {
    title = "Recent Orders";
    icon = ICONS.recentOrders;
  } else {
    title = "Subscription";
    icon = ICONS.subscription;
  }

  return (
    <div className="">
      <ScrollToTop/>
      <Navbar />
      <div className="px-5 md:px-10 xl:px-0 bg-[#F4F8FA]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 py-[34px]">
            <SettingNavigationBar />
            <div className="bg-white rounded-2xl p-5 md:p-8 w-full">
              {/* Heading title and icon */}
              <div className="flex items-center gap-3 border-b border-[#E6E6E6] pb-8">
                <img src={icon} alt="" className="size-5" />
                <h1 className="text-[#424B54] font-Poppins text-xl font-semibold leading-7">
                  {title}
                </h1>
              </div>
              <Outlet />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SettingLayout;
