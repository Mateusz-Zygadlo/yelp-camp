import express from 'express'
import {  
  allComments,
  createComment,
} from '../controllers/commentController'

export const router = express.Router()

router.get('/:id/place', allComments)
router.post('/:id/place', createComment)