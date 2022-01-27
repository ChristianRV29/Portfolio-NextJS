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
        <title>My portfolio</title>
        <link rel={'stylesheet'} href={''} />
      </Head>
      <Navbar />
      <div className={''}>{children}</div>
    </Fragment>
  )
}

export default Layout
