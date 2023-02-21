"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';


interface NavItem {
  label: string;
  page: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Portfolio",
    page: "portfolio",
    href: "/",
  },
  {
    label: "About Us",
    page: "about",
    href: "/pages/about",
  },
  {
    label: "Contact Us",
    page: "contact",
    href: "/pages/contact",
  },
];


export default function Header() {
  const router = useRouter();

  return (
    <div className="w-full">
      <nav className="w-full flex fixed px-20 py-4 h-20 z-10 ">
        <div className="text-4xl w-3/4">
          <Link href="/"><h1 className="text-white font-bold">Irfan G.</h1>
          </Link>
        </div>
        <div className=" w-full flex justify-end ">
            <div className="text-[16px] text-[#222]">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link className="text-white px-[20px] font-semibold hover:bg-gray-50 hover:w-8 hover:py-4 hover:text-black" href={`${item.href}`} key={idx}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="">
              <button type="button" onClick={() => router.push('/pages/about')} className=" text-[#FDC010] ml-2 font-semibold text-1xl">LOGO GUIDE</button>
            </div>
        </div>
      </nav>
    </div>
  );
}
