import React from 'react'

export const Button: React.FC = ({ children }) => {
  return(
    <button className="bg-black rounded-md text-white font-bold px-4 py-3">
      {children}
    </button>
  )
}