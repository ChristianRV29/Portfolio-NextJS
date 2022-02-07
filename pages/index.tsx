import type { NextPage } from 'next'

import HeaderCard from '~src/components/Header'
import Layout from '~src/components/Layout'

import { SkillProps } from '~src/@types/skill'
import { skills } from '~src/constants/skills'
import Skill from '~src/components/Skill'

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
              {(skills || []).map((skill: SkillProps, index: number) => (
                <Skill {...skill} key={index} />
              ))}
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
