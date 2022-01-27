import React, { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootswatch/dist/darkly/bootstrap.min.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-sace=1.0'}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
