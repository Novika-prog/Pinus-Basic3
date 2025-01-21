const express = require("express")
const bodyParser = require("body-parser")
const path = require('path');
const app = express()

const port = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
  });

app.post("/login", (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    if (username == "admin" && password == "123") { //AND(&&) maka username dan password harus sesuai agar "Login Success" atau bisa menggunakan OR(||)
        res.sendFile(path.join(__dirname, "dashboard.html"))
    } else {
        res.sendFile(path.join(__dirname, "failed.html"))
    }
})

app.listen(port, () => {
    console.log("api live")
})