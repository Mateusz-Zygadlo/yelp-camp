import React from 'react'

export const Comment: React.FC = () => {
  return(
    <div className="border-b pb-4 mt-3">
      <div className="flex justify-between">
        <h1 className="text-xl">Adam Johnson</h1>
        <h2>13h ago</h2>
      </div>
      <p className="mt-3">Honestly one of the best experiences ever, took us a while to figure out how to get there  but it was amazing!</p>
    </div>
  )
}