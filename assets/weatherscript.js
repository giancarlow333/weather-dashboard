var buttonElt = document.querySelector('#search-btn');

var APIKey = "572862b5623017184deb426aa65b7d48";
var city;
var latitude;
var longitude;
var APIname;
var weatherQueryURL;

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
    
    weatherQueryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;
    
    await fetch(weatherQueryURL).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            // Store pertinent results into local storage
        });
    });
};

buttonElt.addEventListener('click', buttonClickHandler);
