import React from "react";
import { router } from "next/client";
import ButtonPrimary from "~~/components/Button/ButtonPrimary";
import DataTable from "~~/components/Table/DataTable";
import Table from "~~/components/Table/Table";
import { dataToken } from "~~/domain/domain";

const TokenList = () => {
  const columnItems = dataToken.map(item => [
    item.name,
    item.symbol,
    item.Token,
    <>
      <div className="flex justify-end px-[10px]">
        <ButtonPrimary destination={() => router.push("/")} buttonText={"Aprove"} />
      </div>
    </>,
    <>
      <div>
        <ButtonPrimary destination={() => router.push("/")} buttonText={"Transfer"} />
      </div>
    </>,
  ]);
  return (
    <>
      <div className=" flex justify-center">
        <div className="max-w-[1768px] w-full">
          <div className="flex w-full gap-[20px] py-[15px]">
            <span className="font-bold text-2xl">Token List</span>
          </div>
          <div className="flex gap-[50px]">
            <DataTable headers={["Token name", "Token symbol", "Token supply", "", ""]} columns={columnItems} />
            <div className="max-w-[438px] w-full flex flex-col bg-[#151F30] gap-[10px] max-h-[250px] rounded-lg">
              <span className="font-bold text-xl px-[30px] pt-[30px]">Router04</span>
              <div className="px-[30px]">
                <div className="flex gap-[10px]">
                  <span> imagen</span>
                  <span>0x2B7E4B....c79DC</span>
                </div>
                <div className="flex gap-[10px]">
                  <span>Balance : </span>
                  <span>0.000 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenList;
