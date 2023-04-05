import React, {useContext} from "react";
import {ThemeContext} from "@/context/themeContextProvider";

const ThemeToggler = () =>{
  const {toggleTheme} = useContext(ThemeContext)
  return(<div onClick={toggleTheme}>Dark Mode</div>)
}

export default ThemeToggler