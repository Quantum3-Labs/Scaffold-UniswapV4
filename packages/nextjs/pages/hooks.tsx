import React from "react";
import { useRouter } from "next/router";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { SiSearxng } from "react-icons/si";
import Button from "~~/components/Button/Button";
import DetailsInputer from "~~/components/InputDetails/DetailsInputer";

const Hooks = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col p-[30px] gap-[20px] max-w-[1768px] w-full">
          <div className="flex flex-col">
            <span className="text-[#56748A]">All hooks {">"} HOOK NAME</span>
            <span className="font-bold text-3xl">OCBC Universal Hook</span>
          </div>
          <div className=" flex gap-[20px] ">
            <div className="flex-col max-w-[374px] w-full bg-[#151F30]">
              <div className="px-[10px] py-[20px]">
                <div className="flex pl-[10px] bg-[#1E293B] max-w-[348px] gap-[10px] items-center text-[#56748A]">
                  <SiSearxng />
                  <input
                    type="text"
                    placeholder="Search function"
                    className="bg-[#1E293B] w-full rounded-md p-[10px] border-none outline-none text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px] px-[20px] pb-[20px]">
                <span>Add Trading Value Discount</span>
                <span className="py-[15px]">Function Name</span>
                <span className="py-[15px]">Function Name</span>
                <span className="py-[15px]">Function Name</span>
                <span className="py-[15px]">Function Name</span>
                <span className="py-[15px]">Function Name</span>
                <span className="py-[15px]">Function Name</span>
              </div>
            </div>
            <div className="flex-col max-w-[1408px] w-full bg-[#151F30] px-[30px] rounded-xl">
              <div className="flex items-center font-bold text-xl gap-[10px] pt-[30px] pb-[15px] pl-[20px]">
                <div className="text-[#56748A]">
                  <IoExtensionPuzzleOutline />
                </div>
                <span>Extension setting</span>
              </div>

              <div className="flex flex-col">
                <DetailsInputer label={"Volume"} />
                <DetailsInputer label={"Discount Point"} />
              </div>
              <div className="p-[40px]">
                <Button texButton={"Execute"} onClick={() => router.push("/deploy")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hooks;
