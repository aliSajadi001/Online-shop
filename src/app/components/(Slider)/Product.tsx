import { products } from "@/app/utils/data";
import { Product } from "@/app/utils/typs";
import React from "react";
import ProductSlider from "./ProductSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function Product() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[110px]">
      {/***************************************New product****************************** */}
      <div className="w-full flex gap-2 items-center justify-center px-10 space-y-10">
        <div className="flex items-center flex-col">
          <p className="w-full flex items-start justify-start text-green-500 font-medium md:font-bold md:text-2xl">
            New Product
          </p>
          <Carousel>
            <CarouselContent className="w-[300px] md:w-[700px] lg:w-[700px] xl:w-[1200px] 2xl:w-[1300px]  ">
              {products?.map((product: Product) => (
                <div key={product.id} className="">
                  <CarouselItem>
                    <ProductSlider
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/**************************************** BestSellers****************************** */}
      <div className="w-full flex gap-2 items-center justify-center px-10 space-y-10">
        <div className="flex items-center flex-col">
          <p className="w-full flex items-start justify-start text-green-500 font-medium md:font-bold md:text-2xl">
            BestSellers
          </p>
          <Carousel>
            <CarouselContent className="w-[300px] md:w-[700px] lg:w-[700px] xl:w-[1200px] 2xl:w-[1300px]  ">
              {products?.map((product: Product) => (
                <div key={product.id} className="">
                  <CarouselItem>
                    <ProductSlider
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Product;
