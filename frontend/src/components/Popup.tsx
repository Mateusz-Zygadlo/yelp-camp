import React, { useContext } from 'react'
import { Button } from '../components'
import { Images } from '../assets'
import { Link } from 'react-router-dom'
import { UserContext } from '../context'

export const Popup: React.FC = () => {
  const { user } = useContext(UserContext)
  
  return(
    <div className="my-8 h-96 sm:h-80 flex items-center bg-main">
      <div className="ml-3 sm:ml-10 w-[25rem] p-3">
        <h1 className="text-4xl">Welcome to YelpCamp!</h1>
        <p className="my-3">View our hand-picked campgrounds from all over the world, or add your own.</p>
        <div className="flex flex-col sm:flex-row">
          <div className="flex mr-3 relative w-full mb-3 sm:mb-0 h-12">
            <img 
              src={Images.SearchIcon} 
              alt="Search" 
              className="absolute top-4 left-4"
            />
            <input 
              name="search" 
              type="text" 
              placeholder="Search for camps" 
              className="border indent-10 w-full"
            />
          </div>
          <Button noFull>Search</Button>
        </div>
        <Link to={user ? '/addCampground' : '/login'}>
          <p className="mt-3 cursor-pointer border-b hover:border-black transition-colors duration-500 w-64">Or add your own campground</p>
        </Link>
      </div>
    </div>
  )
}