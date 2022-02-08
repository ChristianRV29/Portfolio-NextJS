import type { NextPage } from 'next'

import HeaderCard from '~src/components/Header'
import Layout from '~src/components/Layout'
import { SkillProps } from '~src/@types/skill'
import { skills } from '~src/constants/skills'
import Skill from '~src/components/Skill'

import { experiences } from '~src/constants/experience'
import Experience from '~src/components/Experience'

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
              {(skills || []).map((skill: SkillProps, index: number) => (
                <Skill {...skill} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={'col-md-8'}>
          <div className={'card bg-muted'}>
            <h3 className={'text-center'}>Experience</h3>
            <ul>
              {(experiences || []).map((exp, index: number) => (
                <Experience {...exp} key={index}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
