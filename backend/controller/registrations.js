const studentdata = require("../models/studentdata")
const admin = require("../models/admin")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWTSECRET = "mits"

const encodeBuffer = (buffer) => buffer.toString("base64")
const encodeString = (string) => encodeBuffer(Buffer.from(string))
const encodeData = (data) => encodeString(JSON.stringify(data))
const encrypt = (data) => {
    if (Buffer.isBuffer(data)) return encodeBuffer(data)
    if (typeof data === "string") return encodeString(data)
    return encodeData(data)
}

register = (req, res) => {
    data1 = await studentdata.findOne({ "hallticket": req.body.hallticket }).lean();
    if (!data1) {
        res.send({ message: "Invalid Hallticket" })
    }
    else {
        studentdata.updateOne({ "hallticket": req.body.hallticket }, { $set: req.body }, (err) => {
            if (!err) {
                res.send({ message: "Successfully saved" })
            }
        })
    }
}

getstudents = (req, res) => {
    data2 = await studentdata.find({ "hallticket": req.body.hallticket, }).lean();
    res.send({ data: data2 })
}

poststudents = (req, res) => {
    studentdata.create( req.body,(err) => {
        (!err)&&res.send({message:"success"})}
}

adminlogin = (req, res) => {
    data1 = await admin.findOne({ "mail": req.body.mail }).lean();
    const tokenHashed = encrypt(jwt.sign({ subject: req.body.mail }, JWTSECRET))
        (!data1 || err1) ? res.send({ message: "Invalid User" }) :
        (
            ((bcryptjs.compareSync(req.body.password, data1.password)) ?
                res.send({ 'token': tokenHashed, mail: req.body.mail, role: data1.role }) : res.send({ message: "Invalid Password" }))
        );
}

module.exports = { register }