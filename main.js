// On load get weather data
window.addEventListener('load', () => {
    getWeatherData();
  });


// Weather data
let weatherData;

// DOM elements

const daysContainer = document.getElementById('days_container')


// Fetch weather data func
const getWeatherData = async () => {
    const res = await fetch('./weatherData.json')
    const data = await res.json()
    weatherData = data
    renderDays()
}


// Render days func

const renderDays = () => {
    weatherData.days.forEach(day => {
        daysContainer.innerHTML += `<li>${day.day}</li>`
    });
}


