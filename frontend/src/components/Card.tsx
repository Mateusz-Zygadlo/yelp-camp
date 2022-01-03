import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'

interface CardProps {
  title: string;
  description: string;
  image: string;
  _id: number;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image,
  _id,
}) => {
  return(
    <div className="AspectRatioCard border m-2">
      <div className="p-2 flex flex-col justify-between h-full">
        <img 
          src={image} 
          alt={image}
          className="rounded-lg break-words" 
        />
        <div>
          <h1 className="text-xl">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <Link to={`/places/${_id}`}>
          <Button reverse>View Campground</Button>
        </Link>
      </div>
    </div>
  )
}