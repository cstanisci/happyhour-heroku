const mongoose = require('mongoose');

const happySchema = new mongoose.Schema({
    name: { type: String, required: true},
    days: String,
    hours: String,
    deals: String,
    website: String,
    yelp: String,
    img: String,
    location:{
        lat:Number,
        lng:Number
    },
    address:String});

const Happyhour = mongoose.model('Happy', happySchema);

module.exports = Happyhour;