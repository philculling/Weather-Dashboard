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
    var date = response.list[0].dt_txt;
    var icon = response.list[0].weather[0].icon;
    var temp = (response.list[0].main.temp - 273.15).toFixed(0);
    var humidity = response.list[0].main.humidity;
    var windSpeed = response.list[0].wind.speed;

    //testing variables
    console.log (cityName);
    console.log (date);
    console.log (icon);
    /*
    I nearly cracked this before it was time to go.
    See the website. It has a url that includes the code for the icon within it.
    I think you need to create another variable called something like
    iconURL, which you create by concatenating part of that url from their
    website and insering variable icon into it?
    */
    console.log (temp);
    console.log (humidity);
    console.log (windSpeed);

    $("#today").append(cityName + " " + date + " " + icon + "<br/>" + "Temperature: "
     + temp + "<br/>" + "Humidity: " + humidity + "<br/>" + "Wind Speed: " + windSpeed);
    
    })
})
});