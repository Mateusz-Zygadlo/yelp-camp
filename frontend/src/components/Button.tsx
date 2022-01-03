import React from 'react'

interface ButtonProps { 
  reverse?: boolean;
  noFull?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ reverse, noFull, children }) => {
  return(
    <button className={`${reverse ? 'text-black border' : 'bg-black text-white'} ${noFull ? null : 'w-full mx-auto'} rounded-md font-bold px-4 py-3`}>
      {children}
    </button>
  )
}