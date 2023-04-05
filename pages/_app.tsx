import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import ThemeContextProvider from "@/context/themeContextProvider";
import Layout from "@/components/layouts/layout";

export default function App({Component, pageProps}: AppProps) {
  return (
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
  )
}
