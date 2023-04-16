import '@/styles/globals.css'
import Context from "@/context/context"
import Layout from '@/components/layout'
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Context>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </SessionProvider>

  )
}
