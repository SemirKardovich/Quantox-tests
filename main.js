// On load get weather data
window.addEventListener('load', () => {
    getWeatherData();
  });


// Weather data
let weatherData;

// DOM elements
const daysContainer = document.getElementById('days_list');


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
        daysContainer.innerHTML += `<li class="day_card id="day_card">
        <h1 class="day_name">${getFullDayName(day.day)}</h1>
        <h2 class="weather_type">${getWeatherType(day.type)}</i></h2>
        <p class="weather_temp">${day.temp} ${weatherData.tempUnit}</p>
        </li>`;
    });
}


// Get weather type func
const getWeatherType = (type) => {
    if(type === "sunny"){
        return `<i class="fas fa-sun fa-3x"></i>`;
    }else if (type === "rainy") {
        return `<i class="fas fa-cloud-showers-heavy fa-3x"></i>`
    }else if(type === "cloudy"){
        return `<i class="fas fa-cloud fa-3x"></i>`
    }
}
// Get full day name 
const getFullDayName = (day) => {
    switch(day){
        case "Mon" : 
            return "Monday";
            break;
        case "Tue" : 
            return "Tuesday";
            break;
        case "Wed" : 
            return "Wednesday"
            break;
        case "Thur" :
            return "Thursday";
            break;
        case "Fri" : 
            return "Friday"
            break;
        case "Sat" : 
            return "Saturday"
            break;
        case "Sun" : 
            return "Sunday"
    }
}