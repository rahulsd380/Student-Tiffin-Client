import { Dispatch, ReactNode, SetStateAction } from "react";

export type Modal1Props = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  classNames?: string;
};

const Modal1: React.FC<Modal1Props> = ({
  children,
  openModal,
  setOpenModal,
  classNames,
}) => {
  return (
    <div className="mx-auto w-fit">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] w-screen ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 grid place-items-center bg-gray-800/50 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[360px] md:w-[688px] overflow-y-auto rounded-xl bg-white drop-shadow-2xl ${
            openModal
              ? "opacity-1 duration-300"
              : "scale-110 opacity-0 duration-150"
          } ${classNames}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal1;
