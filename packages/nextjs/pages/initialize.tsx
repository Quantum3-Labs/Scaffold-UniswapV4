import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import ConfirmationOfPoolInitialize from "~~/components/InitializePoolSteps/ConfirmationOfPoolInitialize";
import InitializePoolChoosePairAndFee from "~~/components/InitializePoolSteps/InitializePoolChoosePairAndFee";
import InitializePoolSelectHookAddress from "~~/components/InitializePoolSteps/InitializePoolSelectHookAddress";
import InitializePoolSetHook from "~~/components/InitializePoolSteps/InitializePoolSetHook";
import InitializePoolSetPrice from "~~/components/InitializePoolSteps/InitializePoolSetPrice";
import InitializePoolSuccess from "~~/components/InitializePoolSteps/InitializePoolSuccess";
import CustomInput from "~~/components/InputDetails/CustomInput";
import Step from "~~/components/Step/Step";

const Initialize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep(prevStep => (prevStep < 6 ? prevStep + 1 : prevStep));
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-[1768px] w-full flex justify-center gap-[50px] pb-[20px]">
        <div className="max-w-[358px] w-full bg-[#151F30] flex flex-col justify-center items-center rounded-lg max-h-[400px]">
          <div className="py-[30px] w-full px-[50px]">
            <span className="font-bold text-xl">Initialize a pool steps</span>
          </div>
          <div className="pb-[30px]">
            <Step number={1} description={"Choose tokens and set pool fee"} currentStep={currentStep} />
            <Step number={2} description={"Select universal hook"} currentStep={currentStep} />
            <Step number={3} description={"Set price"} currentStep={currentStep} />
            <Step number={4} description={"Set hook"} currentStep={currentStep} />
            <Step number={5} description={"Confirmation of pool initialization"} currentStep={currentStep} />
            <div className="flex gap-[15px]">
              <div className="flex flex-col justify-center max-w-[23px] items-center">
                <div
                  className={`w-[22px] h-[22px] rounded-full border-2 border-white flex justify-center items-center ${
                    currentStep === 6 ? "color-linear border-none" : ""
                  }`}
                >
                  <span>6</span>
                </div>
              </div>
              <span className={`${currentStep === 6 ? "text-color-step font-bold" : ""}`}>Transaction Complete</span>
            </div>
          </div>
        </div>
        <div className="bg-[#151F30] rounded-lg w-full max-w-[1171px]">
          <div className="p-[30px]">
            {currentStep === 1 && <InitializePoolChoosePairAndFee onNextStep={handleNextStep} />}
            {currentStep === 2 && <InitializePoolSelectHookAddress onNextStep={handleNextStep} />}
            {currentStep === 3 && <InitializePoolSetPrice onNextStep={handleNextStep} />}
            {currentStep === 4 && <InitializePoolSetHook onNextStep={handleNextStep} />}
            {currentStep === 5 && <ConfirmationOfPoolInitialize onNextStep={handleNextStep} />}
            {currentStep === 6 && <InitializePoolSuccess onNextStep={handleNextStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initialize;
