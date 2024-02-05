import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice);

  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1768px] w-full justify-between border-t-2 border-t-[#334155] p-[10px]">
        <div className="flex items-center">
          <Link href="/token-list">
            <div className="flex gap-[10px] items-center">
              <span>Token list</span>
              <MdOutlineArrowOutward />
            </div>
          </Link>
        </div>
        <div className=" p-4 ">
          <SwitchTheme className="pointer-events-auto" />
        </div>
      </div>
    </div>
  );
};
