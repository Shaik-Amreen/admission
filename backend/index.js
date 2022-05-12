const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("./Database/db")
const path = require('path')
const { resourceLimits } = require("worker_threads")
const controls = require("./controller/registrations")

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "10000mb", extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
  next();
});

app.use('/register',controls.register)
app.use('/adminlogin',controls.adminlogin)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})




const host = '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => console.log("server listened"))
