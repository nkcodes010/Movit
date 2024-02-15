//grab the mobile nav element
let mobileNavElem = document.getElementById("mobile-nav");


// hamburger display function

function displayMobileNav() {
    // console.log("PROF!!!!!");
    mobileNavElem.classList.toggle("show");
}


// Grab form elements
const formElem = document.getElementById('location-form');
const inputElem = document.getElementById('location-input');
const weatherInfoElem = document.getElementById('weather-info');




function fetchAPI() {
    const name = inputElem.value.trim();
     // const APIKey = 'YOUR-API-KEY';
     fetch(`https://restcountries.com/v3.1/name/${name}`)
     .then(response => response.json())
     .then(data => {
       console.log(data);
     })
     .catch(error => {
       console.log(error);
     });
}

// formElem.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = inputElem.value.trim();
    
//     // variable called API Key
//     // const APIKey = 'YOUR-API-KEY';
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         // renderWeatherData(data);
//       })
//       .catch(error => {
//         console.log(error);
//         weatherInfoElem.innerHTML = '<p class="text-danger">Please try again!</p>';
//       });

//     inputElem.value = '';
//   });


//   function renderWeatherData(data) {
//     const country = data.location;
//     const currentWeather = data.current;

//     const html = `
//       <h2 class="text-center">${location.name}, ${location.country}</h2>
//       <div class="text-center">
//         <img src="${currentWeather.weather_icons[0]}" alt="${currentWeather.weather_descriptions[0]}" class="weather-icon">
//         <p>${currentWeather.weather_descriptions[0]}</p>
//         <p>Temperature: ${currentWeather.temperature}°C</p>
//         <p>Feels Like: ${currentWeather.feelslike}°C</p>
//         <p>Wind Speed: ${currentWeather.wind_speed} km/s</p>
//         <p>Humidity: ${currentWeather.humidity}%</p>
//         <p>UV Index: ${currentWeather.uv_index}</p>
//         <p>Observation Time: ${currentWeather.observation_time}</p>
//       </div>
//     `;

//     weatherInfo.innerHTML = html;
//   }