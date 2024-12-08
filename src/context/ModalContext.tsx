import React, { createContext, useContext, useState } from "react";

type ModalType = "login" | "signup" | "verifyAccount" | "forgotPassword" | "changePassword" | "forgotPasswordSentEmail" | null;

interface ModalContextType {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  modalType: ModalType;
  setModalType: (type: ModalType) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        modalType,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for accessing modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
