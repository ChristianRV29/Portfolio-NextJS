import React from 'react'
import { ExperienceProps } from '~src/@types/experience';


const Experience: React.FC<ExperienceProps> = props => {
    const { company, range, description } = props;
  return (
    <li>
        <h4>{company}</h4>
        <h6>{range}</h6>
        <p>{description}</p>
    </li>
  )
}

export default Experience
