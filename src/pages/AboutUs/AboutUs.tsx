import AboutUsHero from "../../components/AboutUsPageComponents/AboutUsHero/AboutUsHero";
import SubscriptionPlans from "../../components/HomePageComponents/SubscriptionPlans/SubscriptionPlans";
import HeadingContainer from "../../components/Shared/HeadingContainer/HeadingContainer";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F4F8FA] h-full pb-[64px] md:pb-[96px]">
      <HeadingContainer title={"ABOUT US"} />
      <AboutUsHero />
      <SubscriptionPlans isHeadingVisible={true} />
    </div>
  );
};

export default AboutUs;
