import React from 'react'

interface SkillProps {
  language: string
  progress: number
}

const Skill: React.FC<SkillProps> = props => {
  const { language, progress } = props
  return (
    <div>
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
