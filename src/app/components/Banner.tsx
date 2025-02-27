"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Categorys from "./Categorys";

function Banner() {
  const initialTime = 10 * 24 * 60 * 60 * 1000; // 10 days
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return (
    <div className="w-full flex flex-col md:gap-8 gap-2 items-center ">
      <div className="w-full relative">
        <Image
          src="/644678047_1375410299_KS-Grocery-Delivery.gif"
          alt="dp"
          width={100}
          height={100}
          className="w-full h-[77vh] "
        />
        <Link
          href="/shop"
          className=" absolute bg-green-500 p-2 rounded-md text-white font-medium -bottom-5 border-2
          border-white  right-10"
        >
          Shop now
        </Link>
      </div>

      <p className="px-1 py-2 rounded-lg bg-green-500 text-red-600 font-bold text-xl md:text-md ">
        20% off on digital products {days}:{hours}:{minutes}:{seconds}
      </p>

      <Categorys />
    </div>
  );
}

export default Banner;
