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
    var lat = response.lat;//this must be wrong, needs fixing before continuing
    var lon = response.lon;

    console.log (lat);
    console.log (lon);
  
})
});