
$(document).ready(function(){

// $("#local").click(function(){

// var search=("#search").val();})


var queryURL="api.openweathermap.org/data/2.5/weather?q="+ cities +"&api_key=949721057e0abbd2c69e2da2fbb5b8e9";
var cities=["Austin,Chicago,New York,Orlando,San Francisco,Seattle,Denver,Atlanta"];

function searchCity(cities) {


$.ajax({
    url:queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    
  });}

  for (var i = 0; i < cities.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $(".a");
// Adding a data-attribute
    a.attr("data-name", cities[i]);
    // Providing the initial button text
    a.text(cities[i])

  };})