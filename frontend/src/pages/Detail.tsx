import React, { useState, useEffect } from 'react'
import { Images } from '../assets'
import { 
  Button,
  Comment,
} from '../components'
import { 
  useParams,
  Link
} from 'react-router-dom'
import axios from 'axios'

export const Detail: React.FC = () => {
  const [place, setPlace] = useState<any>(null)
  const { id } = useParams()
  const getPlace = async () => {
    const res = await axios.get(`http://localhost:8000/places/${id}`)
    if(res && res.data){
      setPlace(res.data)
    }
  }

  useEffect(() => {
    getPlace()
  }, [])

  return(
    <>
      {place && place.result ? (
        <div className="flex flex-col-reverse lg:flex-row my-5 pb-5 w-full">
          <img 
            src={place.result.image} 
            alt={place.result.image}
            className="border p-10 mr-5 lg:h-64 w-auto lg:w-96 mt-5 lg:mt-0 break-words"
          />
          <div>
            <div className="p-10 border w-auto mb-5">
              <img 
                src={place.result.image} 
                alt={place.result.image} 
                className="w-full lg:w-[25rem] xl:w-[35rem] break-words mx-auto"
              />
              <div className="mt-5">
                <div className="flex justify-between mb-3 items-center">
                  <h1 className="text-3xl break-words">{place.result.name}</h1>
                  <h2 className="font-bold break-words">$${place.result.price}/night</h2>
                </div>
                <p className="text-sm break-words">{place.result.description}</p>
              </div>
            </div>
            <div className="px-10 py-7 border">
              <Comment />
              <div className="mt-5 w-full flex lg:justify-end">
                <Link to={`/places/${id}/comment`}>
                  <Button>Leave a Review</Button>
                </Link>
              </div> 
            </div>
          </div>
        </div>
      ) : <div className="text-4xl my-20 w-full flex justify-center items-center">Place not found</div>}
    </>
  )
}