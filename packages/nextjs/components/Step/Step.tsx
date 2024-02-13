import React from "react";

interface StepProps {
  number: number;
  description: string;
  currentStep: number;
}

const Step: React.FC<StepProps> = ({ number, description, currentStep }) => {
  const isActive = currentStep === number;

  return (
    <div className="flex gap-[15px]">
      <div className="flex flex-col justify-center max-w-[23px] items-center">
        <div
          className={`w-[22px] h-[22px] rounded-full border-2 border-white flex justify-center items-center ${
            isActive ? "color-linear border-none" : ""
          }`}
        >
          <span>{number}</span>
        </div>
        <div className="w-[1px] h-[28px] bg-white"></div>
      </div>
      <span className={`${isActive ? "text-color-step font-bold" : ""}`}>{description}</span>
    </div>
  );
};

export default Step;
