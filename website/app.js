/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//postData from the lesson 3, concept 6: Client side, Server side:

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },       
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }


  const getData = async function () {
    const request = await fetch("/all");
    try {
      const all = await request.json();   
      console.log("getData response: "+  all.temperature + "|| " +  all.date + "|| " +  all.userResponse);
    } catch (error) {
      console.log(error);
    }
  };
  postData("/weatherData", {temperature:123, date:new Date(), userResponse:"hello"})
    .then( () => getData())
