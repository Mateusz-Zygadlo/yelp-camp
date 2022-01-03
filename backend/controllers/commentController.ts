import type { Request, Response, NextFunction } from 'express'
import Comment from '../models/comment'

export const allComments = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await Comment.find({place: id})

  if(!result){
    return res.sendStatus(404)
  }

  return res.json({
    result
  })
}

export const createComment = [
  (req: Request, res: Response, next: NextFunction) => {
    const { owner, nickname, description, place } = req.body

    try{
      const comment = new Comment({
        owner,
        nickname,
        description,
        place,
        date: new Date()
      }).save((err: any) => {
        if(err){
          return res.sendStatus(404)
        }
  
        return res.json({
          message: 'Success! You have successfully created a new comment'
        })
      })
    }catch(err: any){
      return res.sendStatus(404)
    }
  }
]