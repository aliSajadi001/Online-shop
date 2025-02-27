import Image from "next/image";
import Link from "next/link";
import React from "react";

function Digital() {
  return (
    <div className="w-full flex items-center justify-center  h-full ">
      <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4 md:w-[70%] rounded-lg border border-green-500">
        <Image
          src="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/what-is-a-digital-footprint-2.jpg"
          width={100}
          height={100}
          quality={100}
          layout="responsive"
          alt="digital"
          className="w-[50%] rounded-l-lg h-full object-cover"
        />
        <p className=" md:text-xl  text-green-700 font-medium text-xs w-[70%] text-center">
          <span className="text-red-500 text-sm md:text-2xl">25% </span>off
          digital proucts until february 30th <br />
          <Link
            href="/shop"
            className="bg-green-500 rounded-md py-1 px-3 text-xs md:text-sm text-white"
          >
            Shop now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Digital;
