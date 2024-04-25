if (process.env.NODE_ENV !== "production") {
    require("dotenv").config(); 
}

const express = require('express')
const app = express()
const cors = require('cors')
const userRoute = require('./routes/user_route')
const activityRoute = require('./routes/activity_route')
const projectRoute = require('./routes/project_route')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/users", userRoute)
app.use("/projects", projectRoute)
app.use("/activities", activityRoute)


const PORT = process?.env?.PORT || 3000

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
  })
