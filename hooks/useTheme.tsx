import React, {useContext} from "react";
import {ThemeContext} from "@/context/themeContextProvider";


export default function useTheme(){
  const {theme} = useContext(ThemeContext)
  const res = theme==="DARK" ? "dark" : "light"
  return res
}