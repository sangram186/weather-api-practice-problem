// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// 412a19a0b97caa8789a1bec972206897

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', updateWeather);

function updateWeather() {
    const cityName = document.getElementById('input-box').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=412a19a0b97caa8789a1bec972206897`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dataManage(data);
    })
    .catch(error => alert('City not found'))
}


function dataManage(info){
    const image = document.getElementById('image');
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temp');
    const WeatherStatus = document.getElementById('status');

    image.setAttribute('src', `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`);
    cityName.innerText = info.name;
    temp.innerText = info.main.temp;
    WeatherStatus.innerText = info.weather[0].main;
}