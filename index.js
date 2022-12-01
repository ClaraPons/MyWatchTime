const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require("./models/index")
require("dotenv").config();


app.use(cors('*'))
app.use(express.json())
app.use(morgan('tiny'))

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
 