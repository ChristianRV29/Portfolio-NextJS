import React, { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootswatch/dist/darkly/bootstrap.min.css'
import '~src/styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-sace=1.0'}
        />
        <link href={'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'} rel={'stylesheet'}></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
