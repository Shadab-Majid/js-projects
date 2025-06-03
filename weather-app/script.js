const btn = document.querySelector('#searchBtn');
const input = document.querySelector('.input-box');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind-speed');

function checkWeather(city) {
    console.log(city);
    const api_key = '92915cf17261cd26176fbc8086b62293'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = fetch(`${url}`).then(response => response.json())
    console.log(weather_data)
}
btn.addEventListener("click", function(){ 
    checkWeather(input.value);
 });
