import BringingComfort from "../../components/HomePageComponents/BringingComfort/BringingComfort";
import Hero from "../../components/HomePageComponents/Hero/Hero";
import Logos from "../../components/HomePageComponents/Hero/Logos";
import WhyChooseUS from "../../components/HomePageComponents/WhyChooseUS/WhyChooseUS";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Logos/>
            <BringingComfort/>
            <WhyChooseUS/>
        </div>
    );
};

export default Home;