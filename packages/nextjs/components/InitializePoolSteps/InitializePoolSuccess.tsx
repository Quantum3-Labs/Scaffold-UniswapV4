import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";

const InitializePoolSuccess: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex gap-[5px] items-center">
        <div className="text-[#1AC187]">
          <IoMdCheckmarkCircleOutline />
        </div>
        <span className="font-bold text-xl">Transaction Complete! </span>
      </div>
      <span>Your pool has been successfully initialized with pool id 12</span>
      <div className="pt-[100px]">
        <ButtonSecondary textButton={"Back to all pools"} onClick={onNextStep} />
      </div>
    </div>
  );
};

export default InitializePoolSuccess;
