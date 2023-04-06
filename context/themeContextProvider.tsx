import React, {createContext, FC, ReactElement, useEffect, useState} from "react";

export type Theme = "LIGHT" | "DARK"
export type context = {
  theme: Theme,
  toggleTheme: () => void
}
export const ThemeContext = createContext<context>({ theme:"LIGHT", toggleTheme:()=>{} })

const ThemeContextProvider:FC<{children:ReactElement}> = ({children}) => {
  const [theme, setTheme] = useState<Theme>("LIGHT")
  const toggleTheme = () => {
    if (theme === "LIGHT") {
      setTheme("DARK")
      localStorage.setItem("THEME", "DARK")
    } else if (theme === "DARK") {
      setTheme("LIGHT")
      localStorage.setItem("THEME", "LIGHT")
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("THEME")
    if (localTheme) {setTheme(localTheme as Theme)}
    else {setTheme("LIGHT")}
  }, [])

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  )
}

export default ThemeContextProvider