import React from "react";
import { HiChevronDown } from "react-icons/hi";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";

const InitializePoolChoosePairAndFee: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col gap-[20px] pb-[30px]">
      <span>Select pairs</span>
      <div className="flex justify-between gap-[10px]">
        <button className="bg-[#1E293B] rounded-lg flex max-w-[497px] w-full justify-between p-[15px] items-center">
          <div className="flex items-center gap-[15px]">
            <img src={"/ethereum-logo.png"} className="w-[21px] h-[21px]" alt="Ethereum Logo" />
            <span>ETH</span>
          </div>
          <HiChevronDown />
        </button>
        <button className="bg-[#1E293B] rounded-lg flex max-w-[497px] w-full justify-between p-[15px] items-center">
          <div className="flex items-center gap-[15px]">
            <img src={"/ethereum-logo.png"} className="w-[21px] h-[21px]" alt="Ethereum Logo" />
            <span>ETH</span>
          </div>
          <HiChevronDown />
        </button>
      </div>
      <div className="flex flex-col w-full pt-[20px] gap-[20px] pb-[60px]">
        <span>Select fee tier</span>
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#1E293B] rounded-lg p-[15px]">
            <span>0.1 %</span>
          </div>
          <div className="w-full flex justify-between gap-[10px]">
            <button className="bg-[#1E293B] rounded-lg p-[15px] max-w-[330px] w-full border-2 border-[#FFE290]">
              0.1 %
            </button>
            <button className="bg-[#1E293B] rounded-lg p-[15px] max-w-[330px] w-full">0.3 %</button>
            <button className="bg-[#1E293B] rounded-lg p-[15px] max-w-[330px] w-full">0.5 %</button>
          </div>
        </div>
      </div>
      <ButtonSecondary textButton={"Next"} onClick={onNextStep} />
    </div>
  );
};

export default InitializePoolChoosePairAndFee;
