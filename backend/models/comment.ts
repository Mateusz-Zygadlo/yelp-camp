import mongoose from 'mongoose'

const Schema = mongoose.Schema
const CommentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  description: {
    type: String,
    required: true
  },
  place: {
    type: Schema.Types.ObjectId,
    required: true,
  }
})

const Comment = mongoose.model('Comment', CommentSchema)
export default Comment