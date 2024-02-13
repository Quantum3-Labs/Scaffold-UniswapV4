import React, { useState } from "react";
import Step from "~~/components/Step/Step";

const Initialize = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1768px] w-full">
        <div className="max-w-[358px] w-full bg-[#151F30] flex flex-col justify-center items-center rounded-lg">
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
                    currentStep === 6 ? "color-linear" : ""
                  }`}
                >
                  <span>6</span>
                </div>
              </div>
              <span className={`${currentStep === 6 ? "text-color-step font-bold" : ""}`}>Transaction Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initialize;
