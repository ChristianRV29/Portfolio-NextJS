import type { NextPage } from 'next'

import HeaderCard from '~src/components/Header'
import Layout from '~src/components/Layout'
import Body from '~src/components/Body'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeaderCard uri={'/profile.jpeg'} />
      {/**Second section */}
      <Body />
    </Layout>
  )
}

export default Home
