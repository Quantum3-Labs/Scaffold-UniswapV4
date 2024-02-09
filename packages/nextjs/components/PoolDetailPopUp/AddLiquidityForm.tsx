import React from "react";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import CustomInput from "~~/components/InputDetails/CustomInput";

const AddLiquidityForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="text-2xl font-bold">Add liquidity</span>
      <div>
        <span>Token pair</span>
        <div className="flex justify-between pb-[20px] pt-[15px]">
          <div className="max-w-[306px] w-full bg-[#1E293B] flex p-[10px] gap-[10px] items-center rounded-lg">
            <img src={"/ethereum-logo.png"} className="w-[33px]" alt="ETH Logo" />
            <span>ETH</span>
          </div>
          <div className="max-w-[306px] w-full bg-[#1E293B] flex p-[10px] gap-[10px] items-center rounded-lg">
            <img src={"/b-logo.png"} className="w-[33px]" alt="WBTC Logo" />
            <span>WBTC</span>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] pb-[20px]">
          <span>Set upper and lower tick</span>
          <div className="bg-[#1E293B] pt-[4px] rounded-lg">
            <span className="text-[#56748A] px-[10px] ">Lower</span>
            <CustomInput placeholder={""} />
          </div>
          <div className="bg-[#1E293B] pt-[4px] rounded-lg">
            <span className="text-[#56748A] px-[10px] ">Upper</span>
            <CustomInput placeholder={""} />
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <span>Set Liquidity Delta</span>
          <CustomInput placeholder={"Type here"} />
        </div>
      </div>
      <div className="flex flex-col gap-[15px] pb-[20px]">
        <span>Deposit amount</span>
        <div className="bg-[#1E293B] px-[10px] py-[14px]  rounded-lg flex">
          <CustomInput placeholder={""} />
          <div className="bg-[#334155] flex items-center justify-center rounded-full max-w-[110px] w-full gap-[5px]">
            <img src={"/ethereum-logo.png"} className="w-[21px]" alt="ETH Logo" />
            <span>ETH</span>
          </div>
        </div>
        <div className="bg-[#1E293B] px-[10px] py-[14px]  rounded-lg flex">
          <CustomInput placeholder={""} />
          <div className="bg-[#334155] flex items-center justify-center rounded-full max-w-[110px] w-full gap-[5px] ">
            <img src={"/b-logo.png"} className="w-[21px] " alt="WBTC Logo" />
            <span>WBTC</span>
          </div>
        </div>
      </div>

      <ButtonSecondary onClick={() => {}} textButton={"Deposit"} />
    </div>
  );
};

export default AddLiquidityForm;
