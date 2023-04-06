const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cityDetails = require('./model/citId')

mongoose.connect('mongodb://127.0.0.1:27017/cityDetails')

app.get('/',(req, res)=>{
    res.send('this from the express- mongoose')

})

app.post('/addDetails',(req,response)=>{

    cityDetails.create(req.body,(err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send('data added successfully')
        }
    })
})

//read end point
app.get('/getDetails',(req,response)=>{

    cityDetails.find((err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send(result)
        }
    })
})

//update end point
app.put('/updateDetails',(req,response)=>{

    cityDetails.findOneAndUpdate({_id:req.body._id},{$set:{city:req.body.city}},(err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send('data added successfully')
        }
    })
})

app.listen(3000, ()=>{
    console.log('running in port number 3000 ')
})
