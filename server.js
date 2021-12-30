// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/*Dependencies*/

const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 1995;
const server = app.listen(port, listening);

function listening() {
  console.log("Yay! The server is running!");
  console.log(`Running on localhost: ${port}`);
}

//Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.The POST route should anticipate receiving three pieces of data from the request body: temperature, date, user response. Make sure your POST route is setup to add each of these values with a key to projectData

// app.get('/all', function(req, res){res.send(projectData);});

app.get("/all", function(req, res) {
  console.log("Before /all" + projectData);
  res.send(projectData);
});

app.post("/weatherData", addWeather);

function addWeather(req, res) {
  console.log("Before /weatherData:  " + req.body.temperature);
  const newWeatherData = {
    temperature: req.body.temperature,
    date: req.body.date,
    userResponse: req.body.userResponse
  };
  projectData = newWeatherData;
  console.log("Before /weatherData:  " + projectData.temperature);
  res.send(projectData);
}
