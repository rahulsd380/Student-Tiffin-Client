import { IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";

const Hero = () => {
  return (
    <div className="bg-[#F4F8FA]">
      <Container>
        <div className="font-Poppins flex items-center gap-5 pt-[150px] pb-[200px]">
          <div>
            <h1 className="text-[#293241] text-[72px] font-extrabold leading-[80px] -tracking-[1px]">
              Experience Fresh, Authentic Indian Meals Daily.
            </h1>

            <p className="text-[#424B54] text-2xl leading-9 max-w-[549px] mt-3">
              Savor homestyle Indian cuisine crafted with tradition, perfect for
              every craving.
            </p>

            <button className="px-8 py-4 text-white bg-primary-gradient shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6">Get Your Tiffin</button>
          </div>

          <img
            src={IMAGES.heroImg}
            alt="dish-image"
            className="max-w-[448px] max-h-[474px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
