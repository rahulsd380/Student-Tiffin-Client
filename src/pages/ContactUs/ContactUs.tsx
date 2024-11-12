import HeadingContainer from "../../components/Shared/HeadingContainer/HeadingContainer";
import ContactUsForm from "../../components/Shared/ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="w-full bg-[#F4F8FA] h-full  pb-[64px] md:pb-[96px]">
      <HeadingContainer title={"CONTACT US"} />
      <div className="max-w-[688px] w-full mx-auto mt-[96px] px-5 md:px-10 xl:px-0">
        <ContactUsForm classNames="bg-white p-5 md:p-8 rounded-2xl" />
      </div>
    </div>
  );
};

export default ContactUs;
