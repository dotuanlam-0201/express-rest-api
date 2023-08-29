const express = require("express");
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
var bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const authorRoute = require("./routes/author")
const bookRoute = require("./routes/book")

dotenv.config()
//CONNECT DB
mongoose.connect(process.env.MONGODB_URL, {
    dbName: "BOOKSTOREMVC",
})


app.use('/author', authorRoute)
app.use('/book', bookRoute)



app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
app.use(morgan("common"))
app.use(express.json())


app.listen(8000, () => { console.log("Server is running"); })
