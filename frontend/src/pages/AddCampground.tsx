import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import { useForm } from '../hooks'
import axios from 'axios'

axios.defaults.withCredentials = true;

export const AddCampground: React.FC = () => {
  const user = useContext(UserContext)
  const history = useNavigate()
  const { values, handleChange } = useForm({ 
    name: '', 
    price: 100, 
    image: '', 
    description: '' 
  })
  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await axios.post('http://localhost:8000/places', {
      owner: user.user._id,
      name: values.name,
      price: values.price,
      image: values.image,
      description: values.description
    })
    
    return history('/')
  }
  
  return(
    <div className="mt-10 w-full flex flex-col items-center">
      <div>
        <h1 className="text-4xl pr-14">Add New Campground</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label 
              htmlFor="name"
              className="mt-5 mb-2"
            >Campground Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Seven Sisters Waterfall"
              className="inputStyle"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label 
              htmlFor="price"
              className="mt-5 mb-2"
            >Price</label>
            <input
              id="price"
              type="number"
              name="price"
              placeholder="$149"
              className="inputStyle"
              value={values.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label 
              htmlFor="image"
              className="mt-5 mb-2"
            >Image URL</label>
            <input
              id="image"
              type="text"
              name="image"
              placeholder="https://www.youtube.com/"
              className="inputStyle"
              value={values.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label 
              htmlFor="description"
              className="mt-5 mb-2"
            >Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres."
              className="inputStyle h-40 px-3"
              value={values.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-5">
            <input 
              className="bg-black text-white rounded-md font-bold px-4 py-3"
              value="Add Campground"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}