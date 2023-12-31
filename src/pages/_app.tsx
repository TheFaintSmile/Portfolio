import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer, Navbar } from '@elements'

const meta = {
  title: "Alvaro's Portfolio",
  description:
    'Alvaro Austin personal website portfolio for showcasing experience and projects.',
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Navbar />
      <main className="w-full min-h-[calc(100vh)] flex flex-col items-center">
        <div className="max-w-7xl px-16 w-full">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  )
}
