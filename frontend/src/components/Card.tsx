import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'

interface CardProps {
  title: string;
  shortDescription: string;
  img: string;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  shortDescription, 
  img 
}) => {
  return(
    <div className="AspectRatioCard border m-2">
      <div className="p-2 flex flex-col justify-between h-full">
        <img 
          src={img} 
          alt='Mount Ulap'
          className="rounded-lg" 
        />
        <div>
          <h1 className="text-xl">{title}</h1>
          <p className="text-sm">{shortDescription}</p>
        </div>
        <Button reverse>
          <Link to='/detail'>View Campground</Link>
        </Button>
      </div>
    </div>
  )
}