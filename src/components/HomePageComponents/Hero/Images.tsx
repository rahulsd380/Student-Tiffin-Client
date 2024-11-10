import { useCallback, useEffect, useState } from "react";
import { IMAGES } from "../../../assets";

const Images = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // The slider images array
  const sliderImages = [IMAGES.heroImg, IMAGES.tiffinImg1, IMAGES.tiffinImg2];

  const nextSlider = useCallback(() => {
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );
  }, [sliderImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full max-w-[350px] md:max-w-[448px] max-h-[370px] md:max-h-[474px] overflow-hidden">
      {/* slider container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* sliders */}
        {sliderImages.map((slide, inx) => (
          <img
            key={inx}
            src={slide}
            className="w-full max-w-[350px] md:max-w-[448px] max-h-[370px] md:max-h-[474px] object-cover flex-shrink-0"
            alt={`Slider - ${inx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
