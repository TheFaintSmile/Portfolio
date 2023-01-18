import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '@elements'

const meta = {
  title: "Alvaro's Portoflio",
  description:
    'Alvaro Austin personal website porfolio for showcasing experience and projects.',
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
