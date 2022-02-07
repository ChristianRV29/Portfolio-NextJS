import type { NextPage } from 'next'

import HeaderCard from '~components/Header'
import Layout from '~components/Layout'
import Skill from '~components/Skill'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeaderCard uri={'/profile.jpeg'} />
      {/**Second section */}
      <div className={'row py-3'}>
        <div className={'col-md-4'}>
          <div className={'card bg-muted'}>
            <div className={'card-body'}>
              <h3 className={'text-center'}>Skills</h3>
              <Skill language={'Python'} progress={20} />
            </div>
          </div>
        </div>
        <div className={'col-md-8'}>
          <div className={'card bg-muted text-center'}>
            <h3>Experience</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
