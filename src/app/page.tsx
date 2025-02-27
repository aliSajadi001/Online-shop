import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import Product from "./components/(Slider)/Product";
import Welcome from "./components/Welcome";
import Digital from "./components/(offs)/Digital";

export default function Home() {
  return (
    <div className="">
      {/***************************Baner************************************************ */}
      <div className="mx-auto">
        <Banner />
      </div>
      {/*************************************Welcome text*********************************/}
      <div className="my-10">
        <Welcome />
      </div>
      {/***************************New product********************************************/}
      <div>
        <Product />
      </div>
      {/***************************Digital product****************************************/}
      <div className="my-20">
        <Digital />
      </div>
    </div>
  );
}
