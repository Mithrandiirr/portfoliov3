import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/fonts.css'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../assets/fonts/roslindale.woff2' })

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={myFont.className} {...pageProps} />
}
