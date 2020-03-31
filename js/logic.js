
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


   


















    
        

});
