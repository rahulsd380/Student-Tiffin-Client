import { useState } from "react";
import ContactUsForm from "../../Shared/ContactUsForm/ContactUsForm";
import Modal from "../../Shared/Modal/Modal";
import Container from "../../Shared/Container/Container";
import Logos from "../../HomePageComponents/Hero/Logos";

const AboutUsHero = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-[#F4F8FA] py-[64px] md:py-[96px] xl:py-[128px]">
        <Container>
      <div className="px-5 md:px-10 xl:px-0">
        <h1 className="text-[#293241] text-[36px] md:text-[40px] xl:text-[64px] font-bold leading-[44px]  md:leading-[64px] xl:leading-[80px] -tracking-[1px] max-w-[350px] md:max-w-[752px] lg:max-w-full">
          We Deliver Every Day From Monday to Saturday.
        </h1>

        <p className="text-[#424B54] text-lg md:text-xl xl:text-2xl leading-6 md:leading-9 mt-5">
        At Student Tiffin, we understand that cravings for authentic Indian food can strike any day of the week. That's why we are committed to delivering fresh, delicious meals to your table every day from Monday to Saturday. Our menu features a range of homestyle dishes, inspired by traditional recipes passed down through generations.
          <br />
          <br />
          We believe in using only quality ingredients to ensure every bite is
          wholesome and satisfying. Whether you’re a student, a busy
          professional, or anyone longing for the comforting flavors of home,
          we’re here to make your life easier and tastier. Enjoy the convenience
          of healthy, ready-to-eat meals that keep you connected to your roots,
          no matter where you are.
        </p>

        <button
          onClick={() => setOpenModal(true)}
          className="px-8 py-4 text-white bg-primary-gradient shadow-custom-shadow border border-white-opacity-25 rounded-2xl text-xl leading-5 font-semibold tracking-tighter mt-6"
        >
          Get Your Tiffin
        </button>
      </div>

    
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        classNames={"h-[578px] overflow-y-auto p-4 md:p-8"}
      >
        {/* Form */}
        <ContactUsForm />
      </Modal>
    </Container>
    <div className="mt-[64px] md:mt-[96px] xl:mt-[128px]">
      <Logos/>
      </div>
    </div>
  );
};

export default AboutUsHero;
