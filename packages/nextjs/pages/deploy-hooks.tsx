import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ButtonSecondary from "~~/components/Button/ButtonSecondary";
import Input from "~~/components/InputDetails/Input";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { toast } from "react-hot-toast";

const Hooks = () => {
  const [showSecondBlock, setShowSecondBlock] = useState(false);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isTransactionConfirmed, setIsTransactionConfirmed] = useState(false);
  const [start, setStart] = useState(BigInt(0));
  const [end, setEnd] = useState(BigInt(100));
  const [confirmedName, setConfirmedName] = useState("");
  const [confirmedSymbol, setConfirmedSymbol] = useState("");

  const { data: counter, ...arg } = useScaffoldContractRead({
    contractName: "UniversalHookFactory",
    functionName: "getBulkPrecomputeHookAddresses",
    args: [start, end],
  });

  const { data: lastNonce = BigInt(0) } = useScaffoldContractRead({
    contractName: "UniversalHookFactory",
    functionName: "lastNonce",
  });

  useEffect(() => {
    setStart(lastNonce);
    setEnd(lastNonce + BigInt(100));
  }, [lastNonce]);

  const { writeAsync, data } = useScaffoldContractWrite({
    contractName: "UniversalHookFactory",
    functionName: "deploy",
    args: [BigInt(0), name, symbol],
    onBlockConfirmation: txnReceipt => {
      toast.success(`📦 Transaction blockHash ${txnReceipt.blockHash}`);
      setIsTransactionConfirmed(true);
      setConfirmedName(name);
      setConfirmedSymbol(symbol);
      setName("");
      setSymbol("");
    },
    blockConfirmations: 0,
    onError: error => {
      toast.error("error nonce");
    },
  });

  const handleDeployClick = async () => {
    if (writeAsync) {
      try {
        setShowSecondBlock(true);
        const currentAddress = counter.findIndex(address => address.toLowerCase().startsWith("0xff"));
        await writeAsync({
          args: [BigInt(currentAddress), name, symbol],
        });
        await writeTxn();
      } catch (e) {
        console.log(e);
      }
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
                  <Input onChange={setName} value={name} />
                </div>
                <div className="flex px-[20px] items-center justify-center bg-[#1E293B]">
                  <span className="max-w-[130px] w-full ">Symbol</span>
                  <Input onChange={setSymbol} value={symbol} />
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
                  <span>Hook name : {confirmedName} Universal Hook</span>
                  <span>Hook symbol : {confirmedSymbol} </span>
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
