require('dotenv').config()
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import http from 'http'
import HandleSocket from './socket/socket'
import routes from './routes'
const app = express()
const mongoUrl = process.env.MONGO_URL
const server = http.createServer(app)
HandleSocket.InitiateSocketIo(server)
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
app.use('/api/chat', routes)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`App listening to port ${port}`))