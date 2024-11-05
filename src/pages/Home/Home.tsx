import BringingComfort from "../../components/HomePageComponents/BringingComfort/BringingComfort";
import Hero from "../../components/HomePageComponents/Hero/Hero";
import Logos from "../../components/HomePageComponents/Hero/Logos";
import Testimonials from "../../components/HomePageComponents/Testimonials/Testimonials";
import WhyChooseUS from "../../components/HomePageComponents/WhyChooseUS/WhyChooseUS";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Logos/>
            <BringingComfort/>
            <Testimonials/>
            <WhyChooseUS/>
        </div>
    );
};

export default Home;