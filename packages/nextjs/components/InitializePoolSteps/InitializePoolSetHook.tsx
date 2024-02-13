import React from "react";
import { CgInfo } from "react-icons/cg";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import CustomInput from "~~/components/InputDetails/CustomInput";

const InitializePoolSetHook: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col justify-center gap-[20px] pt-[20px]">
      <span>Hook data</span>
      <CustomInput />
      <div className="border-2 border-[#FFA876] rounded-lg flex items-center p-[20px] gap-[10px] max-w-[1026px] w-full">
        <div className="text-[#FFA876]">
          <CgInfo />
        </div>
        <span>This pool require hook data</span>
      </div>
      <div className="pr-[80px] py-[60px]">
        <ButtonSecondary textButton={"Next"} onClick={onNextStep} />
      </div>
    </div>
  );
};

export default InitializePoolSetHook;
