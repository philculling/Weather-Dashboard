console.log (1 + 2);//tested links ok, is fine.

$("#search-button").on("click", function(event) {
    //remove default
    event.preventDefault();
    //think of something simple to ask it to do
    console.log ("my event listener code is correct");
    
  // Here we grab the text from the input box
  var city = $("#search-input").val().trim();
  console.log(city);
})

