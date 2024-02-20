import React from "react";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import Input from "~~/components/InputDetails/Input";

interface TranferTokenFormProps {
  onTranfer: () => void;
}
const TransferTokenForm: React.FC<TranferTokenFormProps> = ({ onTranfer }) => {
  return (
    <div className="flex flex-col gap-[40px]">
      <span className="font-bold text-2xl">Transfer Token</span>
      <div className="flex gap-[15px] flex-col">
        <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
          <span className="max-w-[130px] w-full">To</span>
          <Input />
        </div>
        <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
          <span className="max-w-[130px] w-full">Amount</span>
          <Input />
        </div>
      </div>
      <div className="py-[30px]">
        <ButtonSecondary textButton={"Tranfer"} onClick={onTranfer} />
      </div>
    </div>
  );
};

export default TransferTokenForm;
