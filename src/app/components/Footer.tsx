import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Send } from "lucide-react";
import { Facebook } from "lucide-react";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center border-t  py-4 md:py-10 gap-10">
      <div className="flex items-center gap-1 justify-center">
        <Button className="p-2 bg-green-500 text-white font-medium text-xs md:text-sm">
          Subscribe
        </Button>
        <input
          type="text"
          className=" outline-none border border-green-500 px-2 py-1 md:w-full rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex md:flex-row flex-col  items-start justify-center md:gap-10 hap-2">
        <div className="flex flex-col  items-center justify-start text-xs md:text-sm">
          <div className="flex items-center gap-2 md:gap-4 ">
            <Link href="*">
              <Instagram className="size-[20px] text-green-500" />
            </Link>
            <Link href="*">
              <Twitter className="size-[20px] text-green-500" />
            </Link>
            <Link href="*">
              <Mail className="size-[20px] text-green-500" />
            </Link>
            <Link href="*">
              <Send className="size-[20px] text-green-500" />
            </Link>
            <Link href="*">
              <Facebook className="size-[20px] text-green-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
