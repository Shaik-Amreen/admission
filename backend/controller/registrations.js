const studentdata = require("../models/studentdata")
const admin = require("../models/admin")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWTSECRET = "mits"
var randomstring = require("randomstring")
const nodemailer = require("nodemailer")

const encodeBuffer = (buffer) => buffer.toString("base64")
const encodeString = (string) => encodeBuffer(Buffer.from(string))
const encodeData = (data) => encodeString(JSON.stringify(data))
const encrypt = (data) => {
    if (Buffer.isBuffer(data)) return encodeBuffer(data)
    if (typeof data === "string") return encodeString(data)
    return encodeData(data)
}


stdregister = async (req, res) => {
    let data1 = await studentdata.findOne({ "hallticket": req.body.hallticket }).lean();
    let otp = randomstring.generate(6)
    req.body.otp = otp
    if (!data1) {

        let mailDetails = {
            from: "Admission Team",
            to: req.body.otpmail,
            subject: `otp verification to register for MITS`,
            html: `Your register otp is ${req.body.otp}`
        }
        mail(mailDetails)
        studentdata.create(req.body, (err) => {
            if (!err) {
                res.send({ message: "success" })
            }
        })
    }

    else {
        if (data1.gender == '') {
            let mailDetails = {
                from: "Admission Team",
                to: req.body.otpmail,
                subject: `otp verification to register for MITS`,
                html: `Your register otp is ${req.body.otp}`
            }
            mail(mailDetails)
            studentdata.updateOne({ "hallticket": req.body.hallticket }, { $set: req.body }, (err) => {
                if (!err) {
                    res.send({ message: "success" })
                }
            })
        }
        else {
            res.send({ message: "studentexist" })
        }
    }
}

verifyopt = async (req, res) => {
    data1 = await studentdata.findOne({ "hallticket": req.body.hallticket }).lean();
    if (data1 && data1.otp == req.body.otp) {
        res.send({ message: "success" })
    }
    else {
        res.send({ message: "error" })
    }

}

stdregistersubmit = async (req, res) => {
    data1 = await studentdata.findOne({ "hallticket": req.body.hallticket }).lean();
    if (data1) {
        let mailDetails = {
            from: "Admission Team",
            to: [req.body.otpmail],
            subject: `Successfully Registered`,
            html: `You have successfully registered for MITS`
        }
        mail(mailDetails)
        studentdata.updateOne({ "hallticket": req.body.hallticket }, { $set: req.body }, (err) => {
            if (!err) {
                res.send({ message: "success" })
            }
        })
    }
}

mail = (mailDetails) => {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail.com",
        auth: {
            user: "arikya.hak@gmail.com",
            pass: "arikya@123",
        },
        secureConnection: true,
        tls: {
            rejectUnauthorized: false,
            secureProtocol: "TLSv1_method",
        },
    })
    mailTransporter.sendMail(mailDetails, (err7, data) => {
        if (err7) {
            console.log(err7, "Error")
        }
        else {
            console.log("mail sent")
        }
    }
    )
}

getstudent = async (req, res) => {
    data2 = await studentdata.find({ hallticket: req.body.hallticket }).lean();
    res.send({ data: data2 })
}

getadmin = async(req,res)=>{
    data =await admin.findOne({mail:req.body.mail}).lean();
    res.send({data:data.role})
}

// poststudents = (req, res) => {
//     studentdata.create(req.body, (err) => {
//         (!err) && res.send({ message: "success" })
//     })
// }

adminlogin = async (req, res) => {
    console.log(req.body);
    data1 = await admin.findOne({ "mail": req.body.mail }).lean();
    const tokenHashed = encrypt(jwt.sign({ subject: req.body.mail }, JWTSECRET));
        (!data1) ? res.send({ message: "Invalid Mail" }) :
        (
            ((bcryptjs.compareSync(req.body.password, data1.password)) ?
                res.send({ 'token': tokenHashed, mail: req.body.mail, role: data1.role }) : res.send({ message: "Invalid Password" }))
        );
}

createadmin = async (req, res) => {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    const tokenHashed = encrypt(jwt.sign({ subject: req.body.mail }, JWTSECRET))
    data1 = await admin.findOne({ "mail": req.body.mail }).lean();
    if (!data1) {
        admin.create(req.body, (err, data) => {
            if (data) {
                res.send({ message: "success" })
            }
        })
    }
    else{
        res.send({message:"User Exist"})
    }
}

module.exports = { createadmin, adminlogin, getstudent, stdregistersubmit, verifyopt, stdregister,getadmin }