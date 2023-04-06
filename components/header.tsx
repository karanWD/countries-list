import React from "react";
import ThemeToggler from "@/components/themeToggler";
import Link from "next/link";


const Header = () =>{
  return(
      <header className="bg-white dark:bg-custom-navy  shadow-sm text-custom-dark dark:text-white relative z-10 px-4 lg:px-0">
        <div className=" h-[80px] container mx-auto flex items-center justify-between">
          <Link href={"/"} ><h1 className="text-base lg:text-xl font-bold">Where in the world</h1></Link>
          <ThemeToggler/>
        </div>
      </header>
  )
}

export default Header