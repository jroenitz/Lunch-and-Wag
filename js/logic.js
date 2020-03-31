// Initial coordinates for map starting at downtown Austin
var userLat = 30.275371;
var userLon = -97.740110;
// display map based on coordinates
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: userLat, lng: userLon },
        zoom: 15
    });
}

//preceeds all jquery code
$(document).ready(function () {


    //check if JS is loaded properly 
    console.log("ready!")


    //click handler for submit button
    $("#searchButton").on("click", function (e) {

        //keeps from reloading page 
        e.preventDefault();

        //testing button click works
        console.log("submitted")

        //set searched value to variable
        window.searchText = $('#searchBar').val();

        // log searched value to test
        console.log(window.searchText);





        // Define the settings for the API call as per yelp API documentation
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+friendly&categories=restaurants,bars&open_now=true&sort_by=distance&location=${window.searchText}`,
            "method": "GET",
            "headers": {
                "authorization": "Bearer mG2W4beNkid7kw7VedFpAGl3pnGUjsxvDHCalMUshB7fkFCSQTpeVxSMjtT5QOBCOoJPiYTPuG6o3B3qh6148amFphWJmTjtJdA7TLtAvr9VVxz4NjJG57EzQkWCXnYx",
                "cache-control": "no-cache",
                "postman-token": "3f23d8c3-ce48-a224-50c0-14b9094948fc"
            }
        }


        // Use AJAX to perform Yelp API call
        $.ajax(settings).done(function (response) {
            let results = response.businesses;

            //log your object, make sure it returns properly
            console.log(response.businesses)









        }).fail(function (err) { console.log("something went wrong") });






    });












    

    // Click handler for share location button
    $("#share-location").on("click", function (event) {
        // gets the users gps location. This code was adapted from code taken from google maps api page
        event.preventDefault();
        var startPos;

        var geoSuccess = function (position) {
            startPos = position;
            userLat = startPos.coords.latitude;
            userLon = startPos.coords.longitude;
        };
        var geoError = function (error) {
            console.log('Error occurred. Error code: ' + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from location provider)
            //   3: timed out
        };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    });

    $("#update-map").on("click", function (event) {
        // update the map after getting the user's location
        event.preventDefault();
        initMap();
        getWeather();
    });

    // check for Geolocation support. This code was taken from google maps api page
    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS.');
    }

    

    // Portions of the weather api code were taken from the weather dashboard project

    function getWeather() {
        // query url for current weather
        var weatherQueryUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + userLat + "&lon=" + userLon + "&appid=a07b059ae0ff859a91d785bcde02804c";

        // call for current weather
        $.ajax({
            url: weatherQueryUrl,
            method: "GET"
        }).then(function (response) {

            // get current sky id
            var currentSky = response.weather[0].id;
            var iconCode = getSkyIcon(currentSky);
            console.log(iconCode);
            // $("#current-sky-icon").attr("src", "http://openweathermap.org/img/wn/" + iconCode + "@2x.png");

            // get current date
            var currentDate = moment().format('l');
            // add current date to heading of current city stats
            // $("#current-city").append(currentDate);

            // get current temp
            var currentTemp = response.main.temp;
            // Convert from kelvin to farenheit
            currentTemp = (currentTemp - 273.15) * (9 / 5) + 32;
            currentTemp = Math.round(currentTemp);
            console.log(currentTemp);
            // $("#current-temp").append("Temperature: " + currentTemp + " °F");
        });
    }
    // gets current weather based on api response. The things currently being returned are codes for the weather icon
    function getSkyIcon(b) {
        var a = b.toString();
        // Thunderstorm
        if (a[0] == "2") {
            return "11d";
        }
        // Drizzle
        else if (a[0] == "3") {
            return "09d";
        }
        // 511 is freezing rain, 6xx is snow
        else if (a == 511 || a[0] == 6) {
            return "13d";
        }
        // Rain
        else if (a[0] == 5) {
            return "10d";
        }
        else if (a == 781) {
            return // TORNADO
        }
        // mist/fog/dust except 781 is tornado
        else if (a[0] == 7) {
            return "50d";
        }
        // clear
        else if (a == 800) {
            return "01d";
        }
        // clouds
        else if (a[0] == 8) {
            return "02d";
        }
    }
});