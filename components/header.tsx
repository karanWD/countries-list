import React from "react";
import ThemeToggler from "@/components/themeToggler";


const Header = () =>{
  return(
      <header className="bg-white dark:bg-custom-navy py-5 border-b border-gray-200/60">
        <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-extrabold">Where in the world</h1>
        <ThemeToggler/>
        </div>
      </header>
  )
}

export default Header