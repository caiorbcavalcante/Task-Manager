const express = require('express')
const cors = require('cors')
const app = express();
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()


// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


const port = process.env.PORT || 3000
const mongoURI = process.env.MONGO_URI


const start = async () => {
  try {
    await connectDB(mongoURI)
    console.log("✅ MongoDB connected successfully!")
    app.listen(port, () =>
      console.log(`Server running on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()

