import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/index'
import mongoose from 'mongoose'

dotenv.config({ path: './.env' })

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router.user)

const PORT = 5000

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
mongoose.connect(process.env.CONNECTION_URL, () => console.log('Database connected'))

export default server