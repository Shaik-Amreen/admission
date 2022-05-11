const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    studentphoto: { type: "string" },
    branchapplied: { type: "string" },
    firstname: { type: "string" },
    middlename: { type: "string" },
    second: { type: "string" },
    rollno: { type: "string" },
    hallticket: { type: "string", required: true },
    rank: { type: "string" },
    checklist: { type: Array },
    dob: { type: "string" },
    gender: { type: "string" },
    fathername: { type: "string" },
    mothername: { type: "string" },
    aadharno: { type: "string" },
    presentaddress: { type: Array },
    permanentaddress: { type: Array },
    fathermobile: { type: "string" },
    mothermobile: { type: "string" },
    parentmail: { type: "string" },
    studentmail: { type: "string" },
    studentmobile: { type: "string" },
    studentblood: { type: "string" },
    nationality: { type: "string" },
    religion: { type: "string" },
    caste: { type: "string" },
    category: { type: "string" },
    ssc: { type: Array },
    inter: { type: Array },
    ug: { type: Array },
    pg: { type: Array },
    other: { type: Array },
    entranceexam: { type: Array },
    fatheroccupation: { type: String },
    fatherannualincome: { type: String },
    studentsignature: { type: String },
    fathersignature: { type: "string" },


})

const studentdata = mongoose.model("studentdata", Schema)

module.exports = studentdata
