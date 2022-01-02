import React, {
  useState, 
  useEffect,
  useContext,
} from 'react'
import { 
  Link,
} from 'react-router-dom'
import { Images } from '../assets'
import { Button } from '../components'
import { MOBILE_WIDTH } from '../constants'
import {
  useWindowSize,
  useMeasure
} from '../hooks'
import { UserContext } from '../context' 
import axios from 'axios'

axios.defaults.withCredentials = true;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()
  const toggleMenu = (props: boolean) => setIsOpen(props)
  const { user } = useContext(UserContext)

  const logout = async () => {
    try{
      const res = await axios.post('http://localhost:8000/auth/logout')
      console.log(res)

      return window.location.reload()
    }catch(err){
      return window.location.reload()
    }
  }

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])
  
  return(
    <div 
      className="flex justify-between items-center relative"
      ref={myRef}
    >
      <div className="flex items-center">
        <img 
          src={Images.Logo} 
          alt="logo" 
        />
        <ul className="flex ml-8">
          <Link to='/'>
            <li className="cursor-pointer border-b hover:border-black transition-colors duration-500">Home</li>
          </Link>
        </ul>
      </div>
     {width > MOBILE_WIDTH ? (
        <div className="flex items-center">
          {user ? (
            <>
              <h2 className="mr-8">{user.username}</h2>
              <h2 
                className="cursor-pointer border-b hover:border-black transition-colors duration-500"
                onClick={logout}
              >Logout</h2>
            </>
          ) : (
            <>
              <Link to='/login'>
                <h2 className="cursor-pointer border-b hover:border-black transition-colors duration-500">Login</h2>
              </Link>
              <div className="ml-8">
                <Link to='/register'>
                  <Button>Create an Account</Button>
                </Link>
              </div>
            </>
          )}
        </div>
     ) : (
       <div>
        {isOpen ? (
          <div className="w-40 bg-main flex flex-col items-center absolute right-0 top-0">
            {user ? (
              <div className="relative">
                <div className="p-5">
                  <h2 className="mb-5">{user.username}</h2>
                  <h2 
                    className="cursor-pointer border-b border-transparent hover:border-black transition-colors duration-500"
                    onClick={logout}
                  >Logout</h2>
                </div>
                <img 
                  src={Images.Close} 
                  alt="close" 
                  className="absolute top-2 -right-3 cursor-pointer"
                  onClick={() => toggleMenu(false)}
                />
              </div>
            ) : (
              <div className="relative">
                <div className="p-5">
                  <Link to='/login'>
                    <h2 className="cursor-pointer border-b border-transparent hover:border-black transition-colors duration-500 mb-3">Login</h2>
                  </Link>
                  <Link to='/register'>
                    <h2 className="cursor-pointer border-b border-transparent hover:underline transition-colors duration-500">Create an Account</h2>
                  </Link>
                </div>
                <img 
                  src={Images.Close} 
                  alt="close" 
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => toggleMenu(false)}
                />
              </div>
            )}
          </div>
        ) : (
          <img 
            src={Images.HamburgerMenu} 
            alt="Hamburger Menu" 
            className="cursor-pointer"
            onClick={() => toggleMenu(true)}
          />
        )}
       </div>
     )}
    </div>
  )
}