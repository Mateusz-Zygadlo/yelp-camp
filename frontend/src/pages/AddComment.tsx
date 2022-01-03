import React, { useContext } from 'react'
import { useForm } from '../hooks'
import { 
  useParams,
  useNavigate, 
} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context'

axios.defaults.withCredentials = true

export const AddComment: React.FC = () => {
  const { values, handleChange } = useForm({ comment: '' })
  const history = useNavigate()
  const user = useContext(UserContext)
  const { id } = useParams()
  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await axios.post(`http://localhost:8000/comments/${id}/place`, {
      owner: user.user._id,
      nickname: user.user.username,
      description: values.comment,
      place: id,
    })

    return history('/')
  }
  
  return(
    <div className="mt-10 w-full flex flex-col items-center">
      <div>
        <h1 className="text-4xl pr-14">Add New Comment</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label 
              htmlFor="comment"
              className="mt-5 mb-2"
            >Description</label>
            <textarea
              id="comment"
              name="comment"
              placeholder="This was probably the best camp i've visited this part year, definitely recommend visiting ant time soon."
              className="inputStyle h-40 px-3"
              value={values.comment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-5">
            <input 
              className="bg-black text-white rounded-md font-bold px-4 py-3"
              value="Post Comment"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}