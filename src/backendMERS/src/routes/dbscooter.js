const express = require("express");
const scooterdata = express.Router();
const cors = require("cors");
scooterdata.use(cors());

const Scooterdata = require("../models/DBscooter");

scooterdata.get("/api", function (req, res) {
    
  Scooterdata.find({}, function(err, data) {
      res.json(data);
      console.log(err);
        if (err){ 
        console.log(err); 
    }
  })

        
});

scooterdata.get("/api/:id", function (req, res) {
Scooterdata.findById({_id: req.params.id}, function(err, data){
  res.json(data);
  if(err){
    console.log(err)
  }
})

});

scooterdata.post("/api", function (req, res) {
  Scooterdata.create({
    teamId: req.body.teamId,
    districtId: req.body.districtId,
    currentPosition: {
      lat: req.body.lat,
      lng: req.body.lng,
    },
  }).then((dbscooter) => {
    res.json(dbscooter);
  });
});

module.exports = scooterdata;