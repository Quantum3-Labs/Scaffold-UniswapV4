import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="w-full rounded-lg flex p-[10px] hover:border-2" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
