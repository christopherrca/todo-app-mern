import express from "express"
import cors from "cors"
import "dotenv/config.js"
import mongoose from "mongoose"
import router from './routes/routes.js'


// App Config
const app = express()
const port = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.get('/', (request, response) => {
    response.send("this is a TODO APP 😶‍🌫️")
})


// Entry Point
app.use('/api/v1/tasks', router)



mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected Success 🫡"))
.catch((err) => console.error("MongoDB error ❌", err))


app.listen(port, ()=> console.log("Listening on Port " + port + "😍"))