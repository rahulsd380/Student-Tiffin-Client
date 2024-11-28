import { ICONS } from "../../../assets";


const AuthModal = ({openModal, setOpenModal, children, heading}) => {
    
    return (
        <div
          className={`${
            openModal ? " visible" : " invisible"
          } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}>
          <div
            className={`${
              openModal ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
            } w-[90%] md:w-[70%] lg:w-[529px] h-[480px] xl:h-[550px] 2xl:h-[700px] overflow-y-auto bg-[#ffffff] rounded-2xl p-6 transition-all duration-300`}>
              <div className="flex justify-end w-full">
              <img onClick={() => setOpenModal(false)} src={ICONS.close} alt="close-icon" className="size-6 cursor-pointer" />
              </div>
           <h1 className="text-[#303D5C] font-Poppins text-xl sm:text-[28px] font-bold text-center mb-8">{heading}</h1>
           {children}
          </div>
        </div>
    );
};

export default AuthModal;