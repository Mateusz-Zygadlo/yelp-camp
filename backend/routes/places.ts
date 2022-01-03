import express from 'express'
import { 
  allPlaces,
  getPlace,
  createPlace
} from '../controllers/placeController'

export const router = express.Router()

router.get('/', allPlaces)
router.get('/:id', getPlace)
router.post('/', createPlace)