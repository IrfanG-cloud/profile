import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <div className="w-full bg-black px-48 py-8">
      <div className="w-full flex ">
        <div className="w-1/4 py-4">
          <h2 className="text-1xl font-semibold text-gray-500">Irfan G. Graphics Design</h2>
          <p className="text-1xl text-gray-600 mt-4">irfanghyann@gmail.com</p>
        </div>
        <div className="w-1/4 py-4">
          <h1 className="text-gray-500 pb-4">sitemap</h1>
          <div className="flex flex-col">
            <Link href="#" className="text-1xl text-gray-600">
              ABOUT
            </Link>
            <Link href="#" className="text-1xl text-gray-600">
              CONTACT
            </Link>
            <Link href="#" className="text-gray-600 text-1xl">
              COURSE
            </Link>
            <Link href="#" className="text-gray-600 text-1xl">
              CREATE THE RIPPLE
            </Link>
            <Link href="#" className="text-gray-600 text-1xl">
              DIGITAL DOWNLOADS
            </Link>
            <Link href="#" className="text-gray-600 text-1xl">
              PORTFOLIO
            </Link>
          </div>
        </div>
        <div className="w-1/4 py-4">
          <h1 className="text-gray-500 pb-4">social media</h1>
          <div className="text-gray-900 hover:text-gray-400 flex flex-col">
            <div className="text-gray-600 hover:text-red-700 font-semibold mb-4">
              <Link href="#">Youtube</Link>
            </div>
            <div className="text-gray-600 hover:text-blue-700 font-semibold mb-4">
              <Link href="#">Facebook</Link>
            </div>
            <div className="text-gray-600 hover:text-blue-500 font-semibold mb-4">
              <Link href="#">Linkedin</Link>
            </div>
            <div className="text-gray-600 hover:text-purple-700 font-semibold mb-4">
              <Link href="#">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="w-1/4 py-4">
        <label >
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">Email</span>
        <input type="email" name="email" className="mt-1 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="emailhere@example.com" />
        </label>
        <div>
           <Link type="submit" href="/" className="text-center mt-[20px] h-[50px] w-full font-semibold rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">SUBSCRIBE</Link>
        </div>
      </div>
      </div>
      <div className="w-full pt-4">
      <p className="text-gray-600 text-center">© 2023 Irfan G. – All rights reserved.</p>
      </div>
    </div>
  );
}
