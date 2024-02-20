import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { MdOutlineCheckBox } from "react-icons/md";
import ButtonPrimary from "~~/components/Button/ButtonPrimary";
import { MetaHeader } from "~~/components/MetaHeader";
import Table from "~~/components/Table/Table";
import { useDeployedContractInfo, useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useContractRead, useContractReads, useNetwork } from "wagmi";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

export const formatAddress = (address: string) => {
  const formattedAddress = address && address.startsWith("0x") ? address : `0x${address || ""}`;
  return formattedAddress.slice(0, 8) + "..." + formattedAddress.slice(-13);
};
interface HookData {
  name: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { chain } = useNetwork();
  const configuredNetwork = chain ?? getTargetNetwork();

  const { data: hookCount = BigInt(0) } = useScaffoldContractRead({
    contractName: "UniversalHookFactory",
    functionName: "hookCount",
  });

  console.log(hookCount);

  const { data: deployedHooks } = useScaffoldContractRead({
    contractName: "UniversalHookFactory",
    functionName: "deployedHooks",
    args: [hookCount],
  });
  const { data: getHookInfo } = useScaffoldContractRead({
    contractName: "UniversalHookFactory",
    functionName: "getHookInfo",
    args: [BigInt(0)],
  });

  const { data: deployedContractData } = useDeployedContractInfo("UniversalHookFactory", configuredNetwork.id);

  const { data: hooks } = useContractReads({
    contracts: [
      {
        address: deployedContractData?.address,
        abi: deployedContractData?.abi,
        functionName: "getHookInfo",
        args: [BigInt(0)],
      },
      {
        address: deployedContractData?.address,
        abi: deployedContractData?.abi,
        functionName: "getHookInfo",
        args: [BigInt(hookCount)],
      },
    ],
  });

  console.log({ hooks });
  // const columns = deployedHooks?.map((hook, index) => [hook]);

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
            <ButtonPrimary destination={() => router.push("/deploy-hooks")} buttonText={"Deploy hook"} />
          </div>
          <Table headers={["Hook name", "Hook symbol", "Hook address", "Hook owner"]} columns={[]} />
        </div>
      </div>
    </>
  );
};

export default Home;
