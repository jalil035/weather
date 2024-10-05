
const apiKey = '94f9877897c103eefc1b349411950c76';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector('.weather_icon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = Math.round( data.main.feels_like);
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = 'images/clouds.png'
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = 'images/clear.png'
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = 'images/rain.png'
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = 'images/drizzle.png'
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = 'images/mist.png'
    }
        
};

searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
});

