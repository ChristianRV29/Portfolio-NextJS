import type { NextPage } from 'next'

import HeaderCard from '~components/Header'
import Layout from '~components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeaderCard uri={'/profile.jpeg'} />
      {/**Second section */}
      <div className={'row py-3'}>
        <div className={'col-md-4'}>
          <div className={'card bg-light text-center'}>
            <h2>Skills</h2>
          </div>
        </div>
        <div className={'col-md-8'}>
          <div className={'card bg-light text-center'}>
            <h2>Experience</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
