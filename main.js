// On load get weather data
window.addEventListener('load', () => {
    getWeatherData();
  });


// Weather data
let weatherData;

// DOM elements
const daysContainer = document.getElementById('days_list');
let widget = document.getElementById('widget')

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
        daysContainer.innerHTML += `<li class="day_card" id=${day.id}>
        <h1 class="day_name">${getFullDayName(day.day)}</h1>
        <h2 class="weather_type">${getWeatherType(day.type)}</i></h2>
        <p class="weather_temp">${day.temp} ${weatherData.tempUnit}</p>
        </li>`;
    });

    // Add event for each day card
    daysContainer.childNodes.forEach(child => child.addEventListener("click", ()=> {
        const clickedItem = weatherData.days.find(day => child.id == day.id)
        console.log(clickedItem)
        // widget toggle
        widget.classList.toggle('show')
        widget.innerHTML = `
            <h1>${getFullDayName(clickedItem.day)}</h1>
            <h2>${getWeatherType(clickedItem.type)}</h2>
            <p>Temperature : ${clickedItem.temp} ${weatherData.tempUnit}</p>
            <p>Wind direction : ${clickedItem.windDirection}</p>
            <p>Wind speed :${clickedItem.windSpeed} ${weatherData.windSpeedUnit}</p>
        `
    }))
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
        case "Tue" : 
            return "Tuesday";
        case "Wed" : 
            return "Wednesday"
        case "Thur" :
            return "Thursday";
        case "Fri" : 
            return "Friday";
        case "Sat" : 
            return "Saturday";
        case "Sun" : 
            return "Sunday";
    }
}
