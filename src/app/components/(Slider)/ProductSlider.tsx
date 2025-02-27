import React from "react";
import { ProductSlider } from "../../utils/typs";

import Image from "next/image";
function ProductSlider({ name, image, price }: ProductSlider) {
  return (
    <div className="w-full flex gap-2 items-center justify-center">
      
            <div className="md:w-[200px] md:[200px] w-[100px] h-[100px] relative">
              <Image
                src={image}
                alt={name}
                width={100}
                quality={100}
                layout="responsive"
                height={100}
                className="w-full h-full"
              />
              <div className="absolute bg-green-500 bg-opacity-20 mr-1 rounded-r-full p-1 backdrop-blur-sm left-0 bottom-0 w-[80%]">
                <p className="text-xs text-green-900 font-medium ">{name}</p>
                <p className="text-xs text-green-900 font-medium ">${price}</p>
              </div>
            </div>
       
    </div>
  );
}

export default ProductSlider;
