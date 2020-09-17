const express = require("express");
const scooterdata = express.Router();
const cors = require("cors");
const fs = require('fs');
const multer = require('multer');


scooterdata.use(cors());

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

const excelToJson = require('convert-excel-to-json');

global.__basedir = __dirname;

const Scooterdata = require("../models/DBscooter");

//get api
scooterdata.get("/api", function (req, res) {
    
  Scooterdata.find({}, function(err, data) {
      res.json(data);
      console.log(err);
        if (err){ 
        console.log(err); 
    }
  })

        
});
// get by id each data
scooterdata.get("/api/:id", function (req, res) {
Scooterdata.findById({_id: req.params.id}, function(err, data){
  res.json(data);
  if(err){
    console.log(err)
  }
})

});
// post with excel files


// -> Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
  }
});

const upload = multer({ storage: storage });
// -> Express Upload RestAPIs
scooterdata.post('/api/uploadfile', upload.single("uploadfile"), (req, res) => {
  importExcelData2MongoDB(__basedir + '/uploads/' + req.file.filename);
  res.json({
    'msg': 'File uploaded/import successfully!', 'file': req.file
  });
  console.log(req.file);
});

// -> Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath) {
  // -> Read Excel File to Json Data
   const excelData = excelToJson({
    sourceFile: filePath,
    sheets: [
      {
        // Excel Sheet Name
        name: 'data',

        // Header Row -> be skipped and will not be present at our result object.
        header: {
          rows: 1
        },

        // Mapping columns to keys
        columnToKey: {
          A: 'color',
          B: 'mark',
          C: 'batery',
          D: 'boughtDate',
          E: 'charged',
          F: 'timeCharged',
          G: 'latPosition',
          H: 'lngPostion'
        }
      }]
  });
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("scooter");
    dbo
      .collection("scooterdatas")
      .insertMany(excelData.data, (err, res) => {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        /**
          Number of documents inserted: 5
      */
        db.close();

      });
  });
  fs.unlinkSync(filePath);
}
 module.exports = scooterdata;