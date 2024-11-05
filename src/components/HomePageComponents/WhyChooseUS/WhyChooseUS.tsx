import { IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";

const WhyChooseUS = () => {
  const items = [
    {
      img: IMAGES.tiffinImg1,
      description: "Authentic Indian flavors delivered fresh daily.",
    },
    {
      img: IMAGES.tiffinImg2,
      description: "Healthy meals made from quality ingredients.",
    },
    {
      img: IMAGES.tiffinImg3,
      description: "Diverse menu options to satisfy every craving.",
    },
  ];
  return (
    <div className="bg-[#293241] py-[150px]">
      <Container>
        <div className="flex flex-col gap-[96px]">
          <h1 className="text-[#FBF5F3] text-[96px] font-extrabold leading-[110px] uppercase text-center">
            Why Choose Student Tiffin?
          </h1>

          <div className="flex items-center justify-center gap-[64px]">
            {
                items.map((item, index) => 
                    <div key={index} className="flex flex-col gap-12">
            <img src={item.img} alt="" className="max-w-[348px] max-h-[227px]" />
            <p className="text-white text-[28px] font-Poppins leading-9 text-center max-w-[352px] mx-auto">{item.description}</p>
          </div>
                )
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUS;
