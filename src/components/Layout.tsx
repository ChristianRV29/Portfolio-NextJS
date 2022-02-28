/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {

  const router = useRouter();

  useEffect(() => {
    const handleRouter = (url: string) => console.log(url)

    router.events.on('routeChangeStart', handleRouter)
    return () => {
      router.events.off('routeChangeStart', handleRouter)
    }

  }, [])

  return (
    <Fragment>
      <Head>
          <title>Portfolio in NextJS</title>
      </Head>
      <Navbar />
      <div className={'container py-4'}>{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Layout
