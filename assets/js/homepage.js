// get city search term and use .value to store its value
function myFunction () {
  var searchTerm = document.querySelector("#searchTerm").value; 
  event.preventDefault();
  console.log(searchTerm); 

  // Make a `fetch` request concatenating that search term to the query URL for current weather
  fetch (
    'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
  )  
  
  // Converts the response to JSON
  .then(function(response) {
    console.log(response);
    return response.json();
  })  

  .then(function(response) {
    console.log(response.data);
  
  // use jQuery to display current weather using elements from the response
    $("#city-name").html(response.name);
    $("#temp").html("Temp: " + response.main.temp + " °F");
    $("#speed").html("Wind: " + response.wind.speed + " mph");
    $("#humidity").html("Humidity: " + response.main.humidity + "%");
  
        // $("#index").html("UV Index: " + response.current.uvi);                         CAN'T FIND UV INDEX IN THE CURRENT API

    // Make a `fetch` request concatenating that search term to the query URL for weather forecast
    fetch (
      'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
    )  
  
    // Converts the response to JSON
    .then(function(response) {
      console.log(response);
      return response.json();
    })  

    .then(function(response) {
      console.log(response.data);
      
      

      /* adding variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity */



    })

  

  })  

}
  



