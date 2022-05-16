const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("./database/database")
const path = require('path')
const routes = require("./routes/routers")

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "10000mb", extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
  next();
});

app.use("/",routes)

const host = '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => console.log("server listened"))
