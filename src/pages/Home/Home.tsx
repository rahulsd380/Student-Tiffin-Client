import BringingComfort from "../../components/HomePageComponents/BringingComfort/BringingComfort";
import Hero from "../../components/HomePageComponents/Hero/Hero";
import Logos from "../../components/HomePageComponents/Hero/Logos";
import SubscriptionPlans from "../../components/HomePageComponents/SubscriptionPlans/SubscriptionPlans";
// import Testimonials from "../../components/HomePageComponents/Testimonials/Testimonials";
import WhyChooseUS from "../../components/HomePageComponents/WhyChooseUS/WhyChooseUS";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logos />
      <BringingComfort />
      {/* <Testimonials/> */}
      <WhyChooseUS />
      <div className="py-[96px] md:py-[128px]">
        <SubscriptionPlans isHeadingVisible={true} />
      </div>
    </div>
  );
};

export default Home;
