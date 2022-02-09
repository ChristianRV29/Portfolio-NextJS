import React from 'react'

import { SkillProps } from '~src/@types/skill'
import { experiences } from '~src/constants/experience'
import { skills } from '~src/constants/skills'
import Experience from './Experience'
import Skill from './Skill'

const Body = () => {
  return (
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
        <article className={'card bg-muted'}>
          <h3 className={'text-center'}>Experience</h3>
          <ul>
            {(experiences || []).map((exp, index: number) => (
              <Experience {...exp} key={index} />
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}

export default Body
