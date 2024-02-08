import React from "react";
import { router } from "next/client";
import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { MdOutlineCheckBox } from "react-icons/md";
import ButtonPrimary from "~~/components/Button/ButtonPrimary";
import PoolInfoTable from "~~/components/Table/PoolInfoTable";
import Table from "~~/components/Table/Table";
import { dataPool } from "~~/domain/domain";
import { formatAddress } from "~~/pages/index";

const PoolDetail = () => {
  const columnItems = dataPool.map(item => [
    formatAddress(item.address),
    <>
      <div className="flex items-center px-[10px]">{item.paid}</div>
    </>,

    <span> Swapped X token A for Y token B on pool {item.id}</span>,

    <>
      <div className="flex justify-end px-[20px]">
        <Link href="/pool-detail">
          <HiOutlineArrowTopRightOnSquare />
        </Link>
      </div>
    </>,
  ]);
  return (
    <>
      <div className=" flex justify-center">
        <div className="max-w-[1768px] w-full">
          <div className="flex w-full gap-[20px] py-[15px]">
            <div className="flex flex-col ">
              <span className="text-[#56748A]">All pools {">"} Pool id</span>
              <div className="flex items-center gap-[15px] font-bold">
                <div className="flex transition-margin-right py-[20px]">
                  <img src={"/b-logo.png"} />
                  <img src={"/ethereum-logo.png"} className="traslate-logo" />
                </div>
                <span className=" text-3xl">WBTC / ETH </span>
                <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                <span>Hook name </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-[20px] ">
            <span className="font-bold text-2xl"> Pool Details</span>
            <div className="flex gap-[10px]">
              <ButtonPrimary destination={() => router.push("/swap")} buttonText={"Swap"} />
              <ButtonPrimary destination={() => router.push("/add-liquidity")} buttonText={"Add liquidity"} />
            </div>
          </div>
          <div className="pb-[30px]">
            <PoolInfoTable />
          </div>

          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex justify-between">
              <span className="font-bold text-2xl"> Transaction history</span>
              <div className="text-[#FFE290] flex items-center cursor-pointer">
                <MdOutlineCheckBox />
                <span className="px-[5px]">Show my hooks</span>
              </div>
            </div>
            <Table headers={["Tx Hash", "Fee paid", "Description", ""]} columns={columnItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolDetail;
