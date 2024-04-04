// Variables

const apiKey = '928fa015f75badf93c021808572ba445';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// Function for checking the weather

async function checkWeather(city) {
  // Builds the URL for the API call
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //   If with error
  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    var data = await response.json();

    // Put the data into the DOM
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    // If For changing the image
    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png';
    }

    // Hide the error and displays the weather
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
  }
}
// Register the imput to make the research
searchBox.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    checkWeather(searchBox.value);
  }
});

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

checkWeather();
