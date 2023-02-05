console.log (1 + 2);//tested links ok, is fine.

$("#search-button").on("click", function(event) {
    event.preventDefault();
    console.log ("my event listener code is correct");
    
  var city = $("#search-input").val().trim();
  console.log(city);

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
    var icontodayPlusOne = response.list[8].weather[0].icon;
    var temptodayPlusOne = (response.list[8].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusOne = response.list[8].main.humidity;
    //tests
    console.log (icontodayPlusOne);
    console.log (temptodayPlusOne);
    console.log (humiditytodayPlusOne);
    var iconURLtodayPlusOne = "http://openweathermap.org/img/wn/" + icontodayPlusOne + "@2x.png";
    iconDisplaytodayPlusOne = $("<img>");
    iconDisplaytodayPlusOne.attr("src",iconURLtodayPlusOne);

    //variables for forecast days 2-5
    var icontodayPlusTwo = response.list[16].weather[0].icon;
    var temptodayPlusTwo = (response.list[16].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusTwo = response.list[16].main.humidity;
    var iconURLtodayPlusTwo = "http://openweathermap.org/img/wn/" + icontodayPlusTwo + "@2x.png";
    iconDisplaytodayPlusTwo = $("<img>");
    iconDisplaytodayPlusTwo.attr("src",iconURLtodayPlusTwo);

    var icontodayPlusThree = response.list[24].weather[0].icon;
    var temptodayPlusThree = (response.list[24].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusThree = response.list[24].main.humidity;
    var iconURLtodayPlusThree = "http://openweathermap.org/img/wn/" + icontodayPlusThree + "@2x.png";
    iconDisplaytodayPlusThree = $("<img>");
    iconDisplaytodayPlusThree.attr("src",iconURLtodayPlusThree);

    var icontodayPlusFour = response.list[32].weather[0].icon;
    var temptodayPlusFour = (response.list[32].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusFour = response.list[32].main.humidity;
    var iconURLtodayPlusFour = "http://openweathermap.org/img/wn/" + icontodayPlusFour + "@2x.png";
    iconDisplaytodayPlusFour = $("<img>");
    iconDisplaytodayPlusFour.attr("src",iconURLtodayPlusFour);

    var icontodayPlusFive = response.list[40].weather[0].icon;
    var temptodayPlusFive = (response.list[40].main.temp - 273.15).toFixed(0);
    var humiditytodayPlusFive = response.list[40].main.humidity;
    var iconURLtodayPlusFive = "http://openweathermap.org/img/wn/" + icontodayPlusFive + "@2x.png";
    iconDisplaytodayPlusFive = $("<img>");
    iconDisplaytodayPlusFive.attr("src",iconURLtodayPlusFive);

    //date will be obtained using moment
    //test variables using console log
    //append text for ONE day only to test
    //commit
    
    })
})
});
