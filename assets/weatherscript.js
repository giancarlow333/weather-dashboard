var buttonElt = document.querySelector('#search-btn');

var APIKey = "572862b5623017184deb426aa65b7d48";
var city;
var latitude;
var longitude;
var APIname;

// https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys

//fetch(queryURL);

/* Fetch location data
 * Uses geocoding API
 * (https://openweathermap.org/api/geocoding-api)
 */
city = "Los Angeles"; // for testing
var geocodeQueryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;

console.log(city);
console.log(geocodeQueryURL);

var buttonClickHandler = function (event) {
    event.preventDefault();
    console.log("HELLO!");
    fetch(geocodeQueryURL).then(function (response) {
        response.json().then(function (data) {
            APIname = data[0].name;
            latitude = data[0].lat;
            longitude = data[0].lon;
        });
    });
};

var queryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;

buttonElt.addEventListener('click', buttonClickHandler);

function fetchSearchedCityWeather (name) {
    return name;
}