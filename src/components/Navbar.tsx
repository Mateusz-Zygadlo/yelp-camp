import React, {
  useState, 
  useEffect,
} from 'react'
import { Images } from '../assets'
import { Button } from '../components'
import { MOBILE_WIDTH } from '../constants'
import {
  useWindowSize,
  useMeasure
} from '../hooks'

interface NavbarProps {
  isLogged: boolean,
}

export const Navbar: React.FC<NavbarProps> = ({ isLogged }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const USERNAME = 'Username'
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()
  const toggleMenu = (props: boolean) => setIsOpen(props)

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
          className="cursor-pointer"
        />
        <ul className="flex ml-8">
          <li className="cursor-pointer border-b hover:border-black transition-colors duration-500">Home</li>
        </ul>
      </div>
     {width > MOBILE_WIDTH ? (
        <div className="flex items-center">
          {isLogged ? (
            <>
              <h2 className="mr-8">{USERNAME}</h2>
              <h2 className="cursor-pointer border-b hover:border-black transition-colors duration-500">Logout</h2>
            </>
          ) : (
            <>
              <h2 className="cursor-pointer border-b hover:border-black transition-colors duration-500">Login</h2>
              <div className="ml-8">
                <Button>Create an Account</Button>
              </div>
            </>
          )}
        </div>
     ) : (
       <div>
        {isOpen ? (
          <div className="w-40 bg-main flex flex-col items-center absolute right-0 top-0">
            {isLogged ? (
              <div className="relative">
                <div className="p-5">
                  <h2 className="mb-5">{USERNAME}</h2>
                  <h2 className="cursor-pointer border-b border-transparent hover:border-black transition-colors duration-500">Logout</h2>
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
                  <h2 className="cursor-pointer border-b border-transparent hover:border-black transition-colors duration-500 mb-3">Login</h2>
                  <h2 className="cursor-pointer border-b border-transparent hover:underline transition-colors duration-500">Create an Account</h2>
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