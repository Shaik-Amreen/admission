const express = require("express")
var router = express.Router()
const Controls = require("../controller/registrations")

router.post('/stdregister',Controls.stdregister)
router.post('/verifyotp',Controls.verifyopt)
router.post('/stdregistersubmit',Controls.stdregistersubmit)
router.post('/getstudent',Controls.getstudent)
router.post('/adminlogin',Controls.adminlogin)
router.post('/createadmin',Controls.createadmin)

module.exports = router