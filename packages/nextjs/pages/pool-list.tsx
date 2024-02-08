import React from "react";
import { router } from "next/client";
import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import ButtonPrimary from "~~/components/Button/ButtonPrimary";
import Table from "~~/components/Table/Table";
import { dataPool } from "~~/domain/domain";
import { formatAddress } from "~~/pages/index";

const PoolList = () => {
  const columnItems = dataPool.map(item => [
    item.id,
    formatAddress(item.address),
    formatAddress(item.owner),
    `$${item.tvl}b`,
    <>
      <div className="flex gap-[10px]">
        <div className="flex bg-[#334155] py-[5px] px-[20px] rounded-full gap-[5px] items-center">
          <img src={"/currency.svg"} />
          <span>USDC</span>
        </div>
        <div className="flex bg-[#334155] py-[5px] px-[20px] rounded-full gap-[5px]">
          <img src={"/ether.svg"} className="pt-[5px]" />
          <span className="pt-[5px]">ETH</span>
        </div>
      </div>
    </>,
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
          <div className="flex w-full gap-[20px] py-[15px] justify-between">
            <span className="font-bold text-2xl">All pools</span>
            <ButtonPrimary destination={() => router.push("/initialize")} buttonText={"Initialize pool "} />
          </div>
          <Table
            headers={["PoolList id", "Hook address", "Hook owner", "TVL", "Token pair", ""]}
            columns={columnItems}
          />
        </div>
      </div>
    </>
  );
};

export default PoolList;
