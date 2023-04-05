import React, {createContext, useEffect, useState} from "react";

export type Theme = "LIGHT" | "DARK"
type context = {
  theme: Theme,
  toggleTheme: () => void
}
export const ThemeContext = createContext<context | null>(null)

const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState<Theme>("DARK")
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
    if (localTheme) {
      setTheme(localTheme as Theme)
    } else {
      setTheme("DARK")
    }
  }, [])

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  )
}

export default ThemeContextProvider