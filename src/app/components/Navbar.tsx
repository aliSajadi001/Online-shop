import React from "react";
import { ShoppingCart } from "lucide-react";
import { House } from "lucide-react";
import { LogIn } from "lucide-react";
import { LogOut } from "lucide-react";
import { ShoppingBasket } from "lucide-react";

function Navbar() {
  let loggin = true;
  return (
    <div className="flex justify-between items-center  text-white px-10 py-4 bg-white dark:bg-black">
      <div>
        <i className="text-green-500 font-medium dark:text-purple-800 ">
          <ShoppingCart />
        </i>
      </div>
      <div className="hidden md:flex items-center gap-2 w-[70%] ">
        <input
          className="outline-none border rounded-md w-full h-[30px] border-green-500 dark:border-purple-800 p-2 placeholder:text-green-500 dark:placeholder:text-purple-800"
          type="text"
          placeholder="Search"
        />
        <button className="bg-green-500 dark:bg-purple-800 text-white font-medium h-[30px] rounded-md p-1">
          Search
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <i className="text-green-500 font-medium dark:text-purple-800 cursor-pointer hover:scale-110 transition-transform duration-300">
          <House />
        </i>

        {loggin ? (
          <>
            <i className="text-green-500 font-medium dark:text-purple-800 cursor-pointer hover:scale-110 transition-transform duration-300">
              <LogOut />
            </i>
          </>
        ) : (
          <>
            <i className="text-green-500 font-medium dark:text-purple-800 cursor-pointer hover:scale-110 transition-transform duration-300">
              <LogIn />
            </i>
          </>
        )}

        <i className="text-green-500 font-medium dark:text-purple-800 cursor-pointer hover:scale-110 transition-transform duration-300 relative">
          <ShoppingBasket />
          <span className=" absolute  px-[6px] py-[2px] -top-2 -right-3 rounded-full text-white bg-green-500 text-xs dark:bg-purple-800 dark:text-white ">
            4
          </span>
        </i>
      </div>
    </div>
  );
}

export default Navbar;
