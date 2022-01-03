import React from 'react'

interface CommentProps {
  nickname: string;
  date: string;
  description: string;
}

export const Comment: React.FC<CommentProps> = ({
  nickname,
  date,
  description
}) => {
  return(
    <div className="border-b pb-4 mt-3">
      <div className="flex justify-between">
        <h1 className="text-xl">{nickname}</h1>
        <h2>{date}</h2>
      </div>
      <p className="mt-3">{description}</p>
    </div>
  )
}