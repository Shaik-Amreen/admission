const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://placement:placement@cluster0.i5cpa.mongodb.net/college_admissions?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, useUnifiedTopology: true, 
    autoIndex: true, useCreateIndex: true
  }).then((result) => {
    console.log('Mongodb connection')
  }).catch((err) => {
    console.log('error while connecting Mongodb' + err)
  })
