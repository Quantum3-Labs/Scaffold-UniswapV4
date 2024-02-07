import React from "react";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import CustomInput from "~~/components/InputDetails/CustomInput";

interface ApproveTokenFormProps {
  onApprove: () => void;
}
const ApproveTokenForm: React.FC<ApproveTokenFormProps> = ({ onApprove }) => {
  return (
    <div className="flex flex-col gap-[40px]">
      <span className="font-bold text-2xl">Approve Token</span>
      <div className="flex gap-[15px] flex-col">
        <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
          <span className="max-w-[130px] w-full">Spender</span>
          <CustomInput />
        </div>
        <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
          <span className="max-w-[130px] w-full">Amount</span>
          <CustomInput />
        </div>
      </div>
      <div className="py-[30px]">
        <ButtonSecondary textButton={"Approve"} onClick={onApprove} />
      </div>
    </div>
  );
};

export default ApproveTokenForm;
