import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className="flex-1 text-center">
      {isActive && <div className={`w-full bg-[#FFE290] h-[5px] rounded-b-lg`}></div>}
      <div className="py-[10px]">
        <Link
          href={href}
          passHref
          className={`hover:text-[#FFE290] ${isActive ? "text-[#FFE290]" : ""} py-1.5 px-3 text-lg  gap-2 `}
        >
          {children}
        </Link>
      </div>
    </li>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const navLinks = (
    <>
      <NavLink href="/">Hook Factory</NavLink>
      <NavLink href="/pool-list">Pool</NavLink>
      <NavLink href="/history">History</NavLink>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar min-h-0 flex-shrink-0 justify-between z-20  px-0 sm:px-2 bg-[#0F172A] py-[30px] ">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex flex-col">
            <span className="font-bold leading-tight text-[32px]">Captain Hook</span>
          </div>
        </Link>
      </div>
      <ul className="hidden bg-[#151F30] lg:flex lg:flex-nowrap max-w-[412px] w-full justify-around  rounded-md">
        {navLinks}
      </ul>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        {/*<FaucetButton />*/}
      </div>
    </div>
  );
};
