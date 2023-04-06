import React from "react";
import Header from "@/components/header";
import useTheme from "@/hooks/useTheme";


const Layout = ({children}) => {
  const theme = useTheme()
  return (
      <section className={theme}>
        <Header/>
        <main className="bg-custom-secondary dark:bg-custom-dark-navy text-custom-dark dark:text-white min-h-[calc(100vh-80px)]">
          {children}
        </main>
      </section>
  )
}

export default Layout