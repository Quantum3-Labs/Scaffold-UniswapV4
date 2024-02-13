import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { SiSearxng } from "react-icons/si";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import CustomButton from "~~/components/Button/CustomButton";

const InitializePoolSelectHookAddress: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div>
      <div className="flex justify-between gap-[10px]">
        <span>Hook address</span>
        <div className="text-[#3878EF] flex items-center cursor-pointer rounded-lg">
          <MdOutlineCheckBox />
          <span className="px-[5px]">Show my hooks</span>
        </div>
      </div>
      <div>
        <div className="px-[10px] py-[20px]">
          <div className="flex pl-[10px] bg-[#1E293B] w-full gap-[10px] items-center text-[#56748A]">
            <SiSearxng />
            <input
              type="text"
              placeholder="Search hook"
              className="bg-[#1E293B] w-full rounded-md p-[10px] border-none outline-none text-white"
            />
          </div>
          <div className="pt-[20px] flex flex-col gap-[10px]">
            <CustomButton onClick={() => console.log("Click OCBC Bank Swap")}>
              <span>OCBC Bank Swap</span>
            </CustomButton>
            <CustomButton onClick={() => console.log("Click USDC Swap Hook")}>
              <span>USDC Swap Hook</span>
            </CustomButton>
            <CustomButton onClick={() => console.log("Click Other hook name XXX")}>
              <span>Other hook name XXX</span>
            </CustomButton>
          </div>
          <div className="pt-[50px]">
            <ButtonSecondary textButton={"Next"} onClick={onNextStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitializePoolSelectHookAddress;
