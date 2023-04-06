import React from "react";
import ThemeToggler from "@/components/themeToggler";


const Header = () =>{
  return(
      <header className="bg-white dark:bg-custom-navy  shadow-sm text-custom-dark dark:text-white relative z-10">
        <div className="h-[80px] container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Where in the world</h1>
        <ThemeToggler/>
        </div>
      </header>
  )
}

export default Header