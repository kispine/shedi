import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import '../styles/main.scss'

type NextPageWithLayout = NextPage & {
  layout: React.ComponentClass
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout || React.Fragment

  return (
    <>
      <Head>
        <title>Welcome to webclient!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
