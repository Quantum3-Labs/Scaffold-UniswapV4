import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const PoolDetails = () => {
  return (
    <div className="flex flex-col max-w-[1768px] w-full bg-[#151F30] rounded-t-lg rounded-b-lg ">
      <div className="flex bg-[#1E293B] font-bold rounded-t-lg">
        <span className="border-r border-[#334155] py-[20px] px-[40px] w-[20%]">Pool details</span>
        <span className="py-[20px] px-[40px] w-[80%]">Details</span>
      </div>
      <div className="flex border-b border-[#334155]">
        <span className="border-r border-[#334155] py-[15px] px-[40px] w-[20%]">Token amounts</span>
        <div className="py-[15px] px-[40px] w-[80%] flex">
          <div className="flex bg-[#334155] px-[15px] py-[5px] rounded-full gap-[5px] items-center mx-[10px]">
            <img src={"/ethereum-logo.png"} className="w-[20px]" alt="ETH Logo" />
            <span>10 ETH</span>
          </div>
          <div className="flex bg-[#334155] px-[15px] py-[5px] rounded-full gap-[5px] items-center">
            <img src={"/b-logo.png"} className="w-[20px]" alt="WBTC Logo" />
            <span>10 WBTC</span>
          </div>
        </div>
      </div>
      <div className="flex border-b border-[#334155]">
        <span className="border-r border-[#334155] py-[15px] px-[40px] w-[20%]">Current price</span>
        <span className="py-[15px] px-[40px] w-[80%]">10 ETH = 0.53815 WBTC</span>
      </div>
      <div className="flex border-b border-[#334155]">
        <span className="border-r border-[#334155] py-[15px] px-[40px] w-[20%]">Fee</span>
        <span className="py-[15px] px-[40px] w-[80%]">0.3%</span>
      </div>
      <div className="flex border-b border-[#334155]">
        <span className="border-r border-[#334155] py-[15px] px-[40px] w-[20%]">Hook Address</span>
        <div className="py-[15px] px-[40px] w-[80%] flex items-center gap-[10px]">
          <span>0x2B7E4BfF226AEB1c79DC</span>
          <div className="text-[#56748A] ">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="border-r border-[#334155] py-[15px] px-[40px] w-[20%]">Hook Owner</span>
        <div className="py-[15px] px-[40px] w-[80%] flex items-center gap-[10px]">
          <span>0x2B7E4BfF226AEB1c79DC</span>
          <div className="text-[#56748A] ">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolDetails;
