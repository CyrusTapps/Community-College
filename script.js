const apiKey = "752a802622ba8d12cd6c6d18438a7291";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const weatherIcon = document.querySelector(".weather-icon");
const city = "Nashville";
    
async function checkWeather(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=nashville&appid=752a802622ba8d12cd6c6d18438a7291");

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
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
