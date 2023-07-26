var APIKey = "572862b5623017184deb426aa65b7d48";
var city;
var latitude;
var longitude;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;

// https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys

fetch(queryURL);

/* Fetch location data
 * Uses geocoding API
 * (https://openweathermap.org/api/geocoding-api)
 */
var geocodeQueryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;

fetch(geocodeQueryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.name);
        console.log(data.lat);
        console.log(data.lon);
    });

city = "Los Angeles";
console.log(city);