console.log (1 + 2);//tested links ok, is fine.

var cities = [];
var jsoncities = JSON.stringify(cities);

function setItems() {
  localStorage.setItem("mostRecentArray", jsoncities);
}
//The array, cities, is now stored in local storage as a string.
//checks
console.log(cities);
console.log(jsoncities);

var mostRecentArray = JSON.parse(localStorage.getItem("mostRecentArray"));
console.log(mostRecentArray);

function getItems() {
cities.push(mostRecentArray);
}

getItems();


function renderButtons() {
  $("#history").empty();//to prevent repetition
  for (i = 0; i < cities.length; i++) {
    //for each one, add a button  
    var a = $("<button>");
    //for each one, make sure it has the text from the array
    a.text(cities[i]);
    //for each one, give it a data-attribute which is the same as its city name
    a.attr("data-city", cities[i]);//not sure this has worked or how to test
    $("#history").append(a);
    }
    //I have already tried the clear previous content code here
 }

$("#search-button").on("click", function(event) {
    event.preventDefault();
    console.log ("my event listener code is correct");
    setItems();

//clear previous content at this point
$("#today").empty;
$("#todayPlusOne").empty;
$("#todayPlusTwo").empty;
$("#todayPlusThree").empty;
$("#todayPlusFour").empty;
$("#todayPlusFive").empty;
/*
Weird. Emptying #today works every time. Emptying the lower section is not,
whatever I'm trying, like by class card-body, or individually by section.
*/

  var city = $("#search-input").val().trim();
    console.log(city);
    cities.push(city);
    renderButtons();

  var queryURLCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=bb192fe9bf9d6707169935aa00429800";
  console.log (queryURLCity);

  $.ajax({
    url: queryURLCity,
    method: "GET"
  }).then(function(response) {
    //storing the latitude and longitude data
    var lat = response[0].lat;
    var lon = response[0].lon;

    console.log (lat);
    console.log (lon);

    var queryURLGeo = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=bb192fe9bf9d6707169935aa00429800";
    console.log (queryURLGeo);

    //query
    $.ajax({
        url: queryURLGeo,
        method: "GET"
    }).then(function(response) {
    
      //I have tried putting the clearing code here

    //storing all variables we need to be taken from the data for day 1
    var cityName = response.city.name;
    //do we really need this if we already have variable city?! I did it anyway.
    //var date = response.list[0].dt_txt; no longer using
    var icon = response.list[0].weather[0].icon;
    var temp = (response.list[0].main.temp - 273.15).toFixed(0);
    var humidity = response.list[0].main.humidity;
    var windSpeed = response.list[0].wind.speed;
    
    //testing variables
    console.log (cityName);
//    console.log (date); no longer using
    console.log (icon);
    var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log (iconURL);
    iconDisplay = $("<img>");
    iconDisplay.attr("src",iconURL);
    console.log (iconDisplay);
    console.log (temp);
    console.log (humidity);
    console.log (windSpeed);
    
    //create variable for current date using moment.js as I want to display it differently.
    var today = moment();
    $("#today").text(today.format("DD/MM/YY"));
    //create date variables for next 5 days
    var todayPlusOne = moment().add(1, 'days').format("DD/MM/YY");
    //test
    console.log (todayPlusOne);//worked fine, displayed tomorrow's date
    var todayPlusTwo = moment().add(2, 'days').format("DD/MM/YY");
    var todayPlusThree = moment().add(3, 'days').format("DD/MM/YY");
    var todayPlusFour = moment().add(4, 'days').format("DD/MM/YY");
    var todayPlusFive = moment().add(5, 'days').format("DD/MM/YY");

    $("#today").append(iconDisplay);

    $("#today").append(cityName + "<br/>" + "Temperature: "
     + temp + "°C" + "<br/>" + "Humidity: " + humidity + "%" + "<br/>" + 
     "Wind Speed: " + windSpeed + "KPH");

    //variables for forecast day 1
    var icontodayPlusOne = response.list[7].weather[0].icon;
    var temptodayPlusOne = (response.list[7].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusOne = response.list[7].main.humidity;
    //tests
    console.log (icontodayPlusOne);
    console.log (temptodayPlusOne);
    console.log (humiditytodayPlusOne);
    var iconURLtodayPlusOne = "http://openweathermap.org/img/wn/" + icontodayPlusOne + "@2x.png";
    iconDisplaytodayPlusOne = $("<img>");
    iconDisplaytodayPlusOne.attr("src",iconURLtodayPlusOne);

    //add date, icon and data to correct box day 1
    $("#forecast").empty;//not working
    $("#todayPlusOne").empty;//not working
    $(".card-body").empty;//not working. Trying everything here...
    //Is it in fact clearing but adding it back, adding York then Moscow?
    $("#todayPlusOne").append(todayPlusOne);
    $("#todayPlusOne").append(iconDisplaytodayPlusOne);
    $("#todayPlusOne").append("Temperature: " + temptodayPlusOne + "°C" + "<br/>" 
    + "Humidity: " + humiditytodayPlusOne + "%");
    $("#todayPlusOne").css("background-color", "aquamarine");
        
    //variables for forecast day 2
    var icontodayPlusTwo = response.list[15].weather[0].icon;
    var temptodayPlusTwo = (response.list[15].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusTwo = response.list[15].main.humidity;
    var iconURLtodayPlusTwo = "http://openweathermap.org/img/wn/" + icontodayPlusTwo + "@2x.png";
    iconDisplaytodayPlusTwo = $("<img>");
    iconDisplaytodayPlusTwo.attr("src",iconURLtodayPlusTwo);
    
    //add date, icon and data to correct box day 2
    $("#todayPlusTwo").empty;
    $("#todayPlusTwo").append(todayPlusTwo);
    $("#todayPlusTwo").append(iconDisplaytodayPlusTwo);
    $("#todayPlusTwo").append("Temperature: " + temptodayPlusTwo + "°C" + "<br/>" 
    + "Humidity: " + humiditytodayPlusTwo + "%");
    $("#todayPlusTwo").css("background-color", "aquamarine");

    //variables for forecast day 3
    var icontodayPlusThree = response.list[23].weather[0].icon;
    var temptodayPlusThree = (response.list[23].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusThree = response.list[23].main.humidity;
    var iconURLtodayPlusThree = "http://openweathermap.org/img/wn/" + icontodayPlusThree + "@2x.png";
    iconDisplaytodayPlusThree = $("<img>");
    iconDisplaytodayPlusThree.attr("src",iconURLtodayPlusThree);
    
    //add date, icon and data to correct box day 3
    $("#todayPlusThree").empty;
    $("#todayPlusThree").append(todayPlusThree);
    $("#todayPlusThree").append(iconDisplaytodayPlusThree);
    $("#todayPlusThree").append("Temperature: " + temptodayPlusThree + "°C" + "<br/>" 
    + "Humidity: " + humiditytodayPlusThree + "%");
    $("#todayPlusThree").css("background-color", "aquamarine");
        
    //variables for forecast day 4
    var icontodayPlusFour = response.list[31].weather[0].icon;
    var temptodayPlusFour = (response.list[31].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusFour = response.list[31].main.humidity;
    var iconURLtodayPlusFour = "http://openweathermap.org/img/wn/" + icontodayPlusFour + "@2x.png";
    iconDisplaytodayPlusFour = $("<img>");
    iconDisplaytodayPlusFour.attr("src",iconURLtodayPlusFour);

     //add date, icon and data to correct box day 4
     $("#todayPlusFour").empty;
     $("#todayPlusFour").append(todayPlusFour);
     $("#todayPlusFour").append(iconDisplaytodayPlusFour);
     $("#todayPlusFour").append("Temperature: " + temptodayPlusFour + "°C" + "<br/>" 
     + "Humidity: " + humiditytodayPlusFour + "%");
     $("#todayPlusFour").css("background-color", "aquamarine");
         
    //variables for forecast day 5
    var icontodayPlusFive = response.list[39].weather[0].icon;
    var temptodayPlusFive = (response.list[39].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusFive = response.list[39].main.humidity;
    var iconURLtodayPlusFive = "http://openweathermap.org/img/wn/" + icontodayPlusFive + "@2x.png";
    iconDisplaytodayPlusFive = $("<img>");
    iconDisplaytodayPlusFive.attr("src",iconURLtodayPlusFive);

     //add date, icon and data to correct box day 5
     $("#todayPlusFive").empty;
     $("#todayPlusFive").append(todayPlusFive);
     $("#todayPlusFive").append(iconDisplaytodayPlusFive);
     $("#todayPlusFive").append("Temperature: " + temptodayPlusFive + "°C" + "<br/>" 
     + "Humidity: " + humiditytodayPlusFive + "%");
     $("#todayPlusFive").css("background-color", "aquamarine");
         
    })
})
});

/*
I am aiming in the following section for the user to be able to click 
on the buttons in the history section, and for the code to run again,
but using the value of what was clicked on this time, when previously
it was the user input.
But I'm getting v confused, going round in circles!
Could we give each history button a data attribute, which is the city name
then retrieve the city name using data attribute
and run the function again using an updated city name? This is what I've started
to attempt;
*/
$("#history").on('click', function (event) {
      console.log("Testing event listener");//works
      console.log(this);//returns div with id history
      event.preventDefault();
      $("#today").empty;
      $("#todayPlusOne").empty;
      $("#todayPlusTwo").empty;
      $("#todayPlusThree").empty;
      $("#todayPlusFour").empty;
      $("#todayPlusFive").empty;//none of these .empty is working
      //if it goes wrong, delete from here
      $("#history").each(function() {
        var clickedHistory = $(this).attr("data-city");
        console.log(clickedHistory);//returns undefined
      })

});

/* This was what you used in the last challenge to target by data hour using
this.
$(".row").each(function(){
  var currentHour = parseInt(moment().hour());
  var rowHour = parseInt($(this).attr("data-hour"));
  console.log(rowHour);
  if (rowHour === currentHour) {
    $(this).addClass("present");
  }
  else if (rowHour > currentHour) {
    $(this).addClass("future");
  }
  else {
    $(this).addClass("past");
  }
})
*/

 //Calling the renderButtons function to display the list of cities
 //that will be taken from local storage
 renderButtons();