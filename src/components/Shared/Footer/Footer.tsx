import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import Container from "../Container/Container";

const Footer = () => {
  const contactInfo = [
    {
      icon: ICONS.location,
      info: "Spade Enterprise Centre, North King Street, Smithfield,  Dublin 7",
    },
    {
      icon: ICONS.clock,
      info: "Everyday: 9 AM - 7PM",
    },
    {
      icon: ICONS.phone,
      info: "+123 4 567 890",
    },
    {
      icon: ICONS.email,
      info: "hello@studenttiffin.com",
    },
  ];

  const quickLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Menu",
      path: "/menu",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    {
      label: "Subscription",
      path: "/subscription",
    },
  ];

  const followUsInfo = [
    {
      label: "X",
      path: "/",
    },
    {
      label: "YouTube",
      path: "/menu",
    },
    {
      label: "Facebook",
      path: "/about",
    },
    {
      label: "Instagram",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-[#13161C] py-[64px] font-Poppins">
      <Container>
        <div className="font-Poppins flex gap-[96px]">
          {/* Let’s Get Together */}
          <div className="w-full">
            <h1 className="text-white font-semibold text-2xl leading-8">
              Let’s Get Together
            </h1>
            <div className="flex flex-col gap-4 mt-7">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 bg-[#ffffff26] rounded-full flex items-center justify-center size-10">
                    <img src={info.icon} alt="" className="size-6" />
                  </div>
                  <p className="text-[#ffffffcc] leading-6 w-[312px]">
                    {info.info}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h1 className="text-white font-semibold text-2xl leading-8">
              Quick Links
            </h1>
            <div className="flex flex-col gap-4 mt-7">
              {quickLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="text-[#ffffffcc] leading-6 hover:underline w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow us on */}
          <div className="w-full">
            <h1 className="text-white font-semibold text-2xl leading-8">
              Follow us on
            </h1>
            <div className="flex flex-col gap-4 mt-7">
              {followUsInfo.map((info, index) => (
                <Link
                  to={info.path}
                  key={index}
                  className="text-[#ffffffcc] leading-6 hover:underline w-fit"
                >
                  {info.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe to the newsletter. */}
          <div className="w-full">
            <h1 className="text-white font-semibold text-2xl leading-8">
              Subscribe to the newsletter.
            </h1>
            <div className="flex flex-col gap-2 mt-7">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Email"
                className="max-w-[242px] p-3 rounded-lg bg-[#ffffff26] border border-[#ffffff0d] text-white focus:outline-none"
              />
              <button className="px-4 py-[10px] rounded-lg bg-white text-[#13161C] focus:outline-none font-medium leading-5 max-w-[113px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border border-[#ffffff26] h-[1px] my-9" />
        <p className="text-[#ffffffb3] leading-5">
        © Student Tiffin Limited 2024 | All Rights Reserved
                  </p>
      </Container>
    </div>
  );
};

export default Footer;
