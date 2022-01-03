import React, { 
  useState, 
  useEffect,
  useContext
} from 'react'
import { 
  Button,
  Comment,
} from '../components'
import { 
  useParams,
  Link
} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context'

export const Detail: React.FC = () => {
  const [place, setPlace] = useState<any>(null)
  const [comments, setComments] = useState<any>(null)
  const { user } = useContext(UserContext)
  const { id } = useParams()
  const getPlace = async () => {
    const res = await axios.get(`http://localhost:8000/places/${id}`)
    if(res && res.data){
      setPlace(res.data)
    }
  }
  const getComments = async () => {
    if(!id) return
    const res = await axios.get(`http://localhost:8000/comments/${id}/place`)
    if(res && res.data){
      setComments(res.data)
    }
  }

  useEffect(() => {
    getPlace()
    getComments()
  }, [])

  useEffect(() => {
    if(id){
      getComments()
    }
  }, [id])

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
              {comments && comments.result && comments.result.length ? (
                <>
                  {comments.result.map((comment: any, index: number) => (
                    <Comment 
                      key={index}
                      nickname={comment.nickname}
                      date={comment.date}
                      description={comment.description}
                    />
                  ))}
                </>
              ) : comments && comments.result && comments.result.length == 0 ?
                <div>Comments not found</div> : <div>Loading...</div>}
              <div className="mt-5 w-full flex lg:justify-end">
                <Link to={user ? `/places/${id}/comment` : '/login'}>
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