const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbscooterSchema = new Schema({
  deleted: false,  
  route: [
    {
      lat: Number,
      lng: Number,
      date: Date,
    },
  ],
  created:{
      $date: Date
  },
  teamId:String,
  districtId: String,
  currentPosition: {
    lat: Number,
    lng: Number,
    date: Date,
    direction: Number,
  },
});
  

module.exports = mongoose.model("scooterdata", dbscooterSchema);