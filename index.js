const Express = require('express')
const multer = require('multer')
const upload=multer({dest:'upload'})
const express = require('express');
const app = Express();
const User=require('./modal/user');
const mongoose = require('./Config/db');
const db = mongoose.connection;

db.once('open', function() {
  console.log("Database Connected Successfully");
});


app.use(express.json());

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './upload')
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
  },
})

const upload1 = multer({ storage: Storage })
app.post('/api/upload', upload1.single("photo"), (req, res) => {
  console.log('file==============>', req.file)
  console.log('body=============>', req.body)
  if(req.file){
    res.send('Image uploaded')
  }
  const user=new User(req.body);
  user.save().then((res=>{
   console.log("success======>",res)
  })).catch((error)=>{
      console.log(error.messag)
  })
  
})

// app.get('/getall',(req,res)=>{
// var data=db.collection('users').find();
// data.forEach((doc,error)=>{
//     console.log("doc============>",doc)
//     for(var key in doc)
//     {
//         console.log("value=============>",doc[key])
//     }
//     res.send({message:'get data successfully'})
// }).catch((error)=>{
//     res.send({message:error.message})
// })
// })

app.listen(3002, () => {
  console.log('App running on http://localhost:3002')

})

// /*---------------------------postman se body main input main file ko select karna hai then image upload koi then send karni hai request *