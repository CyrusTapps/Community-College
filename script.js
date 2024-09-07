const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const weatherIcon = document.getElementById("weather-icon");
const city = "Nashville";
    
async function checkWeather(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=nashville&appid=" + `${apiKey}`);


    if (response.status == 404 || response.status == 401 || response.status == 400) {
        document.getElementById("temp").textContent = "Error";
        document.getElementById("wind").textContent = "Error";
    } else {
        var data = await response.json();

        document.getElementById("temp").textContent = Math.round(data.main.temp) + "° F";
        document.getElementById("wind").textContent = data.wind.speed + " MPH";
            //CyLuvsKat//
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./assets/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./assets/snow.png";
        }
    }
}

document.addEventListener('DOMContentLoaded', checkWeather());
