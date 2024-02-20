import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { MdOutlineCheckBox } from "react-icons/md";
import ButtonPrimary from "~~/components/Button/ButtonPrimary";
import { MetaHeader } from "~~/components/MetaHeader";
import Table from "~~/components/Table/Table";
import { useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const formatAddress = (address: string) => {
  const formattedAddress = address && address.startsWith("0x") ? address : `0x${address || ""}`;
  return formattedAddress.slice(0, 8) + "..." + formattedAddress.slice(-13);
};
interface HookData {
  name: string;
}

const Home: NextPage = () => {
  const router = useRouter();

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
