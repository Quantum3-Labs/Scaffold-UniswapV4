import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from "~~/components/Button/Button";
import CustomInput from "~~/components/InputDetails/CustomInput";
import DetailsInputer from "~~/components/InputDetails/DetailsInputer";

const Hooks = () => {
  const router = useRouter();
  const [showSecondBlock, setShowSecondBlock] = useState(false);

  const handleDeployClick = () => {
    setShowSecondBlock(true);
    console.log("Deploy button clicked!");
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1768px] w-full  ">
          <div className="max-w-[721px] w-full p-[10px]">
            <Link href="/hooks" className="flex items-center text-[#56748A] font-bold py-[20px]">
              <HiArrowLeft />
              <span className="ml-2">Go back</span>
            </Link>
          </div>
          <div className="flex gap-[20px]">
            <div className="bg-[#151F30] px-[30px] pb-[40px] pt-[20px] rounded-2xl max-w-[721px] w-full">
              <div className="font-bold text-2xl pb-[30px]">
                <span>Deploy Universal Hook</span>
              </div>
              <div className=" flex gap-[15px] flex-col">
                <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
                  <span className="max-w-[130px] w-full ">Name</span>
                  <CustomInput />
                </div>
                <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
                  <span className="max-w-[130px] w-full ">Symbol</span>
                  <CustomInput />
                </div>
              </div>
              <div className="py-[30px]">
                <Button texButton={"Deploy"} onClick={handleDeployClick} />
              </div>
            </div>
            {showSecondBlock && (
              <div className="max-w-[393px] w-full bg-[#151F30] flex-col py-[30px]">
                <div className="flex gap-[10px] items-center p-[10px] font-bold text-xl">
                  <IoMdCheckmarkCircleOutline color="#1AC187" />
                  <span>Transaction Complete! </span>
                </div>
                <div className="flex flex-col pl-[40px] pb-[30px]">
                  <span>Hook name : XXXX Universal Hook</span>
                  <span>Hook symbol : XX </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hooks;
