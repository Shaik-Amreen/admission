const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
  mail: { type: "string", required: true, index: { unique: true, dropDups: true }, },
  password: { type: "string" },
  role: { type: "string", required: true },
  createdby: { type: "string" }
})
const admin = mongoose.model("admin", Schema)

module.exports = admin