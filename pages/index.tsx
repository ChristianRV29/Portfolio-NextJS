import type { NextPage } from 'next'

import HeaderCard from '~components/Header'
import Layout from '~components/Layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <HeaderCard uri={'/profile.jpeg'} />
    </Layout>
  )
}

export default Home
