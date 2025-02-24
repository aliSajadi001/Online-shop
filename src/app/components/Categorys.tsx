import React from "react";
import { Card, CardContent } from "@/components/ui/card";
let category = [
  { src: "/download.jpeg", name: "Degital" },
  {
    src: "/dress-up-gradient-icon-for-dark-theme-person-putting-on-jacket-man-getting-ready-to-go-to-work-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg",
    name: "Man",
  },
  {
    src: "/hatchback-gradient-icon-for-dark-theme-cheap-sports-car-auto-with-two-box-design-access-to-cargo-area-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg",
    name: "Car",
  },
  {
    src: "/heart-palpitations-gradient-icon-for-dark-theme-fast-beating-and-fluttering-heart-mental-disorders-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg",
    name: "Woman",
  },
  {
    src: "/images.jpeg",
    name: "Home",
  },
  {
    src: "/medical-stethoscope-isolated-with-black-background-medical-concept-stethoscope-black-background-with-space-text-health-concept-medical-conceptual_1391-769.avif",
    name: "Medicine",
  },
];

import Image from "next/image";
import Link from "next/link";
function Categorys() {
  return (
    <div className="px-4 flex flex-col items-center gap-5 text-green-500 font-bold md:text-2xl ">
      <p>Categorys</p>
      <div className="w-full flex items-center gap-5 flex-wrap justify-center">
        {category.map((cat) => {
          return (
            <Link
              href={`/shop?category=${cat?.name?.toLocaleLowerCase()}`}
              key={cat.name}
              className="w-[130px] h-[100px] relative group object-cover"
            >
              <Image
                src={cat.src}
                alt={cat.name}
                width={100}
                height={100}
                className="w-full h-full object-cover group-hover:rounded-lg duration-300 "
              />
              <p className="w-full h-full object-cover text-green-400 font-medium absolute inset-0 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center ">
                {cat.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categorys;
