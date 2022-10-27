const express = require("express")
const bodyparser = require("body-parser") 
const user = require("./user")
const cors = require("cors")


const PORT = process.env.PORT || 8000

app = express()
app.use(bodyparser.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("Welcome to my app")
})

app.get("/user", (req,res) => {
    res.send(JSON.stringify(user))
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    console.log(`Ctrl + C to cancel`)
})