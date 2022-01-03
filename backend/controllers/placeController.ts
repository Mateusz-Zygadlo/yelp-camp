import type { Request, Response, NextFunction } from 'express'
import Place from '../models/place'

export const allPlaces = async (req: Request, res: Response, next: NextFunction) => {
  const result = await Place.find()

  if(!result){
    return res.sendStatus(404)
  }

  return res.json({
    result,
  })
} 

export const getPlace = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const result = await Place.findOne({ _id: id })

  if(!result){
    return res.sendStatus(404)
  }

  return res.json({
    result,
  })
}

export const createPlace = [
  async (req: Request, res: Response, next: NextFunction) => {
    const { owner, name, price, image, description } = req.body

    try{
      const place = new Place({
        owner,
        name,
        price,
        image,
        description,
      }).save((err: any) => {
        if(err){
          return res.sendStatus(404)
        }

        return res.json({
          message: 'Success! You have successfully created a new place',
        })
      })
    }catch(err){
      return res.sendStatus(404)
    }
  }
]