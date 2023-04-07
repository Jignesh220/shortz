import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Varela_Round } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const varela = Varela_Round({
  subsets: ['latin'],
  variable: '--font-varela_round',
  style:'normal',
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${varela.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
