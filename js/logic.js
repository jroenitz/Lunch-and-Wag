// Initial coordinates for map starting at downtown Austin
var userLat = 30.275371;
var userLon = -97.740110;
var geocoder;
var zipcode = "";

// display map based on coordinates
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: userLat, lng: userLon },
        zoom: 15
    });
    geocoder = new google.maps.Geocoder;
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
        console.log("submitted");

        // if the search bar has a value in it..
        if ($('#searchBar').val() !== "") {
            //set searched value to variable
            zipcode = $('#searchBar').val();
            window.searchText = zipcode;
            getLatLngByZipcode(zipcode);
        }
        // if the zipcode has been defined by the user sharing their location..
        else if (zipcode !== "") {
            window.searchText = zipcode;
            getWeather();
        }
        // if there is no zipcode saved
        else {
            console.log("No location entered");
            return;
        }

        // Define the settings for the API call as per yelp API documentation
if ($('#searchBar').val() == "") { var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+friendly,patio&categories=restaurants,bars&open_now=true&sort_by=distance&location=${window.searchText}`,
    "method": "GET",
    "headers": {
        "authorization": "Bearer mG2W4beNkid7kw7VedFpAGl3pnGUjsxvDHCalMUshB7fkFCSQTpeVxSMjtT5QOBCOoJPiYTPuG6o3B3qh6148amFphWJmTjtJdA7TLtAvr9VVxz4NjJG57EzQkWCXnYx",
        "cache-control": "no-cache",
        "postman-token": "3f23d8c3-ce48-a224-50c0-14b9094948fc"
    }
}

}else{ var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+friendly,patio&categories=restaurants,bars&open_now=true&sort_by=distance&location=${userLat},${userLon}`,
    "method": "GET",
    "headers": {
        "authorization": "Bearer mG2W4beNkid7kw7VedFpAGl3pnGUjsxvDHCalMUshB7fkFCSQTpeVxSMjtT5QOBCOoJPiYTPuG6o3B3qh6148amFphWJmTjtJdA7TLtAvr9VVxz4NjJG57EzQkWCXnYx",
        "cache-control": "no-cache",
        "postman-token": "3f23d8c3-ce48-a224-50c0-14b9094948fc"
    }
}}

   


        // Use AJAX to perform Yelp API call
        $.ajax(settings).done(function (response) {
            let results = response.businesses;

            //log your object, make sure it returns properly
            console.log(response.businesses)

            // center map on first result
            var latlon = { lat: results[0].coordinates.latitude, lng: results[0].coordinates.longitude };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: latlon
            });

            // add first 10 results to map
            for (var i = 0; i < 10; i++) {
                latlon = { lat: results[i].coordinates.latitude, lng: results[i].coordinates.longitude };
                var marker = new google.maps.Marker({
                    position: latlon,
                    map: map,
                    title: results[i].name
                });
            }

            //-----------------------Restaurant 0 ---------------------------


            //use the json object to go in and set variables


            var name0 = response.businesses[0].name
            var image0 = response.businesses[0].image_url
            // var location = response.businesses[0].
            var address0 = response.businesses[0].location.address1
            var phone0 = response.businesses[0].display_phone





            //console.log to check if variables are coorect 
            console.log("Name: " + name0)
            console.log("Image: " + image0)
            console.log("Address: " + address0)
            console.log("Phone: " + phone0)

            //declare variables that will create new html elements 
            var name0El = $("<h4>")
            var image0El = $("<img>")
            var address0El = $("<p>")
            var phone0El = $("<p>")


            //fill newly created elements
            name0El.text(name0)
            image0El.attr('src', image0)
            address0El.text(address0)
            phone0El.text(phone0)


            //add class to style information 
            name0El.addClass("restaurantName")
            image0El.addClass("restaurantImage")
            address0El.addClass("restaurantAddress")
            phone0El.addClass("restaurantPhone")



            //add created div to div in html
            $("#name0").html(name0El);
            $("#image0").html(image0El);
            $("#address0").html(address0El);
            $("#phone0").html(phone0El);



            //---------------------RESTAURANT 1-----------------------------


            //use the json object to go in and set variables


            var name1 = response.businesses[1].name
            var image1 = response.businesses[1].image_url
            // var location = response.businesses[1].
            var address1 = response.businesses[1].location.address1
            var phone1 = response.businesses[1].display_phone





            //console.log to check if variables are coorect 
            console.log("Name: " + name1)
            console.log("Image: " + image1)
            console.log("Address: " + address1)
            console.log("Phone: " + phone1)

            //declare variables that will create new html elements 
            var name1El = $("<h4>")
            var image1El = $("<img>")
            var address1El = $("<p>")
            var phone1El = $("<p>")


            //fill newly created elements
            name1El.text(name1)
            image1El.attr('src', image1)
            address1El.text(address1)
            phone1El.text(phone1)


            //add class to style information 
            name1El.addClass("restaurantName")
            image1El.addClass("restaurantImage")
            address1El.addClass("restaurantAddress")
            phone1El.addClass("restaurantPhone")


            //add created div to div in html
            $("#name1").html(name1El);
            $("#image1").html(image1El);
            $("#address1").html(address1El);
            $("#phone1").html(phone1El);

            //---------------------RESTAURANT 2-----------------------------


            //use the json object to go in and set variables


            var name2 = response.businesses[2].name
            var image2 = response.businesses[2].image_url
            // var location = response.businesses[0].
            var address2 = response.businesses[2].location.address1
            var phone2 = response.businesses[2].display_phone





            //console.log to check if variables are coorect 
            console.log("Name: " + name2)
            console.log("Image: " + image2)
            console.log("Address: " + address2)
            console.log("Phone: " + phone2)

            //declare variables that will create new html elements 
            var name2El = $("<h4>")
            var image2El = $("<img>")
            var address2El = $("<p>")
            var phone2El = $("<p>")


            //fill newly created elements
            name2El.text(name2)
            image2El.attr('src', image2)
            address2El.text(address2)
            phone2El.text(phone2)



            //add class to style information 
            name2El.addClass("restaurantName")
            image2El.addClass("restaurantImage")
            address2El.addClass("restaurantAddress")
            phone2El.addClass("restaurantPhone")


            //add created div to div in html
            $("#name2").html(name2El);
            $("#image2").html(image2El);
            $("#address2").html(address2El);
            $("#phone2").html(phone2El);

            //---------------------RESTAURANT 3-----------------------------


            //use the json object to go in and set variables


            var name3 = response.businesses[3].name
            var image3 = response.businesses[3].image_url
            // var location = response.businesses[3].
            var address3 = response.businesses[3].location.address1
            var phone3 = response.businesses[3].display_phone





            //console.log to check if variables are coorect 
            console.log("Name: " + name3)
            console.log("Image: " + image3)
            console.log("Address: " + address3)
            console.log("Phone: " + phone3)

            //declare variables that will create new html elements 
            var name3El = $("<h4>")
            var image3El = $("<img>")
            var address3El = $("<p>")
            var phone3El = $("<p>")


            //fill newly created elements
            name3El.text(name3)
            image3El.attr('src', image3)
            address3El.text(address3)
            phone3El.text(phone3)



            //add class to style information 
            name3El.addClass("restaurantName")
            image3El.addClass("restaurantImage")
            address3El.addClass("restaurantAddress")
            phone3El.addClass("restaurantPhone")

            //add created div to div in html
            $("#name3").html(name3El);
            $("#image3").html(image3El);
            $("#address3").html(address3El);
            $("#phone3").html(phone3El);

            //---------------------RESTAURANT 4-----------------------------


            //use the json object to go in and set variables


            var name4 = response.businesses[4].name
            var image4 = response.businesses[4].image_url
            // var location = response.businesses[4].
            var address4 = response.businesses[4].location.address1
            var phone4 = response.businesses[4].display_phone





            //console.log to check if variables are coorect 
            console.log("Name: " + name4)
            console.log("Image: " + image4)
            console.log("Address: " + address4)
            console.log("Phone: " + phone4)

            //declare variables that will create new html elements 
            var name4El = $("<h4>")
            var image4El = $("<img>")
            var address4El = $("<p>")
            var phone4El = $("<p>")


            //fill newly created elements
            name4El.text(name4)
            image4El.attr('src', image4)
            address4El.text(address4)
            phone4El.text(phone4)



            //add class to style information 
            name4El.addClass("restaurantName")
            image4El.addClass("restaurantImage")
            address4El.addClass("restaurantAddress")
            phone4El.addClass("restaurantPhone")


            //add created div to div in html
            $("#name4").html(name4El);
            $("#image4").html(image4El);
            $("#address4").html(address4El);
            $("#phone4").html(phone4El);

            //---------------------RESTAURANT 5-----------------------------


            //use the json object to go in and set variables


            var name5 = response.businesses[5].name
            var image5 = response.businesses[5].image_url
            // var location = response.businesses[5].
            var address5 = response.businesses[5].location.address1
            var phone5 = response.businesses[5].display_phone





            //console.log to check if variables are coorect 
            console.log("Name: " + name5)
            console.log("Image: " + image5)
            console.log("Address5: " + address5)
            console.log("Phone: " + phone5)

            //declare variables that will create new html elements 
            var name5El = $("<h4>")
            var image5El = $("<img>")
            var address5El = $("<p>")
            var phone5El = $("<p>")


            //fill newly created elements
            name5El.text(name5)
            image5El.attr('src', image5)
            address5El.text(address5)
            phone5El.text(phone5)



            //add class to style information 
            name5El.addClass("restaurantName")
            image5El.addClass("restaurantImage")
            address5El.addClass("restaurantAddress")
            phone5El.addClass("restaurantPhone")

            //add created div to div in html
            $("#name5").html(name5El);
            $("#image5").html(image5El);
            $("#address5").html(address5El);
            $("#phone5").html(phone5El);















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
            geocodeLatLng(geocoder, map);

            // reload the map centered on user's location
            initMap();
            // get the weather at the user's location
            getWeather();
        };
        console.log(userLat)
        console.log(userLon)

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






    });

    // check for Geolocation support. This code was taken from google maps api page
    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS.');
    }

    // Get zipcode from shared location. This code was adapted from code taken from google maps api page
    function geocodeLatLng(geocoder, map) {
        var latlng = { lat: userLat, lng: userLon };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                zipcode = results[0].address_components[6].long_name;
                // update zipcode in search field
                $('#searchBar').val("");
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
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

            // get icon code for weather icon
            var currentSky = response.weather[0].id;
            var iconCode = getSkyIcon(currentSky);
            // print weather icon to screen
            $("#sky-icon").attr("src", "http://openweathermap.org/img/wn/" + iconCode + "@2x.png");

            // get current date
            var currentDate = moment().format('l');
            // add date to screen
            $("#weather").text("Weather: " + currentDate);

            // get current temp
            var currentTemp = response.main.temp;
            // Convert from kelvin to farenheit
            currentTemp = (currentTemp - 273.15) * (9 / 5) + 32;
            currentTemp = Math.round(currentTemp);
            // add temp to screen
            $("#temp").text("Temperature: " + currentTemp + " °F");
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
    //function to convert zipcode to Longitude and latitude
    function getLatLngByZipcode(zipcode) {
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'address': 'zipcode' + zipcode }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                userLat = results[0].geometry.location.lat();
                userLon = results[0].geometry.location.lng();
                // get the weather at the zipcode the user entered
                getWeather();
            } else {
                alert("Request failed.")
            }

        })
    }


