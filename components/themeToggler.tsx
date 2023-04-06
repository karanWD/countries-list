import React, {useContext} from "react";
import {context, ThemeContext} from "@/context/themeContextProvider";
import MoonSVG from "@/svgs/moonSVG";
import SunSVG from "@/svgs/sunSVG";

const ThemeToggler = () =>{
  const {toggleTheme,theme}:context = useContext(ThemeContext)
  return(
      <div onClick={toggleTheme} className="flex items-center gap-2 cursor-pointer dark:hover:bg-custom-dark-navy hover:bg-custom-secondary py-3 px-6 rounded-md">
        <span className="w-4 h-4 relative inline-block">{theme==="DARK" ? <SunSVG/> : <MoonSVG/>}</span>
        {theme==="DARK" ? "Light Mode" : "Dark Mode"}
      </div>
  )
}

export default ThemeToggler