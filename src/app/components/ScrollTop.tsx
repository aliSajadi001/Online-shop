"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronsUp } from "lucide-react";

function ScrollTop() {
  let scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full h-auto flex items-center justify-center py-3 gap-2">
      <Button
        onClick={scrollTop}
        type="button"
        className=" py-1 bg-green-500 text-white md:text-sm text-xs font-medium w-full rounded-none  flex items-center gap-2"
      >
        <ChevronsUp className="animate-bounce" /> Back to top
        <ChevronsUp className="animate-bounce" />
      </Button>
    </div>
  );
}

export default ScrollTop;
