import React, { Fragment } from 'react'

import { SkillProps } from '~src/@types/skill'
import { experiences } from '~src/constants/experience'
import { projects } from '~src/constants/projects'
import { skills } from '~src/constants/skills'
import Experience from './Experience'
import Skill from './Skill'

const Body = () => {
  return (
    <Fragment>
      <section className={'row py-3'}>
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
      </section>
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100 border-white bg-secondary">
                      <div className="overflow">
                        <img
                          src={`${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#!">Know More</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    {/* <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Body
