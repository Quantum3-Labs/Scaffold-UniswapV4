import React, { useState } from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import CustomInput from "~~/components/InputDetails/CustomInput";
import { useScaffoldContractWrite, useTransactor } from "~~/hooks/scaffold-eth";
import { AbiFunction } from "abitype";
import { Address, TransactionReceipt } from "viem";

interface HookConfig {
  nonce: number;
  name: string;
  symbol: string;
}

const Hooks = () => {
  const [showSecondBlock, setShowSecondBlock] = useState(false);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isTransactionConfirmed, setIsTransactionConfirmed] = useState(false);
  const writeTxn = useTransactor();

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "UniversalHookFactory",
    functionName: "deploy",
    args: [BigInt(1), name, symbol],
    value: BigInt(0),
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
      setIsTransactionConfirmed(true);
    },
    blockConfirmations: 0,
  });

  const handleDeployClick = async () => {
    try {
      setShowSecondBlock(true);
      await writeTxn(writeAsync({ value: BigInt(0) }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1768px] w-full items-center ">
          <div className="max-w-[721px] w-full p-[10px]">
            <Link href="/universalFactory-deployHook" className="flex items-center text-[#56748A] font-bold py-[20px]">
              <HiArrowLeft />
              <span className="ml-2">Go back</span>
            </Link>
          </div>
          <div className="flex gap-[20px]">
            <div className="bg-[#151F30] px-[30px] pb-[40px] pt-[20px] rounded-2xl w-[600px]">
              <div className="font-bold text-2xl pb-[30px]">
                <span>Deploy Universal Hook</span>
              </div>
              <div className=" flex gap-[15px] flex-col">
                <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
                  <span className="max-w-[130px] w-full ">Name</span>
                  <CustomInput onValueChange={setName} />
                </div>
                <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
                  <span className="max-w-[130px] w-full ">Symbol</span>
                  <CustomInput onValueChange={setSymbol} />
                </div>
              </div>
              <div className="py-[30px]">
                <ButtonSecondary textButton={"Deploy"} onClick={handleDeployClick} />
              </div>
            </div>
            {showSecondBlock && isTransactionConfirmed && (
              <div className="max-w-[393px] w-full bg-[#151F30] flex-col py-[30px]">
                <div className="flex gap-[10px] items-center p-[10px] font-bold text-xl">
                  <IoMdCheckmarkCircleOutline color="#1AC187" />
                  <span>Transaction Complete! </span>
                </div>
                <div className="flex flex-col pl-[40px] pb-[30px]">
                  <span>Hook name : {name} Universal Hook</span>
                  <span>Hook symbol : {symbol} </span>
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
