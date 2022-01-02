import React from 'react'

interface ButtonProps { 
  reverse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ reverse, children }) => {
  return(
    <button className={`${reverse ? 'text-black border' : 'bg-black text-white'} rounded-md font-bold px-4 py-3`}>
      {children}
    </button>
  )
}