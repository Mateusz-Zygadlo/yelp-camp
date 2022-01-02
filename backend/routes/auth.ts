import express from 'express'
import { 
  register, 
  login,
  logout,
} from '../controllers/userController'

export const router = express.Router()

router.get('/', (req, res) => {
  return res.json({
    message: "auth section",
  })
})

router.post('/logout', logout)
router.post('/register', register)
router.post('/login', login)