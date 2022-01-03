require('dotenv').config()

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import { router as authRoutes } from './routes/auth'
import { router as placesRoutes } from './routes/places'
import { router as commentsRoutes } from './routes/comments' 

const port = process.env.PORT

const mongoDb: any = process.env.MONGO_URL
mongoose.connect(mongoDb)
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error"))

const app = express()

app.use(cookieParser())
app.use(bodyParser())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
}))

app.use('/auth', authRoutes)
app.use('/places', placesRoutes)
app.use('/comments', commentsRoutes)

app.listen(port, () => console.log('api works'))