/* Global Variables */

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "c336cc1b4bc149e2a2a250056871f723";
const zipCode = "94112";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//Event listener to actually get stuff done + update the UI using then to chain:

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zipData =  document.getElementById('zip').value;
  const feelings =  document.getElementById('feelings').value;
    postData("/weatherData", {
    temperature: '',
    date: new Date(),
    userResponse: "It feels nice"
  }).then(() => updateUI());
}
//getData and postData from the lesson 3, concept 6: Client side, Server side & "putting it all together - exercise":

const postData = async (url = "", data = {}) => {
    console.log(data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };

  const getData = async function() {
    const request = await fetch("/all");
    try {
      const all = await request.json();
      console.log(
        "getData response: " +
          all.temperature +
          "|| " +
          all.date +
          "|| " +
          all.userResponse
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  const getDataOpenWeather = async (apiUrl, apiKey, zipCode) => {
    const request = await fetch(apiUrl + apiKey + zipCode);
    try {
      const allData = await request.json();
      console.log(allData);
      return allData;
    } catch (error) {
      console.log("error", error);
    }
  };

  //update UI - Lesson 4- concept 10
  
  const updateUI = async () => {
    const request = await fetch("/all");
    try {
      const allData = await request.json();
      document.getElementById("date").innerHTML = allData.date;
      document.getElementById("temp").innerHTML = allData.temperature;
      document.getElementById("content").innerHTML = allData.userResponse;
    } catch (error) {
      console.log("error", error);
    }
  };
