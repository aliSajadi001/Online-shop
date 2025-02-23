import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

function Banner() {
  return (
    <div className="mx-auto max-w-screen max-h-screen">
      <Carousel>
        <CarouselContent>
          {/************************Shoes banner************************ */}
          <CarouselItem className="flex items-center md:gap-20 gap-2 flex-col md:flex-row">
            <Image
              src="/pexels-adrian-dorobantu-989175-2300334.jpg"
              width={300}
              height={300}
              className=" w-full md:w-[70%] max-h-[91vh] "
              alt="dp"
            />
            <div>
              <p className="md:text-7xl text-lg font-extrabold text-red-600 rotate-12 ">
                %20 off <br />
                <p className="md:text-3xl text-lg animate-pulse ">4 days</p>
              </p>
              <div className="bg-green-500 p-2 font-medium rounded-md text-white flex gap-2 w-fit">
                <Link href="/shop?category=shoes">Go shop </Link>
                <MoveRight />
              </div>
            </div>
          </CarouselItem>
          {/************************Clothes banner************************ */}
          <CarouselItem className="flex items-center md:gap-20 gap-2 flex-col md:flex-row">
            <Image
              src="/pexels-bohlemedia-1884581.jpg"
              width={300}
              height={300}
              className="w-full md:w-[70%] max-h-[91vh] "
              alt="dp"
            />{" "}
            <div>
              <p className="md:text-7xl text-2xl font-extrabold text-red-600 rotate-12 ">
                %25 off
                <br />
                <p className="md:text-3xl text-xl animate-pulse ">9 days</p>
              </p>
              <br />
              <div className="bg-green-500 p-2 font-medium rounded-md text-white flex gap-2 w-fit">
                <Link href="/shop?category=clothes">Go shop </Link>
                <MoveRight className="md:text-lg text-sm"/>
              </div>
            </div>
          </CarouselItem>{" "}
          {/************************Lptop banner************************ */}
          <CarouselItem className="relative">
            <Image
              src="/pexels-buro-millennial-636760-1438081.jpg"
              width={300}
              height={300}
              className="w-full  max-h-[91vh] "
              alt="dp"
            />
            <div className="bg-green-500 p-2 font-medium rounded-md text-white flex gap-2 w-fit absolute bottom-7 left-14">
              <Link href="/shop?category=laptop">Go shop </Link>
              <MoveRight />
            </div>
          </CarouselItem>
          {/************************Mobile banner************************ */}
          <CarouselItem className="relative">
            <Image
              src="/pexels-jessbaileydesign-788946.jpg"
              width={300}
              height={300}
              className="w-full max-h-[91vh] "
              alt="dp"
            />
            <div className="bg-green-500 p-2 font-medium rounded-md text-white flex gap-2 w-fit absolute bottom-7 left-14">
              <Link href="/shop?category=mobile">Go shop </Link>
              <MoveRight />
            </div>
          </CarouselItem>
          {/************************Laptop banner************************ */}
          <CarouselItem className="relative">
            <Image
              src="/pexels-natri-129208.jpg"
              width={300}
              height={300}
              className="w-full max-h-[91vh] "
              alt="dp"
            />
            <div className="bg-green-500 p-2 font-medium rounded-md text-white flex gap-2 w-fit absolute bottom-7 left-14">
              <Link href="/shop?category=laptop">Go shop </Link>
              <MoveRight />
            </div>
          </CarouselItem>
        </CarouselContent>

      </Carousel>
    </div>
  );
}

export default Banner;
