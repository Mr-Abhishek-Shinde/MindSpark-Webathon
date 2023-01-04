const express = require("express")
const app = express()
const mongoose = require("mongoose");
const port = 8000
const cors = require("cors")
const bodyParser = require("body-parser");

const LocalUser = require("./models/user.local")

// MongoDB Connection
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/Webathon"

main()
    .then(() => console.log("Connected successfully to Webathon Database"))
    .catch(err => {
        console.log("Connected unsuccessful to Webathon Database")
        console.log(err)
    });

async function main() {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (request, response) => {
})

app.post("/api/login", (request, response) => {
    console.log(request.body)
    response.json({ status: "Ok" })
})

app.post("/api/register", async (request, response) => {
    const { name, email, password } = request.body
    const username = email

    const existingUser = await LocalUser.findOne({ username })
    if (!existingUser) {
        const user = new LocalUser({ name, email, username });
        const registeredUser = await LocalUser.register(user, password)
        response.json({ status: "Ok" })
    } else {
        response.json({ status: "Existing User" })
    }

})



app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})
