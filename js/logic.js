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
            "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+friendly,patio&categories=restaurants,bars&open_now=true&sort_by=distance&location=${window.searchText}`,
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

           
           //-----------------------Restaurant 0 ---------------------------
           
           
            //use the json object to go in and set variables


            var name0 = response.businesses[0].name 
            var image0 = response.businesses[0].img_url
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
               image0El.attr("src")
               address0El.text(address0)
               phone0El.text(phone0)

            
    

                //add created div to div in html
            $("#name0").html(name0El);
            $("#address0").html(address0El);
            $("#phone0").html(phone0El);

            
            
            //---------------------RESTAURANT 1-----------------------------


            //use the json object to go in and set variables


             var name1 = response.businesses[1].name 
             var image1 = response.businesses[1].img_url
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
                image1El.attr("src")
                address1El.text(address1)
                phone1El.text(phone1)
 
             
     
 
                 //add created div to div in html
             $("#name1").html(name1El);
             $("#address1").html(address1El);
             $("#phone1").html(phone1El);

              //---------------------RESTAURANT 2-----------------------------

            
            //use the json object to go in and set variables


            var name2 = response.businesses[2].name 
            var image2 = response.businesses[2].img_url
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
               image2El.attr("src")
               address2El.text(address2)
               phone2El.text(phone2)

            
    

                //add created div to div in html
            $("#name2").html(name2El);
            $("#address2").html(address2El);
            $("#phone2").html(phone2El);

             //---------------------RESTAURANT 3-----------------------------

            
            //use the json object to go in and set variables


            var name3 = response.businesses[3].name 
            var image3 = response.businesses[3].img_url
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
               image3El.attr("src")
               address3El.text(address3)
               phone3El.text(phone3)

            
    

                //add created div to div in html
            $("#name3").html(name3El);
            $("#address3").html(address3El);
            $("#phone3").html(phone3El);

             //---------------------RESTAURANT 4-----------------------------

            
            //use the json object to go in and set variables


            var name4 = response.businesses[4].name 
            var image4 = response.businesses[4].img_url
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
               image4El.attr("src")
               address4El.text(address4)
               phone4El.text(phone4)

            
    

                //add created div to div in html
            $("#name4").html(name4El);
            $("#address4").html(address4El);
            $("#phone4").html(phone4El);

             //---------------------RESTAURANT 5-----------------------------

            
            //use the json object to go in and set variables


            var name5 = response.businesses[5].name 
            var image5 = response.businesses[5].img_url
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
               image5El.attr("src")
               address5El.text(address5)
               phone5El.text(phone5)

            
    

                //add created div to div in html
            $("#name5").html(name5El);
            $("#address5").html(address5El);
            $("#phone5").html(phone5El);
 
 


        

         


            
           
                    //psuedo code 
        //     <div class="callout" id="box1">
        //     <p>Pegasi B</p>
        //     <p><img src="https://placehold.it/400x370&text=Pegasi B" alt="image of a planet called Pegasi B"></p>
        //     <p class="lead">Copernican Revolution caused an uproar</p>
        //     <p class="subheader">Find Earth-like planets life outside the Solar System</p>
        // </div>
            
            /*

            //declare variables that will create new html elements 
            var thumbnailEl = $("<div>")
            var cityEl = $("<h4>")
            var iconEl = $("<img>")
            var weatherEl = $("<p>")
            var temperatureEl = $("<p>")
            var windSpeedEl = $("<p>")
            var humidityEl = $("<p>")
            var box2buttonEl = $("<div>")
            var buttonEl = $("<button>")

            //fill newly created divs
            cityEl.text(city)
            // iconEl.attr("src" + icon)
            weatherEl.text("Current weather: " + weather)
            temperatureEl.text("Temperature: " + temperatureF)
            windSpeedEl.text("Wind speed: " + windSpeed)
            humidityEl.text("Humidity: " + humidity)
            buttonEl.html("<button id='futureButton' class='btn btn-outline-success my-2 my-sm-0' type='submit'>Future</button>")

            //append elements to thumbnail div

            thumbnailEl.append(cityEl)
            thumbnailEl.append(iconEl)
            thumbnailEl.append(weatherEl)
            thumbnailEl.append(temperatureEl)
            thumbnailEl.append(windSpeedEl)
            thumbnailEl.append(humidityEl)
            box2buttonEl.append(buttonEl)

            //add class for box
            // thumbnailEl.addclass("thumbnail")

            //appened created div to div in html
            $("#box1").html(thumbnailEl);
            $("#box2").html(box2buttonEl)

            */






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