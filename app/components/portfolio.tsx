import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-1/2 transition duration-300 delay-150 hover:delay-300">
          <Link
            href="#"
            className="w-1/2"
          >
            <Image
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden"
              src="/bg-2.jpg"
              height={400}
              width={900}
              alt="image"
            />
          </Link>
        </div>
        <div className="w-1/2 transition duration-300 delay-150 hover:delay-30">
          <Link href="#">
            <Image  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden" src="/bg-3.jpg" height={400} width={900} alt="image" />
          </Link>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 transition duration-300 delay-150 hover:delay-30">
          <Link href="#">
            <Image  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden" src="/bg-6.jpg" height={400} width={900} alt="image" />
          </Link>
        </div>
        <div className="w-1/2 transition duration-300 delay-150 hover:delay-30">
          <Link href="#">
            <Image  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden" src="/bg-5.jpg" height={400} width={900} alt="image" />
          </Link>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 transition duration-300 delay-150 hover:delay-30">
          <Link href="#">
            <Image  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden" src="/bg-8.jpg" height={400} width={900} alt="image" />
          </Link>
        </div>
        <div className="w-1/2 transition duration-300 delay-150 hover:delay-30">
          <Link href="#">
            <Image  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden" src="/bg-9.jpg" height={400} width={900} alt="image" />
          </Link>
        </div>
      </div>
      
    </div>
  );
}
