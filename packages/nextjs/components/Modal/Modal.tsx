import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000000] bg-opacity-50 z-50">
      <div className="bg-[#151F30] rounded-lg p-8 max-w-[721px] w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
