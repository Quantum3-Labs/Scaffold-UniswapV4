import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { MdArrowDropDown, MdOutlineCheckBox } from "react-icons/md";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  const router = useRouter();
  const [visibleItems, setVisibleItems] = useState(5);

  const formatAddress = (address: string) => {
    const formattedAddress = address && address.startsWith("0x") ? address : `0x${address || ""}`;
    return formattedAddress.slice(0, 8) + "..." + formattedAddress.slice(-13);
  };
  const data = [
    {
      name: "eCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79DC",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79DC",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBe Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79DC",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },

    {
      name: "OCBC Universal Hook",
      symbol: "xx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79DC",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
    {
      name: "OCBC Universal Hook",
      symbol: "xxx",
      address: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
      owner: "0x2B7E4B80A1C217cCe8f749d5c4fF226AEB1c79D",
    },
  ];
  return (
    <>
      <MetaHeader />
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1768px] w-full items-center">
          <div className="flex w-full gap-[20px] py-[15px] justify-between">
            <div className="flex gap-[20px] items-center">
              <span className="font-bold text-2xl">All Hooks</span>
              <div className="text-[#3878EF] flex items-center cursor-pointer">
                <MdOutlineCheckBox />
                <span className="px-[5px]">Show my hooks</span>
              </div>
            </div>
            <button
              className="rounded-md text-[#FFE290] border-2 border-[#FFE290] p-[10px] text-sm px-[30px] py-[10px]"
              onClick={() => router.push("/hooks")}
            >
              Deploy hook
            </button>
          </div>
          <div className="max-w-[1768px] w-full flex flex-col items-center bg-[#151F30] rounded-lg">
            <div className="flex w-full font-bold bg-[#1E293B] p-[30px] rounded-t-lg">
              <span className=" flex-1">Hook Name</span>
              <span className="flex-1">Hook symbol</span>
              <span className="flex-1">Hook address</span>
              <span className="flex-1">Hook owner</span>
            </div>
            {data.length === 0 ? (
              <div className="p-[20px] w-full text-sm">
                <span>There is no hook on this moment</span>
              </div>
            ) : (
              <>
                {data.slice(0, visibleItems).map(item => (
                  <div className="flex w-full py-[20px] px-[30px]" key={item.address}>
                    <span className="flex-1 ">{item.name}</span>
                    <span className=" flex-1 ">{item.symbol}</span>
                    <span className=" flex-1 ">{formatAddress(item.address)}</span>
                    <span className="flex-1 ">{formatAddress(item.owner)}</span>
                  </div>
                ))}
                {visibleItems < data.length && (
                  <div className="w-full py-[20px] flex justify-center border-t-2 border-[#0F172A]">
                    <button className="flex items-center font-bold" onClick={() => setVisibleItems(prev => prev + 10)}>
                      <span>Load More</span>
                      <MdArrowDropDown />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
