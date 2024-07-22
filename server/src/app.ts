require('dotenv').config()
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import http from 'http'
// import user from './routes/auth.route'
const app = express()
const mongoUrl = process.env.MONGO_URL
const server = http.createServer(app)

if (!process.env.JWT_TOKEN) {
    console.error("FATAL ERROR : jwt private key not defined");
    process.exit(1)
}
mongoose.connect(mongoUrl || "")
    .then(() => console.log("Mongo db connected"))
    .catch((err: any) => console.log("Mongo db connection failed", err.message))

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
// app.use('/api/v1/vidly/user', user)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App listening to port ${port}`))