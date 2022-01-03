import mongoose from 'mongoose'

const Schema = mongoose.Schema
const PlaceSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Place = mongoose.model('Place', PlaceSchema)
export default Place