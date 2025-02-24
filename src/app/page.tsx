import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import Product from "./components/(Slider)/Product";

export default function Home() {
  return (
    <div className="h-[3000px]">
      {/***************************Baner************************ */}
      <div className="mx-auto">
        <Banner />
      </div>

      {/***************************New product************************ */}
      <div>
        <Product />
      </div>
    </div>
  );
}
