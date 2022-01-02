import type { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import { keys } from '../jwtToken'

export const register = [
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    const isUnique = await User.findOne({ username })

    if(isUnique){
      return res
        .status(400)
        .json({
          message: 'Username already exists'
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const user = new User({
      username,
      password: hashPassword,
    }).save((err: any) => {
      if(err){
        return next(err)
      }
    })

    return res.json({
      message: 'Success! you created account'
    })
  }
]

export const login = [
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if(!user){
      return res
        .status(404)
        .json({
          message: 'Username not found'
        })
    }

    try{
      if(await bcrypt.compare(password, user.password)){
        const userObj = {
          _id: user._id,
          username: user.username,
        }
        const accessToken = jwt.sign(userObj, keys.SECRET_KEY)
        
        return res
          .cookie('JWT_TOKEN', accessToken, {
            sameSite: 'strict', 
            path: '/', 
            expires: new Date(new Date().getTime() + 1500000 * 1000),
            secure: true,
          })
          .json({
            message: 'Success! you logged to account'
          })
      }else{
        return res
          .status(404)
          .json({
            message: 'Invalid password'
          })
      }
    }catch(err){
      return res
        .status(404)
        .json({
          message: 'Invalid password'
        })
    }
  }
]

export const logout = [
  (req: Request, res: Response) => {    
    return res
      .clearCookie('JWT_TOKEN', { path: '/' })
      .json({
        message: 'Success! you logged out'
      })
  }
]