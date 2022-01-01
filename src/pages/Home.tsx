import React from 'react'
import {
  Navbar,
  Popup,
} from '../components'

export const Home: React.FC = () => {
  return(
    <div className="px-24 py-10">
      <Navbar isLogged={true} />
      <Popup />
    </div>
  )
}