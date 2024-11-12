import Menus from "../../components/MenuPageComponents/Menus/Menus";
import HeadingContainer from "../../components/Shared/HeadingContainer/HeadingContainer";

const Menu = () => {
  return (
    <div className="w-full bg-[#F4F8FA] h-full  pb-[64px] md:pb-[96px]">
      <HeadingContainer title={"Menu"} />
      <Menus/>
    </div>
  );
};

export default Menu;
