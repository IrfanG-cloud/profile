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
      <nav className="w-full flex fixed drop-shadow-m px-20 py-4 h-20 z-10 ">
        <div className="text-4xl w-3/4">
          <Link href="/"><h1 className="">Irfan G.</h1>
          </Link>
        </div>
        <div className=" w-full flex justify-end ">
            <div className="text-[16px] text-[#222] ">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link className="color-white px-[20px] font-semibold" href={`${item.href}`} key={idx}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="">
            <button type="button" onClick={() => router.push('/pages/about')} className=" text-[#FDC010] px-4 font-semibold border-none text-1xl">LOGO GUIDE</button>
          </div>
        </div>
         
      </nav>
    </div>
  );
}
