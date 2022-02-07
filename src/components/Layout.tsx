import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar from './Navbar'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Head>
          <title>Portfolio in NextJS</title>
      </Head>
      <Navbar />
      <div className={'container py-4'}>{children}</div>
    </Fragment>
  )
}

export default Layout