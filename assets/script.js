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
    //storing all variables we need to be taken from the data
    var cityName = response.city.name;
    //do we really need this if we already have variable city?! I did it anyway.
    //var date = response.list[0].dt_txt; no longer using
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

    $("#today").append(iconDisplay);

    $("#today").append(cityName + "<br/>" + "Temperature: "
     + temp + "°C" + "<br/>" + "Humidity: " + humidity + "%" + "<br/>" + 
     "Wind Speed: " + windSpeed + "KPH");
    
    })
})
});
