import { useCallback, useEffect, useState } from "react";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";

const Testimonials = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const reviews = [
    {
      profileImg: IMAGES.userImg,
      review: "The food from Student Tiffin is a taste of home! Delicious and comforting.",
      name: "Arun, Indian Student",
    },
    {
      profileImg: IMAGES.userImg,
      review: "I love the variety and the flavors! It's just like my mom's cooking.",
      name: "Anjali, Indian Student",
    },
    {
      profileImg: IMAGES.userImg,
      review: "Excellent service and the food is always fresh. Highly recommend!",
      name: "Raj, Indian Student",
    },
    {
      profileImg: IMAGES.userImg,
      review: "Affordable and tasty meals that remind me of home. What else can I ask for?",
      name: "Neha, Indian Student",
    },
  ];

  const prevSlider = () => {
    setCurrentSlider((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlider = useCallback(() => {
    setCurrentSlider((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlider, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="bg-[#DE3C4B] py-[96px] relative">
      <img src={ICONS.stripTop} alt="" className="absolute -top-3" />
      <img src={ICONS.stripDown} alt="" className="absolute -bottom-3" />
      <Container>
        <div className="font-Poppins">
          <div className="px-6 py-3 rounded-[100px] border border-white text-white font-semibold leading-5 uppercase tracking-tighter w-fit mx-auto">
            WHAT OTHERS SAY ABOUT US
          </div>

          <div className="flex items-center justify-center gap-[63px] mt-12 relative mx-auto">
            {/* Left arrow */}
            <button onClick={prevSlider} className="size-[52px] rounded-full bg-white flex items-center justify-center">
              <img src={ICONS.leftArrow} alt="left-arrow" />
            </button>

            <div className="w-full max-w-[600px] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlider * 100}%)` }}
              >
                {/* Testimonial Card */}
                {reviews.map((review, index) => (
                  <div className="flex items-center gap-5 min-w-full" key={index}>
                    <img src={review.profileImg} alt="user" className="size-[96px] rounded-full" />
                    <div>
                      <h1 className="text-white text-xl font-semibold leading-7 tracking-tighter max-w-[448px]">
                        “{review.review}”
                      </h1>
                      <p className="text-[#F8D8DB] leading-7 tracking-tighter mt-2">{review.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button onClick={nextSlider} className="size-[52px] rounded-full bg-white flex items-center justify-center">
              <img src={ICONS.rightArrow} alt="right-arrow" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
