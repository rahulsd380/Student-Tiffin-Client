import { useState } from "react";
// import { IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";
import ContactUsForm from "../../Shared/ContactUsForm/ContactUsForm";
import Images from "./Images";
import Modal1 from "../../Shared/Modals/Modal1";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-[#F4F8FA]">
      <Container>
        <div className="font-Poppins flex flex-col xl:flex-row items-center md:items-start xl:items-center gap-[64px] xl:gap-5 pt-[42px] md:pt-[52px] xl:pt-[150px] pb-[64px] md:pb-[96px] xl:pb-[200px] px-5 md:px-10 xl:px-0">
          <div>
            <h1 className="text-[#293241] text-[36px] md:text-[72px] font-extrabold leading-[44px] md:leading-[80px] -tracking-[1px] max-w-[350px] md:max-w-[752px] lg:max-w-full">
              Study hard, work smart, we’ve got the food covered.
            </h1>

            <p className="text-[#424B54] text-lg md:text-2xl leading-6 md:leading-9 max-w-[350px] md:max-w-[549px] mt-3">
              Savor homestyle Indian cuisine crafted with tradition, perfect for
              every craving.
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="px-8 py-4 text-white bg-primary-gradient shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6"
            >
              Get Your Tiffin
            </button>
          </div>

          {/* <img
            src={IMAGES.heroImg}
            alt="dish-image"
            className="w-full max-w-[350px] md:max-w-[448px] max-h-[370px] md:max-h-[474px]"
          /> */}
          <Images />
        </div>

        <Modal1
          openModal={openModal}
          setOpenModal={setOpenModal}
          classNames={"h-[578px] overflow-y-auto p-4 md:p-8"}
        >
          {/* Form */}
          <ContactUsForm />
        </Modal1>
      </Container>
    </div>
  );
};

export default Hero;
