import React from 'react';

import Image from 'next/image';

interface CardProps {
  name: string
  description: string
  image: string
}

const Card: React.FC<CardProps> = props => {
  const { name, description, image, } = props
  return (
    <div className="col-md-4 p-2">
      <div className="card h-100 border-white bg-secondary">
        <div className="overflow">
        <Image src={image} alt={'image-profile'} className={'img-fluid'} width={411} height={300}/>
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <p>{description}</p>
          <a href="#!">Know More</a>
        </div>
      </div>
    </div>
  )
}

export default Card
