var buttonElt = document.querySelector('#search-btn');

var APIKey = "572862b5623017184deb426aa65b7d48";
var city;
var latitude;
var longitude;
var APIname;
var weatherQueryURL;
var dashboardElt = document.getElementById("main-dashboard");

/* Fetch location data
 * Uses geocoding API
 * (https://openweathermap.org/api/geocoding-api)
 */
city = "Los Angeles"; // for testing
var geocodeQueryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;

async function buttonClickHandler(event) {
    event.preventDefault();
    
    await fetch(geocodeQueryURL).then(async function (response) {
        await response.json().then(function (data) {
            APIname = data[0].name;
            latitude = data[0].lat;
            longitude = data[0].lon;
        });
    });
    
    weatherQueryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&units=imperial";
    
    await fetch(weatherQueryURL).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            // Store pertinent results into local storage
            var cityName = data.name;
            var currentTemp = data.main.temp;
            var currentWind = data.wind.speed;
            var currentHumidity = data.main.humidity;
            var returnObject = {
                "city": cityName,
                "temperature": currentTemp,
                "wind": currentWind,
                "humidity": currentHumidity
            };
            var JSONResults = JSON.stringify(returnObject);
            localStorage.setItem(cityName, JSONResults);

            // put them on the screen
            var currentConditionsElt = document.createElement("section");
            var cityNameElt = document.createElement("h1");
            var temperatureElt = document.createElement("p");
            var windElt = document.createElement("p");
            var humidityElt = document.createElement("p");

            currentConditionsElt.classList.add("p-1");
            currentConditionsElt.classList.add("border");
            currentConditionsElt.classList.add("border-black");

            cityNameElt.textContent = cityName + " (Now)";
            cityNameElt.classList.add("text-2xl");
            cityNameElt.classList.add("font-bold");

            temperatureElt.textContent = currentTemp + " °F";
            windElt.textContent = currentWind + " MPH";
            humidityElt.textContent = currentHumidity + "%";
            currentConditionsElt.append(cityNameElt);
            currentConditionsElt.append(temperatureElt);
            currentConditionsElt.append(windElt);
            currentConditionsElt.append(humidityElt);
            dashboardElt.append(currentConditionsElt);

            // add five-day forecast
        });
    });
};

buttonElt.addEventListener('click', buttonClickHandler);
