const displayName = document.querySelector("#displayname");

const displayTemp = document.querySelector("#temp");

const displayHumidity = document.querySelector("#humidity");

const displayWind = document.querySelector("#wind");

const weekDate = document.querySelectorAll(".card-title");

const weekIcon = document.querySelectorAll(".forecastIcon");

const searchInput = document.querySelector("#search-input");

const buttonAddCity = document.querySelector("#add-city");

const weekTemp = document.querySelectorAll(".tempforecast");

const weekHumid = document.querySelectorAll(".humidforecast");

const defaultCity = "charlotte";

CurrentWeather();
forecastWeather();
//event listener
buttonAddCity.addEventListener("click", function (e) {
    e.preventDefault();
    const lookup = searchInput.value;
    if (lookup !== "") {
        defaultCity = lookup;

       
        CurrentWeather();
        forecastWeather();
        
        
    }
    else { return }
});

// Today's weather///
function CurrentWeather() {
  var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + defaultCity + "&APPID=4d4f75f977fc59faeb9817db4af048db"

  $.ajax({
      url: currentURL,
      method: "GET"
  }).then(function (response) {
      console.log(response);

      displayName.innerHTML = defaultCity + " - " + moment().format('MMM Do YYYY, h:mm a') + " <img src ='https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png'>"
      displayTemp.innerHTML = "Temperature: " + (((response.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)) + "&#8457";
      displayHumidity.innerHTML = "Humidity: " + response.main.humidity + "%";
      displayWind.innerHTML = "WindSpeed: " + response.wind.speed;
  })
}
//function for displaying forecast
function forecastWeather() {
  //api
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + defaultCity + "&APPID=4d4f75f977fc59faeb9817db4af048db"
    //ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var temperature = [];
        var humidity = [];
        var windSpeed = [];
        var icon = [];
        var description = [];
        var date = [];
        var lat = 0;
        var lon = 0;
        
        
        for (i = 0; i < 40; i++) {
            temperature.push(((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0))
            humidity.push(response.list[i].main.humidity);
            windSpeed.push(response.list[i].wind.speed);
            icon.push(response.list[i].weather[0].icon);
            description.push(response.list[i].weather[0].description);
            date.push(response.list[i].dt_txt);
        }
        lat = response.city.coord.lat;
        lon = response.city.coord.lon;

        // Forecast//////
        forecast();
        function forecast() {
            var j = 0
            for (i = 0; i < weekDate.length; i++) {
                weekDate[i].innerHTML = date[j].substring(0, 10)
                weekTemp[i].innerHTML = "Temp: " + temperature[j] + "&#8457";
                weekHumid[i].innerHTML = "Humidity: " + humidity[j] + "%";
                weekIcon[i].src = "https://openweathermap.org/img/wn/" + icon[j] + ".png"
                j = j + 8
            };
        }
    














 




    })}
