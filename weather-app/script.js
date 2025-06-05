const btn = document.querySelector('#searchBtn');
const input = document.querySelector('.input-box');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind-speed');

const images = [
    {src: "./assets/clear.png", alt: "clear"},
    {src: "./assets/cloud.png", alt: "cloud"},
    {src: "./assets/mist.png", alt: "mist"},
    {src: "./assets/rain.png", alt: "rain"},
    {src: "./assets/snow.png", alt: "snow"},
    {src: "./assets/404.png", alt: "404"}
];

async function checkWeather(city) {
    const api_key = '92915cf17261cd26176fbc8086b62293';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
        const weather_data = await fetch(url).then(response => response.json());

        if (weather_data.cod !== 200) {
            document.querySelector('.weather-body').style.display = "block"
            weather_img.src = images[5].src;
            description.innerHTML = "City not found";
            return;
        }
        
        document.querySelector('.weather-body').style.display = "block"
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind.innerHTML = `${weather_data.wind.speed} km/h`;
        description.innerHTML = `${weather_data.weather[0].description}`;

        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = images[1].src;
                break;
            case 'Clear':
                weather_img.src = images[0].src;
                break;
            case 'Rain':
                weather_img.src = images[3].src;
                break;
            case 'Mist':
                weather_img.src = images[2].src;
                break;
            case 'Snow':
                weather_img.src = images[4].src;
                break;
            default:
                weather_img.src = images[5].src;
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

btn.addEventListener("click", function() {
    const city = input.value.trim();
    if (city) {
        checkWeather(city);
    }
});
