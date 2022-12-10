// WEEK 5
// 1. In your project, when a user searches for
// a city (example: New York), it should display
// the name of the city on the result page and
// the current temperature of the city.

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

searchCity("London");

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function displayWeather(response) {
  // console.log(response.data);
  let searchedCity = document.querySelector("#city-name");
  searchedCity.innerHTML = response.data.name;
  // document.querySelector("#city-name").innerHTML = response.data.name;

  let temperatureInCity = document.querySelector("#temperature");
  temperatureInCity.innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

// 2. Add a Current Location button. When clicking
// on it, it uses the Geolocation API to get your GPS
// coordinates and display and the city and current
// temperature using the OpenWeather API.

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

// WEEK 4
// 1. In your project, display the current date
// and time using JavaScript: Tuesday 16:00
function currentDayTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];

  let currentHours = date.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }

  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  // console.log(currentDay, currentHours, currentMinutes);
  let dayAndTime = document.querySelector("#day-time");
  return (dayAndTime.innerHTML = `${currentDay} ${currentHours}:${currentMinutes}`);
}
let currentDate = new Date();
currentDayTime(currentDate);

// 3. Display a fake temperature (i.e 17) in Celsius
// and add a link to convert it to Fahrenheit. When clicking on it,
// it should convert the temperature to Fahrenheit.
// When clicking on Celsius, it should convert it back to Celsius.
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureInCity = document.querySelector("#temperature");
  temperatureInCity.innerHTML = 19;
}

let celsiusTemperature = document.querySelector("#celsius-link");
celsiusTemperature.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureInCity = document.querySelector("#temperature");
  let fahrenheit = Math.round((20 * 9) / 5 + 32);
  console.log(fahrenheit);
  temperatureInCity.innerHTML = fahrenheit;
}
let fahrenheitTemperature = document.querySelector("#fahrenheit-link");
fahrenheitTemperature.addEventListener("click", convertToFahrenheit);
