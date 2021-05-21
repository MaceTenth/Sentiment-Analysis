const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const mockAPIResponse = require("./mockAPI.js");

// Start up an instance of app
const app = express();

// Cors allows the browser and server to communicate without any security interruptions
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));


// API addres
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";

//The purpose of this line is to prevent the display of my private 
//API key and not to allow access to it The key itself is in the 
//.env file that is not uploaded and needs to be created along with the key

const apiKey = process.env.API_KEY;

let userInput = []; 

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
 
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// Here a request is made to the API and the request is built from the base address URL, 
// the link that the user gives and the API key

app.post("/api", async function (req, res) {
  userInput = req.body.url;
  console.log(`You entered: ${userInput}`);
  const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;

  const response = await fetch(apiURL);
  const cloudData = await response.json();

  res.send(cloudData);
});



app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
