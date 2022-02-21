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
      {/** Projects section  */}
      <div className={'row py-2'}>
        <div className={"col-md-12"}>
          <div className={"card card-body bg-primary"}>
            <div className={"row"}>
              <div className={'col-md-12'}>
                  <h1 className={'text-center text-light'}>Portfolio</h1>
              </div>
              <div className={'col-md-4'}>
                <div className={'card bg-secondary'}>
                  <img src={'https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI='} alt="project-image.png" />
                  <div className="card-body">
                    <h3>Title</h3>
                    <p>Description</p>
                    <a href={'#'}>Know more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
