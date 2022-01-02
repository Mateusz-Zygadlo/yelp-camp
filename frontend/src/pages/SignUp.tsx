import React, {
  useState,
  useEffect,
} from 'react'
import { 
  useWindowSize,
  useMeasure,
  useForm,
} from '../hooks'
import {
  Images
} from '../assets'
import {
  Link,
  useNavigate,
} from 'react-router-dom'
import axios from 'axios'

axios.defaults.withCredentials = true;

export const SignUp: React.FC = () => {
  const [error, setError] = useState<null | string>(null)
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()
  const { values, handleChange } = useForm({
    username: '',
    password: '',
  })
  const history = useNavigate()

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      const res = await axios.post('http://localhost:8000/auth/register', {
        username: values.username,
        password: values.password
      })
      setError(null)

      return history('/login')
    }catch(err){
      setError('Username already exists')
    }
  }

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])
  
  return(
    <div 
      className="w-screen h-full lg:flex overflow-x-hidden"
      ref={myRef}
    >
      <div className="px-10 md:px-16 lg:px-24 pt-8 flex flex-col justify-start lg:w-[60rem] h-screen">
        <div className="flex justify-between items-center">
          <img
            src={Images.Logo}
            alt='Logo'
          />
          <Link to='/'>
            <p className="border-b-2 hover:border-red-300 cursor-pointer transition-colors duration-500">Back to campground</p>
          </Link>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl mb-5">Start exploring  camps from all around the world.</h1>
          {error && <h3 className="text-xl text-red-500">{error}</h3>}
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label 
                htmlFor="username"
                className="mt-5 mb-2"
              >Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="example"
                className="inputStyle w-96"
                value={values.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label 
                htmlFor="password"
                className="mt-5 mb-2"
              >Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="inputStyle w-96"
                value={values.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-5">
              <input 
                className="bg-black text-white rounded-md font-bold px-4 py-3"
                value="Create an account"
                type="submit"
              />
            </div>
          </form>
          <Link to="/login">
            <p className="border-b-2 mt-5 w-56 hover:border-red-300 cursor-pointer transition-colors duration-500">Already a user? Sign in</p>
          </Link>
        </div>
      </div>
      <div className="lg:w-[50rem] lg:h-screen flex justify-center items-center bg-main lg:justify-end w-screen">
        <div className="w-full px-6 sm:px-10 lg:w-[20rem] mx-auto py-5">
          <h1 className="text-2xl">"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."</h1>
          <div className="mt-5 flex">
            <img 
              src={Images.UserTestimonial}
              alt="User Testimonial"
            />
            <div className="ml-3">
              <h1 className="text-sm">May Andrews</h1>
              <p className="text-sm">Professional Hiker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}