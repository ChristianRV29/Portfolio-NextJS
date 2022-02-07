import React from 'react'

import { SkillProps } from 'src/@types/skill'

const Skill: React.FC<SkillProps> = props => {
  const { language, progress } = props
  return (
    <div className={'py-2'}>
      <h5>{language}</h5>
      <div className={'progress'}>
        <div
          className={'progress-bar'}
          role={'progressbar'}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default Skill
