const { response } = require("express");
const express = require("express");
const app = express();
const API_KEY = "1234567890"; 
var bmp, apiKey, temp, spo2, ecg

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.post("/data", (req, res) => {
    console.log(req.headers)
    console.log(req.body)
    apiKey = req.body.apiKey
    bmp = req.body.bmp
    temp = req.body.temp
    spo2 = req.body.spo2
    ecg = req.body.ecg
    //TODO: send thông  tin đến mobile app
    if (apiKey != API_KEY) {
      res.status(400).json('Unauthorized')
    } else res.json('Authorized');
})

app.get("/data", (req, res) => {
  //res.send(`<h1>Health Monitor</h1>`)
  if (apiKey != API_KEY) {
    res.send(`<h1>Unauthorized!</h1>`)
  } else {
    res.send(`<h1>BMP: ${bmp}, \nTemparature: ${temp} *C, SPO2: ${spo2} %, ECG: ${ecg} mV</h1>`);
  }
 })


app.listen(3000, function (request, response) {
  console.log("Server is running ... !");
})
