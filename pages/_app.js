import '@/styles/globals.css'
import Context from "@/context/context"
import Layout from '@/components/layout'
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Context>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </SessionProvider>

  )
}
