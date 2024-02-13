import React from "react";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";

const ConfirmationOfPoolInitialize: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="font-bold text-xl">Overview</span>
      <div className="flex flex-col gap-[20px] pb-[100px]">
        <span>Tokens pairs</span>
        <div className="flex gap-[20px]">
          <div className="max-w-[257px] w-full bg-[#1E293B] p-[16px] rounded-lg flex gap-[10px]">
            <img src={"/ethereum-logo.png"} className="w-[21px]" alt="Ethereum Logo" />
            <span>ETH</span>
          </div>
          <div className="max-w-[257px] w-full bg-[#1E293B] p-[16px] rounded-lg flex gap-[10px]">
            <img src={"/ethereum-logo.png"} className="w-[21px]" alt="Ethereum Logo" />
            <span>ETH</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[15px] pr-[30px] pb-[50px]">
          <div className="flex justify-between">
            <span>Fees </span>
            <span>0.1 %</span>
          </div>
          <div className="flex justify-between">
            <span>Universal Hook</span>
            <span>OCBC Hook 1</span>
          </div>
          <div className="flex justify-between">
            <span>Price</span>
            <span>$ 123</span>
          </div>
        </div>
        <ButtonSecondary textButton={"Initialize"} onClick={onNextStep} />
      </div>
    </div>
  );
};

export default ConfirmationOfPoolInitialize;
