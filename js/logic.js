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
    console.log("ready!");


    //click handler for submit button
    $("#searchButton").on("click", function (e) {
        $("#restaurant-container").removeClass("hidden");
        //keeps from reloading page 
        e.preventDefault();
        $(".center").removeClass("hidden")
        //testing button click works
        console.log("submitted");


        // Define the settings for the API call as per yelp API documentation
        if ($('#searchBar').val() !== "") {
            zipcode = $('#searchBar').val();
            window.searchText = zipcode;
            getLatLngByZipcode(zipcode);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+friendly,patio&categories=restaurants,bars&open_now=true&sort_by=distance&location=${window.searchText}&limit=30`,
                "method": "GET",
                "headers": {
                    "authorization": "Bearer mG2W4beNkid7kw7VedFpAGl3pnGUjsxvDHCalMUshB7fkFCSQTpeVxSMjtT5QOBCOoJPiYTPuG6o3B3qh6148amFphWJmTjtJdA7TLtAvr9VVxz4NjJG57EzQkWCXnYx",
                    "cache-control": "no-cache",
                    "postman-token": "3f23d8c3-ce48-a224-50c0-14b9094948fc"
                }
            }

        } else {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+friendly,patio&categories=restaurants,bars&open_now=true&sort_by=distance&location=${userLat},${userLon}&limit=30`,
                "method": "GET",
                "headers": {
                    "authorization": "Bearer mG2W4beNkid7kw7VedFpAGl3pnGUjsxvDHCalMUshB7fkFCSQTpeVxSMjtT5QOBCOoJPiYTPuG6o3B3qh6148amFphWJmTjtJdA7TLtAvr9VVxz4NjJG57EzQkWCXnYx",
                    "cache-control": "no-cache",
                    "postman-token": "3f23d8c3-ce48-a224-50c0-14b9094948fc"
                }
            }
        }



        // Use AJAX to perform Yelp API call
        $.ajax(settings).done(function (response) {
            let results = response.businesses;

            //log your object, make sure it returns properly
            console.log(response.businesses);

            // center map on first result
            var latlon = { lat: results[0].coordinates.latitude, lng: results[0].coordinates.longitude };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: latlon
            });

            getWeather();
            $(".center").removeClass("hidden");

          
            var display = $('#my-lists');

           display.empty();

            var itemPerPage = 6; // custom item per page
            var currentPage = 1;
            var startItem = 0;
            var endItem = itemPerPage - 1;
            if (results.length < itemPerPage) {
                endItem = results.length - 1;
            }


            function showItems(start, end) {
                for (var i = start; i <= end; i++) {
                    latlon = { lat: results[i].coordinates.latitude, lng: results[i].coordinates.longitude };
                    var marker = new google.maps.Marker({
                        position: latlon,
                        map: map,
                        title: results[i].name
                    });
                    name = results[i].name
                    image = results[i].image_url
                    address = results[i].location.display_address
                    phone = results[i].display_phone
                    console.log("Name: " + name)
                    console.log("Image: " + image)
                    console.log("Address: " + address)

                    console.log("Phone: " + phone);
    
                    // method 2, used jQuery
                    var wrapEl = $('<div></div>').addClass('column');
                    var itemEl = $('<div></div>').addClass('callout');
                    var nameEl = $('<p></p>').text(name).addClass('name');
                    var linkEl = $('<a></a>');
                    linkEl.attr('href', 'https://www.google.com/maps/place/' + address);
                    linkEl.attr('target', '_blank');
                    linkEl.append( // inside it, append an image
                        $('<img>') // new image
                          .attr('src', image) // set image SRC attribute
                        .addClass("restaurantImage")
                      ); // end append
                    var addressEl = $('<p></p>').text(address).addClass('lead');
                    var phoneEl = $('<p></p>').text(phone).addClass('subheader');
                    var saveToEl = $('<buton>').text('Save to favorite')
                    .addClass('Savetofav button primary')
                    // .click( createSaveToCallback( name ) );
    
                    itemEl.append(nameEl);
                    itemEl.append(linkEl);
                    itemEl.append(addressEl);
                    itemEl.append(phoneEl);
                    itemEl.append(saveToEl);
    
                    wrapEl.append(itemEl);
    
                    display.append(wrapEl);
                }
            }

            // function createSaveToCallback(itemEl){
            //     return function(){
            //       alert('you clicked on ' + name);
            //     }
            // }

            showItems(startItem, endItem);

            if (endItem >= results.length - 1) { // no more items, hide loadmore button 
                $("#loadMore").hide();

            } else { 
                $("#loadMore").show();

                // add click event
                $("#loadMore").click(function () {
                    // move to next page
                    startItem = currentPage * itemPerPage;
                    endItem = (currentPage + 1) * itemPerPage - 1;
                    if (results.length - 1 < endItem) {
                        endItem = results.length - 1;
                    }
                    currentPage += 1;
                    showItems(startItem, endItem);
                    
                    if (endItem >= results.length - 1) { // no more items, hide loadmore button 
                        $("#loadMore").hide();
                    }
                });
            }       

           

        }).fail(function (err) { console.log("something went wrong") });
    });

    // Click handler for share location button
    $("#share-location").on("click", function (event) {
        // gets the users gps location. This code was adapted from code taken from google maps api page
        event.preventDefault();
        var startPos;

        // clear out the search bar
        $('#searchBar').val("");

        var geoSuccess = function (position) {
            startPos = position;
            userLat = startPos.coords.latitude;
            userLon = startPos.coords.longitude;

            // reload the map centered on user's location
            initMap();
            geocodeLatLng(geocoder, map);
        };
        console.log(userLat);
        console.log(userLon);

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
    console.log(latlng)
    geocoder.geocode({ 'location': latlng }, function (results, status) {
        console.log(results)
        if (status =google.maps.GeocoderStatus.OK) {
            zipcode = results[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
            console.log(zipcode)
            // update zipcode in search field
            $('#searchBar').val(zipcode);
            console.log(zipcode)
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


        $("#sky-icon").attr("src", "https://openweathermap.org/img/wn/" + iconCode + "@2x.png");


        // get current date
        var currentDate = moment().format('l');
        // add date to screen
        $("#date").text(currentDate);
        // $("#weather").text("Weather:");

        // get current temp
        var currentTemp = response.main.temp;
        // Convert from kelvin to farenheit
        currentTemp = (currentTemp - 273.15) * (9 / 5) + 32;
        currentTemp = Math.round(currentTemp);
        // add temp to screen
        $("#temp").text("Temperature: " + currentTemp + " °F");

        // get current wind
        var wind = response.wind.speed;
        $("#wind").text("Wind speed: " + wind + " MPH");
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
        return; // TORNADO
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
            $(".center").removeClass("hidden");
        } else {
            alert("Request failed.");
        }
    });  

// function loadAnimation() {

//     var elem = $("#loader");
//     var degree = 0;
//     var interval = setInterval(frame, 5);
//     function frame() {
//         if ($("#loader-row").classList.contains("hidden")) {
//             clearInterval(interval);
//         } else {
//             degree += 5;
//             elem.setAttribute('style','transform:rotate(' + degree + 'deg)')
//         }

//     }
}
