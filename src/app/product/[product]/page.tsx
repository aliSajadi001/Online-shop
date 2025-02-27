import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Product 1",
};
let comments = [
  {
    name: "John Doe",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

function page({ params }: { params: { product: string } }) {
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        {/**********************************Image product************************************ */}

        <div className="md:w-[40%] w-[80%] h-full ">
          <Image
            src="https://www.freeiconspng.com/thumbs/laptop-png/toshiba-laptop-png-11.png"
            alt="product"
            width={300}
            height={300}
            className="w-[20%] h-[40%] object-cover"
            quality={100}
            layout="responsive"
          />
        </div>
        {/**********************************Information product************************************ */}

        <div className="flex flex-col items-start gap-3 text-green-500 border-l px-3 md:py-10 py-5">
          <p className="text-xs md:text-2xl font-bold">Product 1</p>
          <p className="text-xs md:text-xl font-bold">Price: $38713</p>
          <p className="text-xs md:text-base font-medium ">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, voluptatum.
          </p>
          <p className="text-xs md:text-base font-medium ">
            Category: category 1
          </p>
          <p className="text-xs md:text-base font-medium ">Quantity: 10</p>
          <p className="text-xs md:text-base font-medium ">Rating: 4.5</p>
          <p className="text-xs md:text-base font-medium ">NumReviews: 10</p>
          <button className="md:px-10 px-5 py-1 rounded-md bg-green-500 md:font-bold font-medium text-white hover:bg-green-800">
            Add to cart
          </button>
        </div>
      </div>
      {/**********************************Comments************************************ */}
      <div className="flex flex-col items-start justify-start w-full md:mt-10 mt-5 md:px-8 px-3">
        <p className="w-full flex items-start justify-start md:text-xl text-sm text-green-500 font-bold">
          Comments
        </p>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start p-3 w-[90%] border-b border-green-500 break-words md:w-[50%]"
          >
            <p className="w-full text-start md:text-sm text-xs font-medium">
              {comment.name}
            </p>
            <p className="w-full break-words text-start md:text-sm text-xs font-medium">
              {comment.comment}
            </p>
            <p className="w-full text-start md:text-sm text-xs font-medium">
              {comment.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
