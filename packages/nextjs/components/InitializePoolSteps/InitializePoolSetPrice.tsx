import React from "react";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import CustomInput from "~~/components/InputDetails/CustomInput";

const InitializePoolSetPrice: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col max-w-[1026px] gap-[20px] justify-center">
      <span>Set price</span>
      <CustomInput />
      <div className="border-2 rounded-xl p-[20px]">
        <span>2 token A = 1 Token B </span>
      </div>
      <div className="pt-[50px]">
        <ButtonSecondary textButton={"Next"} onClick={onNextStep} />
      </div>
    </div>
  );
};

export default InitializePoolSetPrice;
