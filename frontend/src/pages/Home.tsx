import React, { useState, useEffect } from 'react'
import {
  Popup,
  Card,
} from '../components'
import axios from 'axios'

axios.defaults.withCredentials = true

export const Home: React.FC = () => {
  const [places, setPlaces] = useState<any>(null)
  const getPlaces = async () => {
    const res = await axios.get('http://localhost:8000/places')
    if(res && res.data){
      setPlaces(res.data)
    }
  }

  useEffect(() => {
    getPlaces()
  }, [])

  return(
    <>
      <Popup />
      <div className="responsiveGrid h-full">
        {places && places.result ? (
          <>
            {places.result.map((place: any, index: number) => (
              <Card 
                key={index}
                title={place.title}
                description={place.description}
                image={place.image}
                _id={place._id}
              />
            ))}
          </>
        ) : <div>No places</div>}
      </div>
    </>
  )
}