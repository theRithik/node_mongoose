const mongoose = require('mongoose')

const schema = mongoose.Schema

const ObjectId = schema.ObjectId

const cityDetails = {
    id:ObjectId,
    name:{type:String},
    city:{type:String},
    country:{type:String}
}
module.exports = mongoose.model('cityDetails', cityDetails, 'cityDetails')